import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <h3>Gia tri count: {count}</h3>
            <button className="btn btn-primary" onClick={handleClick}>Tang</button>
        </div>
    )
}
export default Counter;