import './ImagePreview.scss';

interface ImagePreviewProps {
    url: string
    title: string
};

const ImagePreview = ({ url, title }: ImagePreviewProps) => {
    
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