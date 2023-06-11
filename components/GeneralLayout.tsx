import { NextPage } from 'next';
import { ReactNode } from 'react';

import Navbar from './Navbar';
import Spacebar from './Spacebar';

type GeneralLayoutProps = {
    children: ReactNode
}

const GeneralLayout: NextPage<GeneralLayoutProps> = ({ children }) => {
    return (
    <div className="flex flex-row">
        <Navbar />

        {children}

        {/* Build the createPost floating button */}
    </div>
    );
}

export default GeneralLayout;