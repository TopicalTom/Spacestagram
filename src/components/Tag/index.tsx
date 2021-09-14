import './Tag.scss';
import { Calendar } from 'react-feather';

interface TagProps {
    date: string
};

const Tag = ({ date }: TagProps) => {
    
    return (
        <div className="Tag">
            <Calendar 
                color="white" 
                size={14}
            />
            <h4>{date}</h4>
        </div>
    );
};

export default Tag;