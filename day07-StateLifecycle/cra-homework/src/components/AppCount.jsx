import React from "react";

class AppCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }
    handleDecrease = () => {
        this.setState({
            ...this.state,
            number: this.state.number + 1,
        });
    };
    handleIncrease = () => {
        this.setState({
            ...this.state,
            number: this.state.number - 1,
        });
    };
    render() {
        return (
            <>
                <h1>Bài thực hành - Đếm số lần click vào Button tăng/giảm</h1>
                <h3>{this.state.number}</h3>
                <button className="btn btn-primary mx-2" onClick={this.handleDecrease}>
                    Decrease
                </button>
                <button className="btn btn-dark" onClick={this.handleIncrease}>
                    Increase
                </button>
            </>
        );
    }
}

export default AppCount;
