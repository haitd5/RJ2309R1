import React, { useState } from "react";

function Calculator() {
    const [state, setState] = useState({
        firstNumber: "",
        secondNumber: "",
    });
    const handleInputValue = (e) => {
        console.log(e.target.name, e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const { firstNumber, secondNumber } = state;
    return (
        <div>
            <h1>Bài tập - Xây dựng ứng dụng máy tính đơn giản</h1>
            <div className="w-50">
                <label className="form-label">Số thứ nhất</label>
                <input
                    type="number"
                    className="form-control"
                    value={firstNumber}
                    name="firstNumber"
                    onInput={handleInputValue}
                />
                <div className="my-2">
                    <button className="btn btn-secondary">+</button>
                    <button className="btn btn-secondary mx-2">-</button>
                    <button className="btn btn-secondary">*</button>
                    <button className="btn btn-secondary mx-2">/</button>
                </div>
                <label className="form-label">Số thứ hai</label>
                <input
                    type="number"
                    className="form-control"
                    value={secondNumber}
                    name="secondNumber"
                    onInput={handleInputValue}
                />
            </div>

            <p className="my-2">Result</p>
        </div>
    );
}

export default Calculator;
