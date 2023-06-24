import { FC } from 'react';
import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';

type GalleryImageProps = {
    src: string,
    alt: string,
    checked: boolean,
    toggleSelect: (src: string, checked: boolean) => void
}

const GalleryImage: FC<GalleryImageProps> = ({ src, alt, checked, toggleSelect }): JSX.Element => {

    return (
        <div className="relative flex cursor-pointer" onClick={() => toggleSelect(src, checked)}>
            {/* The image */}
            <Image className='object-cover hover:scale-110 transition' src={src} width={100} height={100} alt={alt} />
            
            {/* Checkmark for selected */}
            {
                checked &&
                <div className='absolute top-2 start-2'>
                    <BsCheckCircleFill size={17} color='#3B82F6' />
                </div>
            }
        </div>
    );
};

export default GalleryImage;