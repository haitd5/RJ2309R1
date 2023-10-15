
import './App.css';



const profile = {
    name: 'Hai Tran',
    age: 20,
    gender: 'male',
    mobile: '0123234234',
    email: 'haitran120@gmail.com',
    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'

}

const jobList = [
    {
        id: 'task-01',
        name: 'Java - Script Boot',
        status: 'looking for',
        hrName: 'HT',
        count: 5
    },
    {
        id: 'task-02',
        name: 'Python',
        status: 'looking for',
        hrName: 'HT',
        count: 5
    },
    {
        id: 'task-03',
        name: 'PHP',
        status: 'Done',
        hrName: 'HT',
        count: 5
    },
    {
        id: 'task-04',
        name: 'Java',
        status: 'Done',
        hrName: 'HT',
        count: 5
    },
    {
        id: 'task-05',
        name: 'Ruby',
        status: 'looking for',
        hrName: 'HT',
        count: 5
    },
]

function App() {
    return (
        <div className='container mt-3 vh-100'>
            <section>
                <div className='card mb-3'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='col-md-4'>
                            <img src={profile.avatar} className='img-fluid rounded-start' alt=''/>
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>
                                    {profile.name}
                                </h5>
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        Age: <span className='fw-bolder'>{profile.age}</span>
                                    </li>
                                    <li className='list-group-item'>
                                        Gender: <span className='fw-bolder'>{profile.gender}</span>
                                    </li>
                                    <li className='list-group-item'>
                                        Email: <span className='fw-bolder'>{profile.email}</span>
                                    </li>
                                    <li className='list-group-item'>
                                        Mobile: <span className='fw-bolder'>{profile.mobile}</span>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <table className='table table-striped table-hover'>
                    <thead className='table-success'>
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
                        {
                            jobList.map((job) =>(
                                <tr key={job.id}>
                                    <td>{job.id}</td>
                                    <td>{job.name}</td>
                                    <td>{job.count}</td>
                                    <td><span className={`${job.status === 'Done' ? 'badge bg-success' : 'badge bg-warning'}`}>{job.status}</span></td>
                                    <td>{job.hrName}</td>
                                    <td>
                                        <button className='btn btn-out-line-primary btn-sm'>
                                            <i className='fa fa-eye'></i>
                                        </button>
                                        <button className='btn btn-out-line-danger btn-sm'>
                                            <i className='fa fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            

        </div>
        
    );
}

export default App;
