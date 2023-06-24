import { ChangeEventHandler, FC, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import DummyImages from '@/public/DummyImages';
import ModalContainer from "./ModalContainer";
import GalleryImage from './GalleryImage';
import Spacebar from './Spacebar';

type ImageModalProps = {
    visible: boolean,
    onClose: () => void,
    insertImages: (newImgs: string[]) => void
}

const ImageModal: FC<ImageModalProps> = ({ visible, onClose, insertImages }): JSX.Element => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);

    const checkIfSelected = (src: string): boolean => {
        if (selectedImages.find(selectedSrc => selectedSrc === src)) return true;
        
        return false;
    }
    const toggleSelection = (imgSrc: string, checked: boolean): void => {
        if (!checked) setSelectedImages([...selectedImages, imgSrc]);
        else {
            selectedImages.splice(selectedImages.indexOf(imgSrc), 1);
            setSelectedImages([...selectedImages]);
        }
    }

    const uploadLocal: ChangeEventHandler<HTMLInputElement> = (element): void => {
        const { target } = element;
        const { files } = target;

        if (!files || !files[0].type.startsWith('image')) return;

        console.log(files[0]);
        // setSelectedImages([...selectedImages, files[0]]);
    }

    const submitAllImages = () => {
        insertImages(selectedImages);
        setSelectedImages([]);
    }

    return (
        <ModalContainer visible={visible} onClose={onClose}>
            { /* Image Gallery */ }
            <div className="flex w-1/2 h-1/2 bg-secondary-light dark:bg-secondary-dark rounded-3xl p-3">
                <div className='h-full w-3/4 flex flex-wrap overflow-y-auto rounded-md'>
                    {
                        DummyImages.map(({ src }, index) => {
                            return <GalleryImage key={src} src={src} alt={`Img No.: ${index}`} checked={checkIfSelected(src)} toggleSelect={toggleSelection} />;
                        })
                    }
                </div>

                <div className='basis-1/4 bg-black p-3'>
                    <input hidden type="file" id="local_upload" onChange={uploadLocal} />
                    <label htmlFor='local_upload' className='flex border border-dashed rounded-md cursor-pointer border-action text-action items-center justify-center p-3'>
                        <AiOutlineCloudUpload size={25} color='action' />
                        <Spacebar className='w-2' />
                        <span>Local Files</span>
                    </label>

                    <Spacebar className='h-10' />

                    <button type="submit" className="w-full rounded bg-action p-2" onClick={submitAllImages}>
                        Upload
                    </button>
                </div>
            </div>
        </ModalContainer>
    );
};

export default ImageModal;