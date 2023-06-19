import { FC, useState } from 'react';
import { BiLinkAlt } from 'react-icons/bi';

import StyleButton from './StyleButton';

type LinkingButtonProps = {
    onSubmit: (linkValue: LinkValue) => void
}

export type LinkValue = {
    link: string,
    openInNewTab: boolean
}

const LinkingButton: FC<LinkingButtonProps> = ({ onSubmit }): JSX.Element => {
    const [isShowForm, setIsShowForm] = useState(false);
    const [linkValue, setLinkValue] = useState({ link: "", openInNewTab: false });

    const submitHandler = () => {
        linkValue.link = validateLink(linkValue.link);

        onSubmit(linkValue);

        // Close it afterwards~
        setIsShowForm(false);
    }

    return (
        <div className='relative' onKeyDown={({ key }) => {
            if (key === 'Escape') {
                setIsShowForm(false);
            }
        }}>
            { /* The linking button itself */ }
            <StyleButton active={false} onClick={() => setIsShowForm(!isShowForm)}>
                <BiLinkAlt size={19}/>
            </StyleButton>

            { /* The opened linking form */ }
            {
                isShowForm && (
                <div className="absolute top-full z-10 bg-secondary dark:bg-secondary-dark rounded-lg py-2 px-3 space-y-2 border-[1px] shadow-lg">
                    <input type="text" autoFocus onChange={({ target }) => setLinkValue({ ...linkValue, link: target.value })} placeholder="https://compsci-final.vercel.app/" className="rounded border-2 border-secondary-dark focus:border-primary-dark focus:dark:border-primary py-1 px-2 text-primary-dark dark:text-primary" />

                    <div className="flex flex-row space-x-1">
                        <input type="checkbox" id='open-in-new-tab' onChange={({ target }) => setLinkValue({ ...linkValue, openInNewTab: target.checked })} />
                        <label htmlFor="open-in-new-tab">Open in new tab</label>
                    </div>
                    
                    <button type="submit" onClick={submitHandler} className="bg-action rounded px-3 py-2 w-full">Apply</button>
                </div>
                )
            }
            
        </div>
    );
};

export default LinkingButton;

function validateLink(link: string): string {
    try {
        return new URL(link).origin;
    } catch (error) {
        return new URL("https://" + link).origin;
    }
}
