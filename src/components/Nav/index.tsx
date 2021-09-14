import './Nav.scss';
import { authSelector } from '../../store/reducers';
import { 
    login, 
    logout, 
} from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

import { Logo } from '../../assets/logo';
import Profile from '../Profile';
import Button from '../Button';

const Nav = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(authSelector);
    
    return (
        <div className="nav">
            <div className="nav__watermark">
                <Logo />
                <h1>Spacestagram</h1>
            </div>
            <div className="nav__actions">
                {user
                    ?   <Profile user={user} />
                    :   <>
                            <Button 
                                color="#141414"
                                label="Sign in"
                                labelColor="#fff"
                                action={() => dispatch(login())}
                            />
                            <Button 
                                color="#fff"
                                label="Register"
                                labelColor="#090909"
                                action={() => dispatch(login())}
                            />
                        </>
                }
            </div>
        </div>
    );
};

export default Nav;