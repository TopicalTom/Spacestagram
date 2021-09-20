import './Like.scss';
import { Heart } from 'react-feather';
import { toggleLike } from '../../store/actions';
import { authSelector } from '../../store/reducers';
import { useSelector, useDispatch } from 'react-redux';

interface Image {
    url: string,
    title: string,
    date: string,
    explanation: string,
};

interface LikeProps {
    imageRef: Image,
    isLiked: boolean
};

const Like = ({ imageRef, isLiked }: LikeProps) => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);

    const likeAction = () => {
        if (user) {
            dispatch(toggleLike(user.uid, imageRef, isLiked))
        };
    };

    return (
        <button 
            className="like" 
            onClick={likeAction}>
            <Heart 
                fill={isLiked ? "#FF5353": "transparent"}
                color={isLiked ? "#FF5353": "#FFF"} 
                size={24} 
            />
        </button>
    );
};

export default Like;

/*
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
    console.log(user);

    return (
        <button 
            className="like" 
            onClick={() => dispatch(toggleLike('cZroMhP8f5NEoHwCSHb8KA8JYPE3', photoRef, isLiked))}>
            <Heart 
                fill={isLiked ? "#FF5353": "transparent"}
                color={isLiked ? "#FF5353": "#FFF"} 
                size={24} 
            />
        </button>
    );
};

export default Like;

*/