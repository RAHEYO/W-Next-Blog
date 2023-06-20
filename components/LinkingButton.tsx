import { FC, useState } from 'react';
import { Editor } from '@tiptap/react';
import { BiLinkAlt } from 'react-icons/bi';

import StyleButton from './StyleButton';
import LinkForm, { LinkValue, validateLink } from './LinkForm';

type LinkingButtonProps = {
    editor: Editor
}

const LinkingButton: FC<LinkingButtonProps> = ({ editor }): JSX.Element => {
    const [isShowForm, setIsShowForm] = useState(false);

    const submitHandler = (linkValue: LinkValue) => {
        linkValue.link = validateLink(linkValue.link);
    
        if (linkValue.openInNewTab) {
            editor.commands.setLink({ href: linkValue.link, target: "_blank" });
        } else {
            editor.commands.setLink({ href: linkValue.link });
        }

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
            <div className="absolute top-full z-10 shadow-lg">
                <LinkForm key="LinkingButtonKey" visible={isShowForm} onSubmit={submitHandler} />
            </div>
            
        </div>
    );
};

export default LinkingButton;

