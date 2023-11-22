import React, { useEffect, useState } from "react";


const YourTodoList = () => {
	const [todoList, setTodoList] = useState([{ label: "What's up?", done: false }])
	const [newTask, setNewTask] = useState("")
	const ENDPOINT = "https://playground.4geeks.com/apis/fake/todos/user/zaneestere";

	const handleFetchTodoList = async () => {
		const todoResponse = await fetch(ENDPOINT);

		if (todoResponse.ok) {
			const getResponse = await fetch(ENDPOINT);
			const todoJson = await getResponse.json();
			setTodoList(todoJson);
		} else {
			console.error("You didn't manage to add your todo");
		}
	};

	useEffect(() => {
		handleFetchTodoList();
	}, []);


	const handleDelete = (index) => {
		let aux = todoList
		aux.splice(index, 1)
		setTodoList([...aux])
		fetch(ENDPOINT, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todoList),
		});
	}
	const handleSubmit = e => {
		e.preventDefault();
		setTodoList([...todoList, { label: newTask, done: false }]);
		setNewTask("")
		fetch(ENDPOINT, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todoList),
		});
	}
	const handleChange = e => {
		setNewTask(e.target.value)
		if (e.key == "Enter") {
			handleSubmit()
		}
	}
	return (
		<div className="todo-list container-fluid mt-5 mb-5 text-center">

			<form className="todo-form" onSubmit={(e) => handleSubmit(e)}>
				<h1 className="list-title"> Your todo list <i className="fa-solid fa-arrows-turn-to-dots" style={{ color: "#e1e8f5" }}></i> </h1>
				<input className="text-input" type="text" value={newTask} onChange={(e) => handleChange(e)} placeholder="What do you want to do?..." />
				<input className="button btn btn-secondary rounded-1 p-1" type="submit" value={"Add task"} />
			</form>

			{todoList.length > 0 ? (
				<div class="container-fluid">
					<div className="todo-items justify-content-around align-items-center bg-light shadow-sm bg-body-tertiary rounded m-auto” style={{ width: “30rem” }}">

						{todoList.map((task, index) => (
							<div className="icon-container" key={index}>
								<div>
									<i className="fa-regular fa-square-check" style={{ color: "#23C474" }}></i>
									{task.label}
									<span onClick={(e) => handleDelete(index)}>
										<i className="fa-solid fa-delete-left" style={{ color: "#FF0000"}}></i>
									</span>

								</div>
							</div>
						))}

					</div>
				</div>
			) : (
				<p > try adding some tasks you wish to do!</p>
			)}
		</div>
	);
};
export default YourTodoList;
