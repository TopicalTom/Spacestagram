import './App.scss';
import { ToastContainer } from 'react-toastify';
import { imageSelector } from './store/reducers';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Pages
import Explore from './pages/Explore';
import Likes from './pages/Likes';

const App = () => {
    const { error, isLoading } = useSelector(imageSelector);

    //if (isLoading) return <div>....loading</div>;
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