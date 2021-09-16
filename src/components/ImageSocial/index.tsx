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
            {!user?.photoURL
                ?   <div />
                :   <Avatar photoURL={user.photoURL} />
            }
            <span>{isLiked ? 'liked by you' : 'Be the first like'}</span>
        </div>
    );
};

export default ImageSocial;