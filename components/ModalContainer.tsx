import { FC, MouseEventHandler, ReactNode, useId } from 'react';

type ModalContainerProps = {
    children: ReactNode,
    visible: boolean,
    onClose: () => void,
}

const ModalContainer: FC<ModalContainerProps> = ({ children, visible, onClose }): JSX.Element | null => {
    const containerId = useId();

    // When the modal bg (the entire z-50 layer) is clicked, close it! Otherwise, don't do anything~
    const onClickHandler: MouseEventHandler<HTMLDivElement> = (event: any) => {
        // The id of the component that we clicked
        const idOnclicked = event.target.id;

        if (idOnclicked  === containerId) onClose();
    }
    
    if (!visible) {
        return null;
    }

    return (
    <div id={containerId} onClick={onClickHandler} className="fixed flex inset-0 z-50 items-center justify-center bg-primary dark:bg-primary-dark backdrop-blur-[1px] bg-opacity-5">
        { children }
    </div>
    );
};

export default ModalContainer;