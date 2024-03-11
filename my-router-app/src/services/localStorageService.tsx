import { TODOData } from "../models/TODOData";

export const setLocalStorageItem = ({todoList}: {todoList: TODOData[]}) => {
    // const savedFormData = getLocalStorageItem();
    // const updateItems = [...savedFormData, todoList];
    sessionStorage.setItem('todoList', JSON.stringify(todoList)); 
}

export const getLocalStorageItem = () => {
    const savedFormData = sessionStorage.getItem('todoList');
    const todoList: TODOData[] = savedFormData ? JSON.parse(savedFormData) : [];
    return todoList;
}

export const removeLocalStorageItem = ({id}: {id: number}) => {
    const savedFormData = getLocalStorageItem();
    const listItems = savedFormData.filter(x => x.id !== id);
    setLocalStorageItem({todoList: listItems});
}