import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }
    componentDidMount() {
        // console.log("content componentDidMount");
        console.log(this.props);
    }
    componentDidUpdate() {
        console.log(`content componentDidUpdate ${this.state.number}`);
    }
    componentWillUnmount() {
        console.log("content componentWillUnmount");
    }
    hanlderIncreament = () => {
        this.setState({
            ...this.state,
            number: this.state.number + 1,
        });
    };
    render() {
        return (
            <>
                <h1 style={{ backgroundColor: this.props.bgColor, color: this.props.color }}>
                    Content- {this.state.number}
                </h1>
                <button onClick={this.hanlderIncreament}>Increament</button>
            </>
        );
    }
}

export default Content;
