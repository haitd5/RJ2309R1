import React from "react";

class Expand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
        };
    }
    handleShow = () => {
        this.setState({
            isExpand: true,
        });
    };
    handleClose = () => {
        this.setState({
            isExpand: false,
        });
    };
    render() {
        if (!this.state.isExpand) {
            return (
                <>
                    <h1>Bài tập 1 - Component Expand/Collapse nội dung</h1>
                    <h2 className="text-white bg-success">Conditional Rendering</h2>
                    <button className="btn btn-info" onClick={this.handleShow}>
                        Xem giới thiệu
                    </button>
                </>
            );
        } else {
            return (
                <>
                    <h1>Bài tập 1 - Component Expand/Collapse nội dung</h1>
                    <h2 className="text-white bg-success">Conditional Rendering</h2>
                    <button className="btn btn-info" onClick={this.handleClose}>
                        Đóng giới thiệu
                    </button>
                    <p>
                        Pariatur cillum eu magna est esse elit. Irure consequat ipsum officia nulla consectetur magna
                        irure anim incididunt mollit. Do ipsum cupidatat ex ullamco pariatur ad veniam consectetur magna
                        nulla ipsum aliqua laborum labore. Adipisicing aliquip officia anim sunt occaecat do id sunt ut.
                        Fugiat aliquip labore Lorem irure dolore ad minim duis Lorem aliqua eu magna. Amet dolor
                        consequat consectetur eu ut nulla non culpa dolore ex. Adipisicing ullamco amet proident ullamco
                        incididunt non et nostrud nulla sit reprehenderit officia.
                    </p>
                </>
            );
        }
    }
}

export default Expand;
