import ButtonProps from '../models/Button';
import { Link } from 'react-router-dom';

const Button: React.FC<ButtonProps> = ({text, link, onClick}) => {
   return( 
    <>
    {
        link ? 
        <Link to={link}>
            <button className="general-button" type="button" onClick={onClick}>{text}
            </button>
        </Link> : 
        <button className="general-button" type="submit" onClick={onClick}>{text}
        </button>
   }
   </>       
   )
}

export default Button;
