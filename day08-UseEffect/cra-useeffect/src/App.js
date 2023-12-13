import "./App.css";
import React, { useState } from "react";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import UseEffectDOMEvent from "./components/UseEffectDOMEvent";
import UseEffectWithDeps from "./components/UseEffectWithDeps";

function App() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="container my-3">
            <button className="my-3 btn btn-primary" onClick={() => setToggle(!toggle)}>
                Toggle components
            </button>
            {/* {toggle && <UseEffect />} */}
            {/* {toggle && <UseEffect2 />} */}
            {/* {toggle && <UseEffectDOMEvent />} */}
            {toggle && <UseEffectWithDeps />}
        </div>
    );
}

export default App;
