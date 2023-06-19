import { FC, ReactNode, useCallback } from 'react';
import classnames from 'classnames';

type StyleButtonProps = {
    children: ReactNode,
    active: boolean,
    onClick: () => void,
}

const defaultButtonStyle = "rounded-md bg-secondary-dark p-1 hover:scale-95 text-secondary-light transition";

const StyleButton: FC<StyleButtonProps> = ({ children, active, onClick }): JSX.Element => {
    const getActiveStyle = useCallback(() => {
        if (active) {
            return "dark:bg-primary dark:text-primary-dark bg-black text-primary";
        }
    }, [active])

    return (
    <button className={classnames(defaultButtonStyle, getActiveStyle())} onMouseDown={onClick}>
        {children}
    </button>
    );
};

export default StyleButton;