import './App.scss';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { authSelector } from './store/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShorthandLikes } from './store/actions';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Pages
import Explore from './pages/Explore';
import Likes from './pages/Likes';

const App = () => {
    const dispatch = useDispatch();
    const { isAuthenticating } = useSelector(authSelector);

    useEffect(() => {
        dispatch(fetchShorthandLikes('cZroMhP8f5NEoHwCSHb8KA8JYPE3'));
    }, [dispatch]);

    if (isAuthenticating) return <div>....loading</div>;
    //if (error) return <div>{error}</div>;

    return (
        <Router>
            <Switch>
                <Route 
                    path="/likes">
                    <Likes />
                </Route>
                <Route 
                    path="/">
                    <Explore />
                </Route>
            </Switch>
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
        </Router>
    );
};

export default App;