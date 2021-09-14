import './Feed.scss';
import { imageSelector } from '../../store/reducers';
import ImageCard from '../ImageCard';
import { useSelector } from 'react-redux';

const Feed = () => {
    //const dispatch = useDispatch();
    const { data } = useSelector(imageSelector);
    
    return (
        <div className="Feed">
            {data && data.map(image => {
                return <ImageCard {...image} />
            })}
        </div>
    );
};

export default Feed;