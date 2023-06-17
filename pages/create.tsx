import { NextPage } from 'next';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import Toolbar from '@/components/Toolbar';
import Spacebar from '@/components/Spacebar';

type createProps = {

}

const CreatePage: NextPage<createProps> = () => {
    // This is the given property from Tiptap to control all the actions of an editor!
    const editor = useEditor({
        extensions: [StarterKit],
    });

    return (
    <div className="w-screen h-screen p-10">
        <Toolbar editor={editor} />

        <Spacebar className="h-[100px]" />

        <EditorContent className="border-4 rounded-lg border-secondary-dark dark:border-secondary-light" editor={editor} />
    </div>
    );
}

export default CreatePage;