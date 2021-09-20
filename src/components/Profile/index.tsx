import './Profile.scss';
import { ChevronDown } from 'react-feather';
import Avatar from '../Avatar';
import { logout } from '../../store/actions';
import { useDispatch } from 'react-redux';

interface User {
    uid: string,
    displayName: string,
    photoURL: string,
};

interface ProfileProps {
    user: User
};

const Profile = ({ user }: ProfileProps) => {
    const { photoURL } = user;
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="profile" onClick={() => dispatch(logout())}>
                <Avatar photoURL={photoURL} />
                <ChevronDown color="#fff" size={12} />
            </div>
        </>
    );
};

export default Profile;