import './ImageSocial.scss';
import { FC, useState, useEffect } from 'react';
import { authSelector, User } from '../../store/reducers';
import { useSelector } from 'react-redux';

// Components
import Avatar from '../Avatar';

interface ImageSocialProps {
    likes: User[],
    isLiked: boolean
};

const ImageSocial: FC<ImageSocialProps> = ({ likes, isLiked }) => {
    const { user } = useSelector(authSelector);
    const [ currentLikes, setCurrentLikes ] = useState(0);

    useEffect(() => {
        if (likes !== undefined) {
            setCurrentLikes(likes.length);
        }
    }, [isLiked, likes]);

    const renderLabel = () => {
        switch (currentLikes) {
            case 2:
                return `Liked by ${isLiked ? 'you ' : ''}${isLiked ? 'an' : ''}other${!isLiked ? 's' : ''}`;
            case 1:
                return `Liked by ${isLiked ? 'you' : 'another'}`;
            case 0:
                return 'Be the first to like';
            default:
                return `Liked by ${isLiked ? 'you ' : ""}and others`;
        };
    };

    return (
        <div className="image-social">
            {!user
                ?   <>
                        <div />
                        <span>{currentLikes === 0 ? `Register to like and save` : `Liked by ${currentLikes === 1 && 'an'}other${currentLikes > 1 && 's'}`}</span>
                    </>
                :   <>
                        <Avatar photoURL={user.photoURL || ""} />
                        <span>{renderLabel()}</span>
                    </>
            }
        </div>
    );
};

export default ImageSocial;