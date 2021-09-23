import './AvatarCollection.scss';
import { FC } from 'react';

// Components
import Avatar from '../Avatar';

interface AvatarCollectionProps {
    photoURLs: string[],
    count: number
};

const AvatarCollection: FC<AvatarCollectionProps> = ({ photoURLs, count }) => {
    return (
       <div>
           
       </div>
    );
};

export default AvatarCollection;