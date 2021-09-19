import './Page.scss';
import { FC } from 'react';

// Components
import Nav from '../../components/Nav';
import Feed from '../../components/Feed';
import Sidebar from '../../components/Sidebar';

interface Image {
    id: string,
    url: string,
    title: string,
    date: string,
    explanation: string,
};

const Page:FC = ({ children }) => {
    return (
        <div className="page" >
            <Nav />
            {children}
        </div>
    );
};

export default Page;