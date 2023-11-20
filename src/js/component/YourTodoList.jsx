import React, { useEffect, useState } from "react";

const YourTodoList = () => {
	const [todoList, setTodoList] = useState([]);
	const ENDPOINT = ("https://playground.4geeks.com/apis/fake/todos/user/zaneestere");

	const handleAddTodo = async (newTodo) => 
	await fetch (ENDPOINT, {
		method: "PUT",
		body: JSON.stringify ([...todoList, {label: newTodo, done: false}])
	})
	setTodoList ([ ...todoList, {label: "", done: false}]
	
	); 

	useEffect (() => {
		async function fetchTodoList () {
		const response = await fetch (ENDPOINT);
		const todoJson = await response.json ();
		setTodoList (todoJson)
		}
		fetchTodoList ();
	 }, []); 
		
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
		</div>
	);
};

export default YourTodoList ;
