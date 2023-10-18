import React from 'react';

const StudenList = [
    {
        id: '01',
        name: 'Tạ Đình Hứa',
        age: 20,
        address: 'Hà Nội',
    },
    {
        id: '02',
        name: 'Lê Thu Nga',
        age: 17,
        address: 'Hải Phòng',
    },
    {
        id: '03',
        name: 'Như Khải Đạt',
        age: 38,
        address: 'Tây Ninh',
    },
    {
        id: '04',
        name: 'Phúc Lam Cường',
        age: 39,
        address: 'Sóc Trăng',
    },
    {
        id: '05',
        name: 'Cao Văn Hoài',
        age: 48,
        address: 'Cà Mau',
    },
];

function StudenInfo() {
    return (
        <section>
            <table className="table table-striped table-hover">
                <thead className="table-success">
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {StudenList.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default StudenInfo;
