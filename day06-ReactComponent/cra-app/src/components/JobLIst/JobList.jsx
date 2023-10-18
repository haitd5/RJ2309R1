import React, { Component } from 'react';

const jobList = [
    {
        id: 'task-01',
        name: 'Java - Script Boot',
        status: 'looking for',
        hrName: 'HT',
        count: 5,
    },
    {
        id: 'task-02',
        name: 'Python',
        status: 'looking for',
        hrName: 'HT',
        count: 5,
    },
    {
        id: 'task-03',
        name: 'PHP',
        status: 'Done',
        hrName: 'HT',
        count: 5,
    },
    {
        id: 'task-04',
        name: 'Java',
        status: 'Done',
        hrName: 'HT',
        count: 5,
    },
    {
        id: 'task-05',
        name: 'Ruby',
        status: 'looking for',
        hrName: 'HT',
        count: 5,
    },
];

class JobList extends Component {
    render() {
        return (
            <section>
                <table className="table table-striped table-hover">
                    <thead className="table-success">
                        <tr>
                            <th>#ID</th>
                            <th>Task name</th>
                            <th>Count</th>
                            <th>Status</th>
                            <th>HR Name</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobList.map((job) => (
                            <tr key={job.id}>
                                <td>{job.id}</td>
                                <td>{job.name}</td>
                                <td>{job.count}</td>
                                <td>
                                    <span
                                        className={`${job.status === 'Done' ? 'badge bg-success' : 'badge bg-warning'}`}
                                    >
                                        {job.status}
                                    </span>
                                </td>
                                <td>{job.hrName}</td>
                                <td>
                                    <button className="btn btn-out-line-primary btn-sm">
                                        <i className="fa fa-eye"></i>
                                    </button>
                                    <button className="btn btn-out-line-danger btn-sm">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default JobList;
