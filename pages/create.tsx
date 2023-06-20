import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useEditor, EditorContent, getMarkRange, Range } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link';

import Toolbar from '@/components/Toolbar';
import Spacebar from '@/components/Spacebar';
import LinkBubbleMenu from '@/components/LinkBubbleMenu';

type createProps = {

}

const CreatePage: NextPage<createProps> = () => {
    const [textSelectionRange, setTextSelectionRange] = useState<Range>();

    // This is the given property from Tiptap to control all the actions of an editor!
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: "Smt very interesting! @_@"
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    target: "",
                },
            })
        ],
        editorProps: {
            // Callback called for everytime you click it!
            handleClick(view, pos, event) {
                const { state } = view;
                // Interpretation: calculating the range of current selection using the current position and the type of content
                const selectingRange = getMarkRange(state.doc.resolve(pos), state.schema.marks.link);

                if (selectingRange) setTextSelectionRange(selectingRange);
            },
            attributes: {
                class: "prose lg:prose-xl focus:outline-none dark:prose-invert max-w-full mx-auto h-full p-2 border-x-4 rounded-md"
            }
        }
    });

    // Updating the selection in UI
    useEffect(() => {
        if (editor && textSelectionRange) editor.commands.setTextSelection(textSelectionRange);
    }, [editor, textSelectionRange])

    return (
    <div className="w-screen h-screen p-10">
        <Toolbar editor={editor} />

        <Spacebar className="h-[100px]" />

        { editor && <LinkBubbleMenu editor={editor} /> }
        <EditorContent  editor={editor} />
    </div>
    );
}

export default CreatePage;