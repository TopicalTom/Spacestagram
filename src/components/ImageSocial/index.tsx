import './ImageSocial.scss';
import { authSelector } from '../../store/reducers';
import { useSelector, useDispatch } from 'react-redux';

interface ImageSocialProps {
    isLiked: boolean
};

const ImageSocial = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);
    
    return (
        <div className="image-social">
            {!user?.photoURL
                ?   <div />
                :   <div >
                        <img src={user.photoURL} alt="User avatar" />
                    </div>
            }
            <h4>Be the first like</h4>
        </div>
    );
};

export default ImageSocial;