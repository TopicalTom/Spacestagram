import './ImageSocial.scss';
import { FC } from 'react';
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

    console.log(likes);
    
    return (
        <div className="image-social">
            {!user
                ?   <>
                        <div />
                        <span>Register to like and save</span>
                    </>
                :   <>
                        <Avatar photoURL={user.photoURL || ""} />
                        <span>{isLiked ? 'Liked by you' : 'Be the first like'}</span>
                    </>
            }
        </div>
    );
};

export default ImageSocial;