import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
    return (
        <div>
            <h1>Hello</h1>
            <a href='#'>helo</a>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)