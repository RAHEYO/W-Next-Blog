import { FC } from 'react';

type DividerProps = {

}

const Divider: FC<DividerProps> = (props): JSX.Element => {
    return (
        <div className='mx-5 h-7 w-[2px] bg-secondary-dark dark:bg-secondary-light' />
    );
};

export default Divider;