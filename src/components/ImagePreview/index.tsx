import './ImagePreview.scss';
import { FC } from 'react';

interface ImagePreviewProps {
    url: string
    title: string
};

const ImagePreview: FC<ImagePreviewProps> = ({ url, title }) => {
    
    return (
        <div className="image-preview">
            <img 
                src={url} 
                alt={title} 
            />
        </div>
    );
};

export default ImagePreview;