import ButtonProps from "./Button";

export interface TODOData {
    id: number,
    title: string,
    description: string,
    creationTime: Date,
  };

 export interface DetailProps {
    todoInfo: TODOData,
    button: ButtonProps
  };