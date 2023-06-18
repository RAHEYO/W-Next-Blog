import { NextPage } from 'next';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder'

import Toolbar from '@/components/Toolbar';
import Spacebar from '@/components/Spacebar';

type createProps = {

}

const CreatePage: NextPage<createProps> = () => {
    // This is the given property from Tiptap to control all the actions of an editor!
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: "Smt very interesting! @_@"
            })
        ],
        editorProps: {
            attributes: {
                class: "prose lg:prose-xl focus:outline-none dark:prose-invert max-w-full mx-auto h-full p-2 border-x-4 rounded-md"
            }
        }
    });

    return (
    <div className="w-screen h-screen p-10">
        <Toolbar editor={editor} />

        <Spacebar className="h-[100px]" />

        <EditorContent  editor={editor} />
    </div>
    );
}

export default CreatePage;