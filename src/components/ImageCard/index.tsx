import './ImageCard.scss';
import { useEffect, useState } from 'react';
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

const ImageCard = (props: ImageProps) => {
    const { date, title, url } = props;
    const { likes } = useSelector(likeSelector);
    const [ isLiked, setIsLiked ] = useState(false);

    useEffect(() => {
        const likeStatus = likes.includes(date);
        setIsLiked(likeStatus);
    },[likes, date]);
    
    return (
        <div className="image-card">
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
        </div>
    );
};

export default ImageCard;

/*
import './ImageCard.scss';
import { useEffect, useState } from 'react';
import ImagePreview from '../ImagePreview';
import ImageDetails from '../ImageDetails';
import ImageSocial from '../ImageSocial';
import { likeSelector } from '../../store/reducers';
import { useSelector } from 'react-redux';

interface ImageProps {
    date: string,
    title: string,
    url: string,
    explanation: string,
};

const ImageCard = ({ date, title, url, explanation }: ImageProps) => {
    const { likes } = useSelector(likeSelector);
    const [ isLiked, setIsLiked ] = useState(false);

    useEffect(() => {
        const likeStatus = likes.includes(date);
        setIsLiked(likeStatus);
    },[likes, date]);
    
    return (
        <div className="image-card">
            <ImagePreview 
                url={url} 
                title={title} 
            />
            <ImageDetails 
                title={title}
                explanation={explanation}
                date={date} 
                isLiked={isLiked}
            />
            <ImageSocial 
                isLiked={isLiked}
            />
        </div>
    );
};

export default ImageCard;

*/