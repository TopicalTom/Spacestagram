import './ImageCard.scss';
import { FC, useEffect, useState } from 'react';
import { likeSelector, User } from '../../store/reducers';
import { useSelector } from 'react-redux';

// Components
import ImagePreview from '../ImagePreview';
import ImageDetails from '../ImageDetails';
import ImageSocial from '../ImageSocial';

interface ImageProps {
    url: string,
    title: string,
    date: string,
    explanation: string,
    copyright?: string,
    hdurl: string,
    likes: User[],
    media_type: string,
    service_version: string
};

const ImageCard: FC<ImageProps> = (props) => {
    const { likes } = useSelector(likeSelector);
    const [ isLiked, setIsLiked ] = useState(false);

    useEffect(() => {
        const likeStatus = likes.includes(props.date);
        setIsLiked(likeStatus);
    },[likes, props.date]);
    
    return (
        <article className="image-card">
            <ImagePreview 
                url={props.url} 
                title={props.title} 
            />
            <ImageDetails 
                imageRef={props}
                isLiked={isLiked}
            />
            <ImageSocial 
                likes={props.likes}
                isLiked={isLiked}
            />
        </article>
    );
};

export default ImageCard;