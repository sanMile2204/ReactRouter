import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "../services/localStorageService";
import { TODOData } from "../models/TODOData";

const initialFormData = {
    id: 0,
    title: '',
    description: '',
    creationTime: new Date()
  };

  const buttonConfig = {
    text: 'Back to List',
    link: '/',
  }

export default function TODODetail() {
    const { id } = useParams();
    const [todoItem, setTodoItem] = useState<TODOData>(initialFormData);


    useEffect(() => {
        const savedItems = getLocalStorageItem();
        const element = savedItems.find(x => x.id === Number(id));
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