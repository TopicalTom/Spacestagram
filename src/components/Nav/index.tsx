import './Nav.scss';
import { FC } from 'react';
import { authSelector, likeSelector } from '../../store/reducers';
import { useActions } from '../../hooks';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

// Assets
import { Logo } from '../../assets/logo';

// Components
import Profile from '../Profile';
import Button from '../Button';

const Nav: FC = () => {
    const { login } = useActions();
    const { user } = useSelector(authSelector);
    const { count } = useSelector(likeSelector);
    
    return (
        <nav className="nav">
            <div className="nav__watermark">
                <Logo />
                <h1>Spacestagram</h1>
            </div>
            <ul className="nav__router">
                <li>
                    <NavLink 
                        exact
                        to="/"
                        activeClassName="selected">
                        Explore
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        exact
                        to="/likes"
                        activeClassName="selected">
                        Liked 
                        <span>{count}</span>
                    </NavLink>
                </li>
            </ul>
            <div className="nav__actions">
                {user
                    ?   <Profile user={user} />
                    :   <>
                            <Button 
                                color="#141414"
                                label="Sign in"
                                labelColor="#fff"
                                action={() => login()}
                            />
                            <Button 
                                color="#fff"
                                label="Register"
                                labelColor="#090909"
                                action={() => login()}
                            />
                        </>
                }
            </div>
        </nav>
    );
};

export default Nav;