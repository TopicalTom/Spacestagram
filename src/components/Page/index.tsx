import './Page.scss';
import { FC } from 'react';

// Components
import Nav from '../Nav';

const Page: FC = ({ children }) => {
    return (
        <div className="page" >
            <Nav />
            {children}
        </div>
    );
};

export default Page;