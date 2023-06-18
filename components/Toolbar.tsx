import { Editor } from '@tiptap/react';
import { FC } from 'react';
import { FaBold } from 'react-icons/fa';
import { FiItalic, FiCode } from 'react-icons/fi';
import { LuUnderline } from 'react-icons/lu';
import { RiStrikethrough, RiDoubleQuotesL } from 'react-icons/ri';
import { BiCodeCurly as BiCodeBlock, BiLinkAlt } from 'react-icons/bi';
import { BsListStars } from 'react-icons/bs';
import { TbBrandYoutubeKids } from 'react-icons/tb';
import { CgImage } from 'react-icons/cg';



import MyDropdown from './MyDropdown';
import Spacebar from './Spacebar';
import StyleButton from './StyleButton';
import Divider from './Divider';

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
    <div className='flex flex-row border-b-2 p-2 border-b-secondary-dark dark:border-b-secondary-light justify-center items-center'>
        <MyDropdown currentOption={formatDisplayer()} options={formatOptions}/>

        <Divider />

        { /* The row for text styles */ }
        <div className='flex-row space-x-3'>
            <StyleButton disabled={false} onClick={() => editor.chain().focus().toggleBold().run()}>
                <FaBold size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => editor.chain().focus().toggleItalic().run()}>
                <FiItalic size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <LuUnderline size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => editor.chain().focus().toggleStrike().run()}>
                <RiStrikethrough size={19}/>
            </StyleButton>
        </div>

        <Divider />

        { /* The row for content types/formats */ }
        <div className='flex-row space-x-3'>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <RiDoubleQuotesL size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <FiCode size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <BiCodeBlock size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <BiLinkAlt size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <BsListStars size={19}/>
            </StyleButton>
        </div>

        <Divider />

        { /* The row for additional plugins such as Youtube and Image */ }
        <div className='flex-row space-x-3'>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <TbBrandYoutubeKids size={19}/>
            </StyleButton>
            <StyleButton disabled={false} onClick={() => console.log("MAKE THAT SHIT BOLD!!!")}>
                <CgImage size={19}/>
            </StyleButton>
        </div>

    </div>
    );
};

export default Toolbar;