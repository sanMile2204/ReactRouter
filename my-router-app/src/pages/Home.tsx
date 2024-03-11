import { useEffect, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import { getLocalStorageItem, removeLocalStorageItem } from "../services/localStorageService";
import { TODOData } from "../models/TODOData";

export default function Home() {
    const [TODO, setTODO] = useState<TODOData[]>([]);

    const handleClick = (id: any) => {      
        removeLocalStorageItem({id: id});
        const savedFormData = getLocalStorageItem();
        setTODO(savedFormData);
     }

    useEffect(() => {
        const savedItems = getLocalStorageItem();
        if (savedItems) {
            setTODO(savedItems);
        }
      }, []);

    return (
        <div className="home-container">
            <h1>TODO LIST</h1>
            <section>
            {

                TODO.map(todo => (
                    <Container text={todo.title} key={todo.id} id={todo.id} onClick={() => handleClick(todo.id)}/>
                ))
            }
            </section>
            <Button text="New Todo" link="/new"></Button>
        </div>
    )
}