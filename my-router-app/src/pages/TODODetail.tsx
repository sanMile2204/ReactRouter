import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";
import { TODOData } from "../store/features/TODOSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const initialFormData = {
    id: 0,
    title: '',
    description: '',
    creationTime: 0
  };

  const buttonConfig = {
    text: 'Back to List',
    link: '/',
  }

export default function TODODetail() {
    const { id } = useParams();
    const [todoItem, setTodoItem] = useState<TODOData>(initialFormData);

    const test: TODOData[] = useSelector(
      (state: RootState) => state.todos.todos
    );


    useEffect(() => {
        const element = test.find(x => x.id === Number(id));
        setTodoItem(element ? element : initialFormData);
      }, []);

    return (
        <div className="new-container">
            <h1>NEW TODO</h1>
            <section>
                <Detail todoInfo={todoItem} button={buttonConfig}/>
            </section>
        </div>
    )
}