import React from 'react';
import Avatar from '../Avatar/Avatar';
const profile = {
    name: 'Hai Tran',
    age: 20,
    gender: 'male',
    mobile: '0123234234',
    email: 'haitran120@gmail.com',
    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png',
};

const Profile = () => {
    return (
        <section>
            <div className="card mb-3">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-3 text-center">
                        {/* <img src={profile.avatar} className="img-fluid rounded-start" alt="" /> */}
                        <Avatar avatarURL={profile.avatar} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{profile.name}</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Age: <span className="fw-bolder">{profile.age}</span>
                                </li>
                                <li className="list-group-item">
                                    Gender: <span className="fw-bolder">{profile.gender}</span>
                                </li>
                                <li className="list-group-item">
                                    Email: <span className="fw-bolder">{profile.email}</span>
                                </li>
                                <li className="list-group-item">
                                    Mobile: <span className="fw-bolder">{profile.mobile}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
