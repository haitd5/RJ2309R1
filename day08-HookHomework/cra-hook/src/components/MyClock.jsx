import React from "react";
import useClock from "./useClock";

function MyClock() {
    const [time,ampm] = useClock()
    return (
        <>
            <h1>Clock</h1>
            {time}
            <span>{ampm}</span>
        </>
    )
}

export default MyClock;