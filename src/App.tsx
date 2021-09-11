import { useEffect } from 'react';
import { imageSelector } from './store/reducers/imagesReducer';
import { fetchImages } from './store/actions/imagesActions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const { error, isLoading, data } = useSelector(imageSelector);

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    if (isLoading) return <div>....loading</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Spacestagram</h1>
            {data && data.map(image => {
                const { title, date, url } = image;
                return (
                    <div key={date}>
                        <h1>{title}</h1>
                        <h3>{date}</h3>
                        <img 
                            src={url} 
                            alt={title} 
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default App;