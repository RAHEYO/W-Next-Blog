import { FC, ReactNode, useCallback } from 'react';
import classnames from 'classnames';

type StyleButtonProps = {
    children: ReactNode,
    disabled: boolean,
    onClick: () => void,
}

const defaultButtonStyle = "rounded-md bg-secondary-dark p-1 hover:scale-95 text-secondary-light transition";

const StyleButton: FC<StyleButtonProps> = ({ children, disabled, onClick }): JSX.Element => {
    const getActiveStyle = useCallback(() => {
        if (!disabled) {
            return "dark:bg-primary dark:text-primary-dark bg-primary-dark text-primary";
        }
    }, [disabled])

    return (
    <button className={classnames(defaultButtonStyle, getActiveStyle())} onMouseDown={onClick}>
        {children}
    </button>
    );
};

export default StyleButton;