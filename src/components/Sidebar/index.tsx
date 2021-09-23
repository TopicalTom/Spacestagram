import './Sidebar.scss';
import { FC } from 'react';
import { RefreshCw } from 'react-feather';
import { animateScroll as scroll } from 'react-scroll';

interface SidebarProps {
    title: string,
    action?: () => {}
}

const Sidebar:FC<SidebarProps> = ({ title, action, children }) => {

    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                <h2>{title}</h2>
                <button
                    onClick={action}>
                    <RefreshCw 
                        color="rgb(92, 92, 92)" 
                        size={16} 
                    />
                    <span>Refresh</span>
                </button>
            </header>
            {children}
            <button 
                className="sidebar__scroller"
                onClick={() => scroll.scrollToTop()}>
                Back to top
            </button>
        </aside>
    );
};

export default Sidebar;