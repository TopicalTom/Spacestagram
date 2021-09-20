import './Sidebar.scss';
import { FC } from 'react';
import Button from '../Button';
import { RefreshCw } from 'react-feather';
import { animateScroll as scroll } from 'react-scroll';

interface SidebarProps {
    title: string,
    action?: () => {}
}

const Sidebar:FC<SidebarProps> = ({ title, action, children }) => {

    const backToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                <h2>{title}</h2>
                <button
                    onClick={action}>
                    <RefreshCw 
                        color="rgba(255,255,255,0.3)" 
                        size={16} 
                    />
                    <span>Refresh</span>
                </button>
            </header>
            {children}
            <Button 
                color='#FFF' 
                label='Back to top'
                labelColor='#000' 
                action={() => backToTop}
            />
        </aside>
    );
};

export default Sidebar;