import './App.scss';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { imageSelector } from './store/reducers';
import { fetchImages, fetchLikes } from './store/actions';
import Feed from './components/Feed';
import Nav from './components/Nav';
import { useSelector, useDispatch } from 'react-redux';
import Button from './components/Button';
import Container from './components/ContentContainer';
import Sidebar from './components/Sidebar';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const App = () => {
    const dispatch = useDispatch();
    const { error, isLoading } = useSelector(imageSelector);

    const loadImages = () => {
        dispatch(fetchImages());
        dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    };

    const backToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        dispatch(fetchImages());
        dispatch(fetchLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    }, [dispatch]);

    //if (isLoading) return <div>....loading</div>;
    //if (error) return <div>{error}</div>;

    return (
        <div className="app" >
            <Nav />
            <Feed />
            <Sidebar title="Explore">
                <Container title="About">
                    <p>
                        Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                    </p>
                </Container>
            </Sidebar>
            <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default App;