import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import flower from '../src/assets/flower.jpg';



function App() {
    return (
        <div>
            <h1 className="heading_1">React Webpack</h1>
            <a href="#">Home Page</a>
            <h3>React JS</h3>
            <img src={flower} alt='' className='img-md'></img>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)