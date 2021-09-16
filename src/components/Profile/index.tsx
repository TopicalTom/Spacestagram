import './Profile.scss';
import { ChevronDown } from 'react-feather';
import Avatar from '../Avatar';

interface User {
    uid: string,
    displayName: string | null,
    photoURL: string | null,
    likes?: string[] | null
};

interface ProfileProps {
    user: User
};

const Profile = ({ user }: ProfileProps) => {
    const { photoURL, displayName } = user;
    
    return (
        <>
            <div className="profile">
                <Avatar photoURL={photoURL?.toString()} />
                <span>{displayName?.split(" ")[0]}</span>
                <ChevronDown color="#fff" size={12} />
            </div>
        </>
    );
};

export default Profile;