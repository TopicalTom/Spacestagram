import './Like.scss';
import { Heart } from 'react-feather';

interface LikeProps {
    title: string,
    explanation: string,
    date: string
};

const Like = () => {
    
    return (
        <button 
            className="Like" 
            onClick={() => {}}>
            <Heart color="white" size={24} />
        </button>
    );
};

export default Like;