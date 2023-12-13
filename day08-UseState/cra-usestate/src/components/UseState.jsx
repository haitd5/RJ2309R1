import React, { useState } from "react";

// const [state, useState] = useState(initState);
// Nhiệm vụ của useState : quản lý trạng thaí trong components
// input: initState là tất cả các dữ liệu trong js
//      - number, string, boolean, null, undefined,
//      - array, object, callback
// ouput: trả về một mảng, mảng này có 2 giá trị:
//    giá trị nhứ nhất : cùng kiểu với initState trả về
//    giá trị thứ hai : là một hàm, hàm này có nhiệm vụ cập nhật value mới cho giá trị thứ nhất
//  nguyên lý : mỗi khi thực hiện hàm setState() thì component sẽ tự động re-render

function UseState() {
    //Logic
    const [number, setNumber] = useState(0);
    const handleIncreament = () => {
        setNumber(number + 1);
    };
    const handleDescreament = () => {
        setNumber(number - 1);
    };

    //UI
    return (
        <div>
            <h1>Learning UseState</h1>
            <h1>{number}</h1>
            <button onClick={handleIncreament} className="btn btn-primary mx-2">
                Increament
            </button>
            <button onClick={handleDescreament} className="btn btn-dark">
                Descreament
            </button>
        </div>
    );
}

export default UseState;
