import './App.scss';
import { useEffect } from 'react';
import { imageSelector } from './store/reducers';
import { fetchImages, fetchLikes } from './store/actions';
import Feed from './components/Feed';
import Nav from './components/Nav';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const { error, isLoading } = useSelector(imageSelector);

    const loadImages = () => {
        dispatch(fetchImages());
        dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    };

    useEffect(() => {
        dispatch(fetchImages());
        dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    }, [dispatch]);

    //if (isLoading) return <div>....loading</div>;
    //if (error) return <div>{error}</div>;

    return (
        <div className="App" >
            <Nav />
            <Feed />
            <div style={{ gridArea: 'about', position: 'sticky', top: '104px', height: '200px'}}>
                <h2>Explore</h2>
                <p style={{ backgroundColor: '#141414', padding: '24px', height: 'auto'}}>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            </div>
        </div>
    );
};

export default App;