import './ImageSocial.scss';
import { FC } from 'react';
import { authSelector } from '../../store/reducers';
import { useSelector } from 'react-redux';

// Components
import Avatar from '../Avatar';

interface ImageSocialProps {
    isLiked: boolean
};

const ImageSocial: FC<ImageSocialProps> = ({ isLiked }) => {
    const { user } = useSelector(authSelector);
    
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