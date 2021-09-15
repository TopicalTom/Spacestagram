import './Like.scss';
import { Heart } from 'react-feather';
import { toggleLike } from '../../store/actions';
import { authSelector } from '../../store/reducers';
import { useSelector, useDispatch } from 'react-redux';

interface LikeProps {
    photoRef: string,
    isLiked: boolean
};

const Like = ({ photoRef, isLiked }: LikeProps) => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);

    return (
        <button 
            className="like" 
            onClick={() => dispatch(toggleLike('cZroMhP8f5NEoHwCSHb8KA8JYPE3', photoRef, isLiked))}>
            <Heart 
                fill={isLiked ? "#FF5353": "rgba(0,0,0,0)"}
                color={isLiked ? "#FF5353": "#FFF"} 
                size={24} 
            />
        </button>
    );
};

export default Like;