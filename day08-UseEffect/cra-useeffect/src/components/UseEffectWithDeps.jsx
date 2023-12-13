import React, { useEffect, useState } from "react";

// useEffect(callback, [deps]) : Cú pháp
// có 3 trường hợp sử dụng.
// 1. UseEffect(callback)
// Thêm một nguyên tắc : callback sẽ được gọi lại khi cặp state (setState)
// 2. UseEffect(callback, [])
// Thêm một nguyên tắc: callback chỉ dược gọi MỘT lần duy nhất khi được mounted vào DOM
// 3. UseEffect(callback, [deps])
// - Callback đươc gọi lại khi [deps] thay đổi

// --
// // Chức năng : side effects (những tác động bên cạnh)
// //     có thể gọi API
// //     update DOM
// //     setInterval, setTimeout
// //     listen event DOM

// input : callback, dependency

// output : ko có gì cả , (void)

// Nguyên tắc chung :
// 1. Callback luôn được gọi khi component được mounted vào DOM
// 2. useEffect chạy trong trạng thái chờ, khi nào component render xong rồi mới hiển thị useEffect, callback đưọc gọi

function UseEffectWithDeps() {
    // logic

    const [postList, setPostList] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [state, setState] = useState({
        first: false,
        previous: false,
        next: false,
        last: false,
    });
    useEffect(() => {
        setIsFetching(true);
        fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
            .then((response) => response.json())
            .then((result) => {
                setPostList(result.data);
                setIsFetching(false);
            });
    }, [page]);

    const handleNext = (e) => {
        e.preventDefault();
        setPage(page + 1);
        setState({
            ...state,
            first: false,
            previous: false,
            next: true,
            last: false,
        });
    };

    const handlePrevious = (e) => {
        e.preventDefault();
        setPage(page - 1);
        setState({
            ...state,
            first: false,
            previous: true,
            next: false,
            last: false,
        });
    };

    const handleFirst = (e) => {
        e.preventDefault();
        setState({
            ...state,
            first: true,
            previous: false,
            next: false,
            last: false,
        });
    };

    const handleLast = (e) => {
        e.preventDefault();
        setState({
            ...state,
            first: false,
            previous: false,
            next: false,
            last: true,
        });
    };

    return (
        <div className="">
            <div>
                <ul className="pagination">
                    {state.first ? (
                        <li className="page-item active">
                            <a href="!#" className="page-link" onClick={handleFirst}>
                                First
                            </a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a href="!#" className="page-link" onClick={handleFirst}>
                                First
                            </a>
                        </li>
                    )}

                    {state.previous ? (
                        <li className="page-item active">
                            <a href="!#" className="page-link" onClick={handlePrevious}>
                                Previous
                            </a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a href="!#" className="page-link" onClick={handlePrevious}>
                                Previous
                            </a>
                        </li>
                    )}

                    {state.next ? (
                        <li className="page-item active">
                            <a href="!#" className="page-link" onClick={handleNext}>
                                Next
                            </a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a href="!#" className="page-link" onClick={handleNext}>
                                Next
                            </a>
                        </li>
                    )}

                    {state.last ? (
                        <li className="page-item active">
                            <a href="!#" className="page-link" onClick={handleLast}>
                                Last
                            </a>
                        </li>
                    ) : (
                        <li className="page-item">
                            <a href="!#" className="page-link" onClick={handleLast}>
                                Last
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <h1>Post List</h1>
            {/* Tạo sự chờ đợi */}
            {isFetching ? (
                <p className="text-danger">Loading ...</p>
            ) : (
                <div className="row">
                    {postList.map((post) => (
                        <div key={post.id} className="col-md-6 mb-2">
                            <div className="card">
                                <img src={post.imageUrl} alt="" />
                                <div className="card-body">
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UseEffectWithDeps;
