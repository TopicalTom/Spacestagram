import './ImageSocial.scss';
import { authSelector } from '../../store/reducers';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';

interface ImageSocialProps {
    isLiked: boolean
};

const ImageSocial = ({ isLiked }: ImageSocialProps) => {
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