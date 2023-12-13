import React from 'react';

function Button(props) {
    const handleClick = () => console.log('helo chicken');
    if (props.type) {
        return (
            <div>
                <button className="btn btn-dark" type="button" onClick={handleClick}>
                    {props.children}
                </button>
            </div>
        );
    }
    if (props.href) {
        return (
            <>
                <a className="btn btn-lnik" href={props.href}>
                    {props.href}
                </a>
            </>
        );
    }
}

export default Button;
