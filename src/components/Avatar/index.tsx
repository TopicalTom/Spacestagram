import './Avatar.scss';
import { FC } from 'react';

interface AvatarProps {
    photoURL?: string,
    size?: number
};

const Avatar: FC<AvatarProps> = ({ photoURL, size }) => {
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