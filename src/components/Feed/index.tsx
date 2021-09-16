import './Feed.scss';
import { imageSelector } from '../../store/reducers';
import { fetchNewImages } from '../../store/actions';
import ImageCard from '../ImageCard';
import { useSelector, useDispatch } from 'react-redux';

interface Image {
    id: string,
    url: string,
    title: string,
    date: string,
    explanation: string,
};

const Feed = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(imageSelector);

    const loadMore = (data: Image[]) => {
        dispatch(fetchNewImages(data));
    };
    
    return (
        <div className="Feed">
            {data && data.map(image => {
                return <ImageCard {...image} key={image.date} />
            })}
            <button onClick={() => loadMore(data)}>load more</button>
        </div>
    );
};

export default Feed;