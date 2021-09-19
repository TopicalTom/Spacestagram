import './Feed.scss';
//import { imageSelector } from '../../store/reducers';
//import { fetchNewImages } from '../../store/actions';
import ImageCard from '../ImageCard';
//import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

interface Image {
    id: string,
    url: string,
    title: string,
    date: string,
    explanation: string,
};

interface FeedProps {
    data: Image[],
    isLoading: boolean,
    action: () => {}
};

const Feed = ({ data, isLoading, action }: FeedProps) => {
    //const dispatch = useDispatch();
    //const { data, isLoading } = useSelector(imageSelector);
    
    return (
        <div className="feed">
            {data && data.map(image => {
                return (
                    <ImageCard 
                        {...image} 
                        key={image.date} 
                    />
                )
            })}
            <button 
                className="feed__loader" 
                onClick={() => action}>{
                    isLoading 
                        ?   <ClipLoader 
                                color='#FFF' 
                                loading={true} 
                                size={24} 
                            />
                        :   'See more feed content'
                }
            </button>
        </div>
    );
};

export default Feed;