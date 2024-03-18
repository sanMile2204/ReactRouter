import { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, addDispatch } from '../store/store';
import { TODOData, addTODO } from "../store/features/TODOSlice";

const initialFormData = {
  id: 0,
  title: '',
  description: '',
  creationTime: 0,
  completed: false
};

export default function TODOForm() {
    const [formData, setFormData] = useState<TODOData>(initialFormData);
    const [count, setCount] = useState(1);
    const [postError, setPostError] = useState('');
    
    const todos = useSelector((state: RootState) => state.todos)
    const dispatch: addDispatch  = useDispatch()

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

        const newTODO: TODOData = {
          id: formData.id,
          title: formData.title,
          description: formData.description,
          creationTime: new Date().getTime(),
          completed: false
        };
        dispatch(addTODO(newTODO));
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
                value={new Date().toISOString().substring(0,10)}
                disabled/>

                <Button text="Save"/>

            </form>
        </section>
        </>
    );
}