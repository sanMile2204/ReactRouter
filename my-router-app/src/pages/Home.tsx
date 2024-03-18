import Button from "../components/Button";
import Container from "../components/Container";
import { RootState, addDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { TODOData, removeTODO, removeAllTODO } from "../store/features/TODOSlice";

export default function Home() {
    const TODO: TODOData[] = useSelector(
        (state: RootState) => state.todos.todos
      );
      const dispatch: addDispatch  = useDispatch()

    const handleClick = (id: any) => {      
        dispatch(removeTODO(id));
     }

     const handleRemoveClick = () => {      
        dispatch(removeAllTODO());
     }

    return (
        <div className="home-container">
            <h1>TODO LIST</h1>
            <section>
            {

                TODO.map(todo => (
                    <Container text={todo.title} key={todo.id} id={todo.id} isCompleted={todo.completed} onClick={() => handleClick(todo.id)}/>
                ))
            }
            </section>
            <section className="home-buttons">
                <Button text="New Todo" link="/new"></Button>
                <Button text="Remove all TODOs" onClick={() => handleRemoveClick()}></Button>
            </section>
        </div>
    )
}
