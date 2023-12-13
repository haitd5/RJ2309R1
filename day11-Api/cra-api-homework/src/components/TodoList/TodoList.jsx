import React, {useState} from "react";
import todolistService from "../service/todolistService";

function TodoList(){
	const [todoList, setTodoList] = useState([])
	
	
	async function fetchData() {
		let todoRes = await todolistService.getTodoList()
		setTodoList(todoRes.data)
	}
	fetchData();
	const handleSubmitButton = () => {
	
	}
	return (
		<>
			<h1>To do list</h1>
			<form>
				<input type={`text`} className={`form-control`} placeholder={`input to do list`}/>
				<button className={`btn btn-sm btn-primary`}
						type={`button`}
						onClick={handleSubmitButton}
				>Submit</button>
			</form>
			<table className={`table`}>
				<thead>
					<tr>
						<th>#ID</th>
						<th>Title</th>
						<th>Completed</th>
					</tr>
				</thead>
				<tbody>
				{
					todoList.map((todo) => (
						<tr key={todo.id}>
							<td>{todo.id}</td>
							<td>{todo.title}</td>
							<td>{
								todo.complete ? (
									<button className={`btn btn-sm btn-primary`}>True</button>
								) : (
									<button className={`btn btn-sm btn-dark`}>False</button>
								)
							}</td>
						</tr>
					))
				}
				</tbody>
			</table>
		</>
	)
}
export default TodoList