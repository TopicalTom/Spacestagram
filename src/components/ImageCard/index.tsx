import './ImageCard.scss';
import { useEffect, useState } from 'react';
import ImagePreview from '../ImagePreview';
import ImageDetails from '../ImageDetails';
import ImageSocial from '../ImageSocial';

interface ImageProps {
    isLiked?: boolean
    date: string,
    title: string,
    url: string,
    explanation: string,
};

const ImageCard = ({ date, title, url, explanation, isLiked }: ImageProps) => {
    
    return (
        <div className="image-card" key={date}>
            <ImagePreview 
                url={url} 
                title={title} 
            />
            <ImageDetails 
                title={title}
                explanation={explanation}
                date={date} 
            />
            <ImageSocial />
        </div>
    );
};

export default ImageCard;