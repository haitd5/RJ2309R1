import React from "react";
import Content from "./Content";

class Appcount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 10,
            showContent: false,
        };
    }
    // tawng gia tri
    hanlderIncreament = () => {
        this.setState({
            ...this.state,
            number: this.state.number + 1,
        });
    };
    // giam gia tri
    hanlderDecreament = () => {
        this.setState({
            ...this.state,
            number: this.state.number - 1,
        });
    };
    hanlderToggleContent = () => {
        this.setState({
            ...this.state,
            showContent: !this.state.showContent,
        });
    };
    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.hanlderIncreament}>Increament</button>
                <button onClick={this.hanlderDecreament}>Decreament</button>
                <br />
                <button onClick={this.hanlderToggleContent}>Toggle content components</button>
                {this.state.showContent && <Content bgColor={"green"} color={"white"} />}
            </div>
        );
    }
}
export default Appcount;
