import './ImageDetails.scss';
import Tag from '../Tag';
import Like from '../Like';
import { readableDate } from '../../helpers/readableDate';
import Accordion from '../Accordion';

interface ImageDetailsProps {
    isLiked: boolean,
    title: string,
    explanation: string,
    date: string
};

const ImageDetails = ({ title, explanation, date, isLiked }: ImageDetailsProps) => { 
    const readable = readableDate(date);   

    return (
        <div className="image-details">
            <h2 className="image-details__title">{title}</h2>
            <Accordion content={explanation} />
            <div className="image-details__tags">
                <Tag date={readable} />
            </div>
            <Like 
                isLiked={isLiked}
                photoRef={date}
            />
        </div>
    );
};

export default ImageDetails;