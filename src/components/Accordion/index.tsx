import './Accordion.scss';
import { FC, useState } from 'react';

interface AccordionProps {
    content: string
};

const Accordion: FC<AccordionProps> = ({ content }) => {
    const [ isActive, setIsActive ] = useState(false);

    return (
       <div 
            className={`accordion accordion--${isActive ? 'expanded' : 'closed'}`}>
            <div className={`accordion__overlay accordion__overlay--${isActive ? 'hidden' : 'visible'}`} />
            <p>{content}</p>
            <button
                    onClick={() => setIsActive(!isActive)}
                    className={`accordion__button accordion__button--${
                        isActive 
                            ?   'hidden' 
                            :   'visible'
                    }`}>
                    {isActive ? 'less' : 'more'}
            </button>
       </div>
    );
};

export default Accordion;