import React from "react";


const employees = [
	{
		id: 1,
		name: "Hoa",
		age: 20
	},
	{
		id: 2,
		name: "Khánh",
		age: 25
	},
	{
		id: 3,
		name: "Tú",
		age: 22
	},
]
function Employee() {
	return (
		<>
			<div>
				<table className={`table table-striped table-hover`}>
					<thead>
						<tr>
							<td>ID</td>
							<td>Name</td>
							<td>Age</td>
						</tr>
					</thead>
					<tbody>
					{
						employees.map((employee) => (
							<tr>
								<td>{employee.id}</td>
								<td>{employee.name}</td>
								<td>{employee.age}</td>
							</tr>
						))
					}
					</tbody>
				</table>
			</div>
		</>
	)
}
export default Employee;