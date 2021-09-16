import './Avatar.scss';

interface AvatarProps {
    photoURL?: string,
    size?: number
};

const Avatar = ({ photoURL, size }: AvatarProps) => {
    return (
        <img 
            className="avatar"
            src={photoURL} 
            alt="User avatar"
            style={{
                width: size ? size : 32, 
                height: size ? size : 32
            }}
        />
    );
};

export default Avatar;