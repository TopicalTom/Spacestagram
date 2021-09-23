import './ImageDetails.scss';
import { FC } from 'react';
import { Image } from '../../store/reducers';

// Helpers
import { readableDate } from '../../helpers';

// Components
import Tag from '../Tag';
import Like from '../Like';
import Accordion from '../Accordion';

interface ImageDetailsProps {
    isLiked: boolean,
    imageRef: Image
};

const ImageDetails: FC<ImageDetailsProps> = (props) => { 
    const { title, date, explanation } = props.imageRef;
    const readable = readableDate(date);   

    return (
        <div className="image-details">
            <h2 
                className="image-details__title">
                {title}
            </h2>
            <Accordion 
                content={explanation} 
            />
            <div className="image-details__tags">
                <Tag 
                    date={readable} 
                />
            </div>
            <Like 
                {...props}
            />
        </div>
    );
};

export default ImageDetails;