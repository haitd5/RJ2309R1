import React from "react";

class ChangeAutoColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black",
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                color: "blue",
            });
        }, 5000);
    }
    render() {
        return (
            <>
                <h1>Bài thực hành - Đổi màu nền component</h1>
                <div className="card text-white my-2" style={{ backgroundColor: this.state.color }}>
                    <div className="card-body">The background color will change automatically after 5 seconds</div>
                </div>
            </>
        );
    }
}
export default ChangeAutoColor;
