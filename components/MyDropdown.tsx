import { FC, useState } from 'react';

type MyDropdownProps = {
    currentOption: string,
    options: { option: string, onClick: () => void }[]
}

const MyDropdown: FC<MyDropdownProps> = ({ currentOption, options }): JSX.Element => {
    const [isShow, setIsShow] = useState(false);

    return (
    <button className="rounded-md py-2 px-3 hover:bg-secondary-light hover:scale-[0.98]" onBlur={() => setIsShow(false)} onMouseDown={() => setIsShow(!isShow)}>
        { currentOption }
        {
            isShow && (
                <ul className="fixed z-10 space-y-1 bg-white rounded-lg py-2 px-3 top-full start-0">
                    { options.map(({ option, onClick}) => {
                        return (
                            <li key={option} onMouseDown={onClick}>
                                { option }
                            </li>
                        );
                    }) }
                </ul>
            )
        }
    </button>
    );
};

export default MyDropdown;