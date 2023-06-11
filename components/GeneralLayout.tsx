import { NextPage } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import { IoCreateOutline } from 'react-icons/io5';

import Navbar from './Navbar';

type GeneralLayoutProps = {
    children: ReactNode
}

const GeneralLayout: NextPage<GeneralLayoutProps> = ({ children }) => {
    return (
    <div className="flex flex-row">
        <Navbar />

        {children}

        <Link href='/create' className='fixed bottom-10 end-10 z-10 bg-action opacity-80 p-4 rounded-full hover:scale-110 transition'>
            <IoCreateOutline color='white' size={30} />
        </Link>
    </div>
    );
}

export default GeneralLayout;