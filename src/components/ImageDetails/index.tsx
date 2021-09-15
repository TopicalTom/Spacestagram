import './ImageDetails.scss';
import Tag from '../Tag';
import Like from '../Like';

interface ImageDetailsProps {
    isLiked: boolean,
    title: string,
    explanation: string,
    date: string
};

const ImageDetails = ({ title, explanation, date, isLiked }: ImageDetailsProps) => {    
    return (
        <div className="image-details">
            <div className="image-details__content">
                <h2>{title}</h2>
                <p>{explanation}</p>
                <Tag date={date} />
            </div>
            <Like 
                isLiked={isLiked}
                photoRef={date}
            />
        </div>
    );
};

export default ImageDetails;