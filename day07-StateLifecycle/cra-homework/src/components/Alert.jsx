import React from "react";

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
    }

    deleteComponents = () => {
        alert("The component is going to be unmounted");
    };
    render() {
        return (
            <>
                <h1>Bài thực hành - Hiện thông báo trước khi Component ẩn</h1>
                <button className="btn btn-danger" onClick={this.deleteComponents}>
                    Delete the components
                </button>
            </>
        );
    }
}
export default Alert;
