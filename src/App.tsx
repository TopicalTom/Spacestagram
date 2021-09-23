import 'react-toastify/dist/ReactToastify.css';
import { FC, useEffect } from 'react';
import { useActions } from './hooks';
import { ToastContainer } from 'react-toastify';
import { authSelector } from './store/reducers';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Pages
import Explore from './pages/Explore';
import Likes from './pages/Likes';

const App: FC = () => {
    const { fetchShorthandLikes, checkForStoredDetails } = useActions();
    const { isAuthenticating, user } = useSelector(authSelector);

    useEffect(() => {
        checkForStoredDetails();
    }, []);

    useEffect(() => {
        if (user) {
            fetchShorthandLikes(user.uid);
        }
    }, [user]);

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