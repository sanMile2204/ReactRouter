import { NavLink } from "react-router-dom";
import Button from "./Button";

const Container = ({text, id, onClick} : {text: string, id: number, onClick: any }) => {

    return( 
     <div className="list-container">
            <NavLink to={`/detail/${id}`}>
               <div>{text}</div>
            </NavLink>
            <Button text="X" onClick={onClick}></Button>
     </div>
    )
 }
 
 export default Container;