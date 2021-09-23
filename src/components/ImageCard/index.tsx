import './ImageCard.scss';
import { FC, useEffect, useState } from 'react';
import { likeSelector } from '../../store/reducers';
import { useSelector } from 'react-redux';

// Components
import ImagePreview from '../ImagePreview';
import ImageDetails from '../ImageDetails';
import ImageSocial from '../ImageSocial';

interface ImageProps {
    date: string,
    title: string,
    url: string,
    explanation: string,
};

const ImageCard: FC<ImageProps> = (props) => {
    const { date, title, url } = props;
    const { likes } = useSelector(likeSelector);
    const [ isLiked, setIsLiked ] = useState(false);

    useEffect(() => {
        const likeStatus = likes.includes(date);
        setIsLiked(likeStatus);
    },[likes, date]);
    
    return (
        <article className="image-card">
            <ImagePreview 
                url={url} 
                title={title} 
            />
            <ImageDetails 
                imageRef={props}
                isLiked={isLiked}
            />
            <ImageSocial 
                isLiked={isLiked}
            />
        </article>
    );
};

export default ImageCard;