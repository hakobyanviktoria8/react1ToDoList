import React from "react";
import "./ToDo.css";
import ToDoItem from "./ToDoItem";

const styles={
    ul:{
        listStyle:"none",
        margin: 0,
        padding: 0
    }
};

export default function ToDoList(props) {
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo,index) =>{
                return <ToDoItem todo={todo} key={todo.id} index = {index}
                onChange = {props.onToggle}/>
            }
            )}
        </ul>
    )
}
