import React from 'react';
import './App.css';
import ToDoList from "./ToDO/ToDoList";

export default function App() {
    let todos = [
        {id: 1, completed: false, title: "Learn JS"},
        {id: 2, completed: false, title: "Learn JSX"},
        {id: 3, completed: false, title: "Learn HTML"},
        {id: 4, completed: false, title: "Learn CSS"},
    ];
    function toggleTodo(id) {
        // console.log("todo id" , id);
        todos = todos.map(todo=>{
            if (todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
    }
  return (
      <div className="App">
          <h1>To Do List</h1>
          <ToDoList todos ={todos} onToggle={toggleTodo}/>
      </div>
  );
}


