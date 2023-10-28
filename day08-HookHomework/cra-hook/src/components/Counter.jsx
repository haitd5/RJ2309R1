import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(1)

    const [count2, setCount2] = useState(2)

    const handleClickOne = () => {
        setCount(count+1)
    }

    const handleClickTwo = () => {
        setCount2(count2 + 2)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>Gia tri count: {count}</h3>
            <button className="btn btn-primary" onClick={handleClickOne}>Tang 1 </button>
            <h3>Gia tri count: {count2}</h3>
            <button className="btn btn-primary" onClick={handleClickTwo}>Tang 2 </button>
        </div>
    )
}
export default Counter;