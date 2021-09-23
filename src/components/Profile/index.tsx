import './Profile.scss';
import { FC } from 'react';
import { useActions } from '../../hooks';
import { User } from '../../store/reducers';

// Components
import Avatar from '../Avatar';
import { ChevronDown } from 'react-feather';

interface ProfileProps {
    user: User
};

const Profile: FC<ProfileProps> = ({ user }) => {
    const { photoURL } = user;
    const { logout } = useActions();
    
    return (
        <div className="profile" onClick={() => logout()}>
            <Avatar photoURL={photoURL || ""} />
            <ChevronDown color="#fff" size={12} />
        </div>
    );
};

export default Profile;