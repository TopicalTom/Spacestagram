import './Button.scss';

interface ButtonProps {
    color?: string,
    action?: () => {},
    label: string,
    labelColor: string
};

const Button = ({ color, label, action, labelColor }: ButtonProps) => {
    return (
       <button 
            className="button"
            style={{ 
                backgroundColor: color,
                borderColor: color 
            }}
            onClick={() => action}>
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