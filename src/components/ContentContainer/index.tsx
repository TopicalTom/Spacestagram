import './ContentContainer.scss';
import { FC } from "react";

interface ContentContainerProps {
    title: string
};

const ContentContainer:FC<ContentContainerProps> = ({ title, children }) => {
    return (
       <div className="container">
           <h5 className="container__title">{title}</h5>
           {children}
       </div>
    );
};

export default ContentContainer;