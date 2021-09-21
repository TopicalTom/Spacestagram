import './Feed.scss';
import ClipLoader from "react-spinners/ClipLoader";

// Assets
import { EmptyState } from '../../assets/images'

// Components
import ImageCard from '../ImageCard';

interface Image {
    url: string,
    title: string,
    date: string,
    explanation: string,
};

interface FeedProps {
    data: Image[],
    isLoading: boolean,
    action?: () => {}
};

const Feed = ({ data, isLoading, action }: FeedProps) => {

    if (data.length === 0 && isLoading) { 
        return (
            <section className="feed">
                <button className="feed__loader">
                    <ClipLoader 
                        color='#FFF' 
                        loading={true} 
                        size={24} 
                    />
                </button>
            </section>
        );
    };

    if (data.length === 0) {
        return (
            <section className="feed">
                <div className="feed__empty">
                    <EmptyState />
                </div>
            </section>
        );
    }
    
    return (
        <section className="feed">
            {data && data.map(image => {
                return (
                    <ImageCard 
                        {...image} 
                        key={image.date} 
                    />
                )
            })}
            {action
                ?   <button 
                        className="feed__loader" 
                        onClick={action}>{
                            isLoading 
                                ?   <ClipLoader 
                                        color='#FFF' 
                                        loading={true} 
                                        size={24} 
                                    />
                                :   'Load more content'
                        }
                    </button>
                :   <div className="feed__end">
                        <span>You've explored all there is!</span>
                    </div>
            }
        </section>
    );
};

export default Feed;