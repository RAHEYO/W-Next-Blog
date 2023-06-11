import Link from 'next/link';
import { FC, useState, useRef, useEffect } from 'react';
import { BiHomeSmile } from 'react-icons/bi';
import { TbBrandBlogger } from 'react-icons/tb';
import { FiUsers, FiMail } from 'react-icons/fi';
import { HiMenuAlt1, HiMenuAlt2 } from 'react-icons/hi';
import { IconType } from 'react-icons';

import Logo from './Logo';
import Spacebar from './Spacebar';

// Navbar navs
type NavBarItemProps = {
    href: string,
    icon: IconType,
    title: string,
    navOpen: boolean,
}

const NavBarItem: FC<NavBarItemProps> = (props) => {
    return (
        <Link key={props.href} href={props.href} className='flex flex-row items-center border-b-2 border-secondary-dark dark:border-secondary-light p-3 mt-3 hover:scale-95 transition'>
            <props.icon size={25} />
            { props.navOpen && ( <span className='ml-2'>{props.title}</span> ) }
        </Link>
    );
}

const navItems = [
    { href: '/', icon: BiHomeSmile, title: "Home" },
    { href: '/blogs', icon: TbBrandBlogger, title: "Blogs" },
    { href: '/users', icon: FiUsers, title: "Users" },
    { href: '/comments', icon: FiMail, title: "Comments" },
];

// Nav Open & Closed UI switch
const NAV_OPEN_WIDTH = "w-[200px]";
const NAV_CLOSED_WIDTH = "w-[50px]";

// Local Storage key for navOpen propperty
export const VISIBILITY: string = "navOpen";

const Navbar: FC = (): JSX.Element => {
    const navRef = useRef<HTMLElement>(null);
    const [navOpen, setNavOpen] = useState(true);

    const toggleNavbar = () => {
        localStorage.setItem(VISIBILITY, JSON.stringify(!navOpen));
        setNavOpen(!navOpen);
    }
    
    useEffect(() => {
        const currentNavStorage = localStorage.getItem(VISIBILITY);
        
        // If it is the first-render
        if (currentNavStorage == null) {
            localStorage.setItem(VISIBILITY, "true");
            setNavOpen(JSON.parse(localStorage.getItem(VISIBILITY)!));
        }

        // Then update the UI ref accordingly
        const currentNavbar = navRef.current;

        if (currentNavbar) {
            const { classList } = currentNavbar;

            if (navOpen) {
                classList.remove(NAV_CLOSED_WIDTH);
                classList.add(NAV_OPEN_WIDTH);
            } else {
                classList.remove(NAV_OPEN_WIDTH);
                classList.add(NAV_CLOSED_WIDTH);
            }
        }
        
    }, [navOpen]);

    return (
        <div className='h-screen sticky top-0 p-3'>
            <div className='w-[200px] flex flex-row items-center justify-between'>
                <button className='self-end' onClick={toggleNavbar}>
                    { navOpen? <HiMenuAlt1 size={30} /> : <HiMenuAlt2 size={30} />}
                </button>

                <Link className='flex flex-row w-full items-center justify-center' href='/'>
                    <Logo />
                    <Spacebar className='w-3' />
                    <h1>W-Blog</h1>
                </Link>
            </div>
            
            <Spacebar className='h-10' />

            <nav ref={navRef} className={`flex flex-col ${NAV_OPEN_WIDTH} transition-width overflow-hidden`}>
                {
                navItems.map((item) => {
                    return NavBarItem({...item, navOpen});
                }) 
                }
            </nav>
        </div>
    );
};

export default Navbar;