import { useEffect } from 'react';
import { imageSelector, authSelector } from './store/reducers';
import { fetchImages, login, logout } from './store/actions';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const { error, isLoading, data } = useSelector(imageSelector);
    const { user } = useSelector(authSelector);

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    if (isLoading) return <div>....loading</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Spacestagram</h1>
            {user
                ?   <div>
                        <h3>{user.displayName}</h3>
                        <img src={user.photoURL?.toString()} />
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </div>
                :   <>
                        <button onClick={() => dispatch(login())}>Login</button>
                    </>
            }
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