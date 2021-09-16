import './ImageDetails.scss';
import Tag from '../Tag';
import Like from '../Like';
import { readableDate } from '../../helpers/readableDate';

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
            <div className="image-details__content">
                <h2>{title}</h2>
                <p>{explanation}</p>
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