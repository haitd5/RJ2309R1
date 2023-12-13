import React, { useEffect, useState } from "react";

// useEffect(callback, [deps]) : Cú pháp
// có 3 trường hợp sử dụng.
// 1. UseEffect(callback)
// Thêm một nguyên tắc : callback sẽ được gọi lại khi cặp state (setState)
// 2. UseEffect(callback, [])
// Thêm một nguyên tắc: callback chỉ dược gọi MỘT lần duy nhất khi được mounted vào DOM
// 3. UseEffect(callback, [deps])
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

// callback
// cleanup function
// 1. dọn dẹp
// 2. componentWilUnmounted

function UseEffectDOMEvent() {
    // logic

    const [content, setContent] = useState("");
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        setIsFetching(true);
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setIsFetching(false);
            });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            if (window.scrollY >= 150) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        // cleanup functions / componentWillUnmount

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div className="bg-success text-white">
            <input type="text" className="form-control" onInput={(e) => setContent(e.target.value)} />
            <h1>Todo List</h1>
            {/* Tạo sự chờ đợi */}
            {isFetching ? (
                <p className="text-danger">Loading ...</p>
            ) : (
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            )}
            {showGoToTop && <button style={{ position: "fixed", right: "30px", bottom: "30px" }}>Go to top</button>}
        </div>
    );
}

export default UseEffectDOMEvent;
