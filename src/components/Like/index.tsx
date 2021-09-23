import './Like.scss';
import { FC } from 'react';
import { Heart } from 'react-feather';
import { useActions } from '../../hooks';
import { authSelector } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { Image } from '../../store/reducers';

interface LikeProps {
    imageRef: Image,
    isLiked: boolean
};

const Like: FC<LikeProps> = ({ imageRef, isLiked }) => {
    const { toggleLike } = useActions();
    const { user } = useSelector(authSelector);

    const likeAction = () => {
        if (user) {
            toggleLike(user.uid, imageRef, isLiked);
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