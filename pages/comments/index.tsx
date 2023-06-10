import { NextPage } from 'next';

import Navbar from '@/components/Navbar';

type indexProps = {

}

const CommentsPage: NextPage<indexProps> = () => {
    return (
    <div>
        <Navbar />
    </div>
    );
}

export default CommentsPage;