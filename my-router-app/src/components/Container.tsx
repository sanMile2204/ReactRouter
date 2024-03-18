import { NavLink } from "react-router-dom";
import Button from "./Button";
import { markAsCompleted } from "../store/features/TODOSlice";
import { useDispatch } from "react-redux";
import { addDispatch } from "../store/store";
import { useState } from "react";

const Container = ({text, id, isCompleted, onClick} : {text: string, id: number, isCompleted: boolean, onClick: any }) => {

   const dispatch: addDispatch  = useDispatch();
   const [completed, setCompleted] = useState(isCompleted);

   const handleClick = (id: any) => {
      setCompleted(!completed);  
      dispatch(markAsCompleted(id));
   }

    return( 
     <div className="list-container">
            <NavLink to={`/detail/${id}`}>
               <div className={completed ? 'done' : ''}>{text}</div>
            </NavLink>
            <Button text="X" onClick={onClick}></Button>
            <Button text="DONE" onClick={() => handleClick(id)}></Button>
     </div>
    )
 }
 
 export default Container;