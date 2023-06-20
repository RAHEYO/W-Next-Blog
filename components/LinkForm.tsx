import { FC, useEffect, useState } from 'react';

type LinkFormProps = {
    visible: boolean,
    onSubmit: (linkValue: LinkValue) => void,
    initialValue?: LinkValue
}

export type LinkValue = {
    link: string,
    openInNewTab: boolean
}

const LinkForm: FC<LinkFormProps> = ({ visible, onSubmit, initialValue }): JSX.Element => {
    const [linkValue, setLinkValue] = useState<LinkValue>({ link: "", openInNewTab: false });

    useEffect(() => {
        if (initialValue) setLinkValue(initialValue);
    }, [initialValue]);

    return (
    <>
    {
        visible ? (
            <div className='bg-secondary dark:bg-secondary-dark rounded-lg border-[1px] py-2 px-3 space-y-2'>
                <input type="text" autoFocus onChange={({ target }) => setLinkValue({ ...linkValue, link: target.value })} placeholder="https://compsci-final.vercel.app/" className="rounded border-2 border-secondary-dark focus:border-primary-dark focus:dark:border-primary py-1 px-2 text-primary-dark dark:text-primary" value={linkValue.link} />

                <div className="flex flex-row space-x-1">
                    <input type="checkbox" id='open-in-new-tab' onChange={({ target }) => setLinkValue({ ...linkValue, openInNewTab: target.checked })} checked={linkValue.openInNewTab} />
                    <label htmlFor="open-in-new-tab">Open in new tab</label>
                </div>
                
                <button type="submit" onClick={() => onSubmit(linkValue)} className="bg-action rounded px-3 py-2 w-full">Apply</button>
            </div>
        ) : null
    }
    </>
    );
};
export function validateLink(link: string): string {
    try {
        return new URL(link).href;
    } catch (error) {
        return new URL("https://" + link).href;
    }
}

export default LinkForm;