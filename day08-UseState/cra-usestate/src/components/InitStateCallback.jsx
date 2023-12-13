import React, { useState } from "react";

function InitStateCallback() {
    const [totalAmount, setTotalAmount] = useState(() => {
        const bills = [20, 40, 100, 40];
        const total = bills.reduce(function (preValue, curValue) {
            return preValue + curValue;
        });
        return total;
    });

    const [amount, setAmount] = useState(0);
    const handleInputAmount = (e) => {
        setAmount(Number(e.target.value));
    };
    const handlePayment = () => {
        setTotalAmount(totalAmount + amount);
    };
    return (
        <div>
            <input type="number" className="form-control w-50 my-2" onInput={handleInputAmount} />
            <button className="btn btn-dark" onClick={handlePayment}>
                Payment
            </button>
            <br />
            <h1>Total amount: {totalAmount}</h1>
        </div>
    );
}
export default InitStateCallback;
