import './Tag.scss';
import { FC } from 'react';
import { Calendar } from 'react-feather';

interface TagProps {
    date: string
};

const Tag: FC<TagProps> = ({ date }) => {
    
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