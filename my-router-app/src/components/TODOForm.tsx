import { useState } from "react";
import Button from "./Button";
import { TODOData } from "../models/TODOData";
import { getLocalStorageItem, setLocalStorageItem } from "../services/localStorageService";

const initialFormData = {
  id: 0,
  title: '',
  description: '',
  creationTime: new Date()
};

export default function TODOForm() {
    const [formData, setFormData] = useState<TODOData>(initialFormData);
    const [count, setCount] = useState(1);
    const [postError, setPostError] = useState('');

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        formData.id = count;
        const savedFormData = getLocalStorageItem();
        const updateItems = [...savedFormData, formData];
        setLocalStorageItem({todoList:updateItems});
        setCount(count + 1);
        setPostError('Add TODO succesfully');
      };

    return (
      <>
        {
          postError ? <p className="saveMessage"> {postError}</p> : null
        }
        <section className="container">
            <form className="container-form" onSubmit={handleSubmit}>
                <input
                type="text" 
                placeholder="Title" 
                autoComplete='off'
                onChange={handleChange}
                value={formData.title}
                name="title"/>

                <textarea
                placeholder="Description" 
                autoComplete='off'
                onChange={handleChange}
                value={formData.description}
                name="description"/>

                <input 
                type="date"
                placeholder="Creation Time" 
                name="creationTime" 
                onChange={handleChange}
                value={formData.creationTime.toISOString().substring(0,10)}
                disabled/>

                <Button text="Save"/>

            </form>
        </section>
        </>
    );
}