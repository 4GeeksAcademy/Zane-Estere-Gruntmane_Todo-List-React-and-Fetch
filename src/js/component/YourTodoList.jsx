import React, { useEffect, useState } from "react";
import Input from "./Input";

const YourTodoList = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState (""); 
	const ENDPOINT = ("https://playground.4geeks.com/apis/fake/todos/user/zaneestere");


	const handleFetchTodoList = async () => {
		fetch (ENDPOINT, { 
		method: "POST", 
		header: { 
			"Content-Type": "application/json",
		}, 
		body: JSON.stringify([])	
		})

		async function fetchTodos () {
		const response = await fetch (ENDPOINT);
		const todoJson = await response.json ();
		setTodos (todoJson)
		}
		fetchTodos ();
	};
		
	useEffect (() => { 
		handleFetchTodoList ();
	 }, []); 

	const handleKeyPress = (e) => {

		if (e.key === "Enter") {
		  e.preventDefault()
		  setTodos([...todos, e.target.value])
		  setInputValue("")
		}
	  };

  return (

      <div className="List-Your-Todo container-fluid mt-5 mb-5">
        <form className="list-input text-center">
          <h1 className="list-title">To Do List</h1>

          <div className="container-fluid">
            <input
              className="input-control border-dark-subtle"
              style={{ width: "30rem" }}
              type="text"
              placeholder="What do you want to do?"
              aria-label="todo list input field"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={handleKeyPress}

            />
          </div>
          {todos.map((todo, index) => (
            <Input
              key = {index}
              todo = {todo}
              todos-trash={() => setTodos(todos.filter((_, currentIndex) => index !== currentIndex))}
            />
          ))}

        </form>

        <p className="counter">
          {
            todos.length === 0 ? null :
              todos.length === 1 ? `${todos.length} item` :
                `${todos.length} items`
          }
        </p>
      </div>
  )
};

export default YourTodoList ;
