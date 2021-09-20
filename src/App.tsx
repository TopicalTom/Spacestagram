import './App.scss';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { authSelector } from './store/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShorthandLikes, checkForStoredDetails } from './store/actions';
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
    const { isAuthenticating, user } = useSelector(authSelector);

    useEffect(() => {
        if (user) {
            dispatch(fetchShorthandLikes(user.uid));
        }
    }, [user]);

    useEffect(() => {
        dispatch(checkForStoredDetails());
    }, [dispatch]);

    if (isAuthenticating) return <div>....loading</div>;

    return (
        <Router>
            <Switch>
                <Route 
                    path="/likes">
                    <Likes />
                </Route>
                <Route 
                    exact
                    path="/">
                    <Explore />
                </Route>
            </Switch>
            <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
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