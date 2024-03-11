import { DetailProps } from "../models/TODOData";
import Button from "./Button";

const Detail: React.FC<DetailProps> = ({todoInfo, button}) => {
    return(
      <section className="container">
         <div className="container-form">
            <input
                     type="text" 
                     value={todoInfo.title}
                     name="title"/>

                     <textarea
                     placeholder="Description" 
                     value={todoInfo.description}
                     name="description"/>

                     <input 
                     type="date"
                     name="creationTime" 
                     value={new Date(todoInfo.creationTime).toISOString().substring(0,10)}/>

                     <Button text={button.text} onClick={button.onClick} link={button.link}/>
         </div>
     </section>
    )
 }
 
 export default Detail;