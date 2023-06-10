import Navbar from '@/components/Navbar';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

type indexProps = {

}

const BlogsPage: NextPage<indexProps> = () => {
    return (
    <div>
        <Navbar />
    </div>
    );
}

export default BlogsPage;