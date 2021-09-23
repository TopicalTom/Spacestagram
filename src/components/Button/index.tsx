import './Button.scss';
import { FC } from 'react';

interface ButtonProps {
    color?: string,
    action?: () => {},
    label: string,
    labelColor: string
};

const Button: FC<ButtonProps> = ({ color, label, action, labelColor }) => {
    return (
       <button 
            className="button"
            style={{ 
                backgroundColor: color,
                borderColor: color 
            }}
            onClick={action}>
            <span
                style={{ 
                    color: labelColor
                }}>
                {label}
            </span>
       </button>
    );
};

export default Button;