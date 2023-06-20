import { FC, useCallback, useState } from 'react';
import { BubbleMenu, Editor } from '@tiptap/react';
import { TbArrowUpRightCircle } from 'react-icons/tb';
import { FiEdit3 } from 'react-icons/fi';
import { BiUnlink } from 'react-icons/bi';

import LinkForm, { LinkValue, validateLink } from './LinkForm';

type LinkBubbleMenuProps = {
    editor: Editor
}

const LinkBubbleMenu: FC<LinkBubbleMenuProps> = ({ editor }): JSX.Element => {
    const [isEditing, setIsEditing] = useState(false);

    const visitLink = useCallback(() => {
        const { href } = editor.getAttributes("link");

        if (href) window.open(href, "_blank");
    }, [editor]);

    const toEditLink = () => {
        console.log("Editing");

        setIsEditing(true);
    };
    
    const changeLink = useCallback((linkValue: LinkValue) => {
        linkValue.link = validateLink(linkValue.link);
    
        if (linkValue.openInNewTab) {
            editor.commands.setLink({ href: linkValue.link, target: "_blank" });
        } else {
            editor.commands.setLink({ href: linkValue.link });
        }

        setIsEditing(false);
    }, [editor]);

    const unlink = useCallback(() => {
        editor.commands.unsetLink();
    }, [editor]);

    // Getting the initial LinkValue before editing it
    const getInitialLinkValue = useCallback((): LinkValue => {
        const { href, target } = editor.getAttributes("link");

        return { link: href, openInNewTab: target ? true : false };
    }, [editor]);

    return (
        <BubbleMenu 
        editor={editor} 
        shouldShow={() => editor.isActive("link") } 
        tippyOptions={{
            onHide: () => setIsEditing(false)
        }}
        className='rounded space-x-2 shadow-lg px-2 py-1 z-10'>
            <LinkForm key="LinkBubbleMenuKey" visible={isEditing} onSubmit={changeLink} initialValue={getInitialLinkValue()} />

            { !isEditing && (
            <>
                <button onClick={visitLink}>
                    <TbArrowUpRightCircle size={17} />
                </button>
                <button onClick={toEditLink}>
                    <FiEdit3 size={17} />
                </button>
                <button onClick={unlink}>
                    <BiUnlink size={17} />
                </button>
            </>
            ) }
        </BubbleMenu>
    );
};

export default LinkBubbleMenu;