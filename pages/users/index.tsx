import { NextPage } from 'next';

import Navbar from '@/components/Navbar';

type indexProps = {

}

const UsersPage: NextPage<indexProps> = () => {
    return (
    <div>
        <Navbar />
    </div>
    );
}

export default UsersPage;