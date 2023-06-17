import { Editor } from '@tiptap/react';
import { FC } from 'react';

import MyDropdown from './MyDropdown';

type ToolbarProps = {
    editor: Editor | null
}

const Toolbar: FC<ToolbarProps> = ({ editor }): JSX.Element | null => {
    if (!editor) return null;
    
    const formatOptions = [
        { option: "Paragraph", onClick: () => editor.chain().setParagraph().run() },
        { option: "Heading 1", onClick: () => editor.chain().toggleHeading({ level: 1 }).run() },
        { option: "Heading 2", onClick: () => editor.chain().toggleHeading({ level: 2 }).run() },
        { option: "Heading 3", onClick: () => editor.chain().toggleHeading({ level: 3 }).run() }
    ];

    const formatDisplayer = (): string => {
        if (editor.isActive("heading", { level: 1 })) return "Heading 1";
        else if (editor.isActive("heading", { level: 2 })) return "Heading 2";
        else if (editor.isActive("heading", { level: 3 })) return "Heading 3";

        return "Paragraph";
    }

    return (
    <div className='border-b-2 border-b-secondary-dark dark:border-b-secondary-light p-2'>
        <MyDropdown currentOption={formatDisplayer()} options={formatOptions}/>
        
    </div>
    );
};

export default Toolbar;