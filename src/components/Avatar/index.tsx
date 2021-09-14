import './Avatar.scss';

interface AvatarProps {
    photoURL?: string,
    size: number
};

const Avatar = ({ photoURL, size }: AvatarProps) => {
    return (
        <img 
            className="avatar"
            src={photoURL} 
            alt="User avatar"
            style={{
                width: size, 
                height: size
            }}
        />
    );
};

export default Avatar;