import React, {useEffect, useState} from "react";

function Time(){
    const [count, setCount] = useState(10);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(count > 0){
                setCount(count - 1)
            } else {
                alert('Time\'s up');
            }
        },1000);

        return () => {
            clearInterval(interval)
        }

    },[count])

    return (
        <>
            <h3>Count down from : {count}</h3>
        </>
    )
}

export default Time;