import React from "react";

class CheckBoxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: ["football"],
            hobbies: ["football", "swimming", "walking"],
        };
    }
    componentDidUpdate() {
        console.log(this.state.selectedList);
    }
    hanlderChangHobby = (e) => {
        let newSelectedList = [...this.state.selectedList];
        if (newSelectedList.includes(e.target.value)) {
            newSelectedList = newSelectedList.filter((item) => item != e.target.value);
        } else {
            newSelectedList = [...newSelectedList, e.target.value];
        }
        this.setState({
            ...this.state,
            selectedList: newSelectedList,
        });
    };
    render() {
        return (
            <>
                <h3>Please choice hobby</h3>
                {this.state.hobbies.map((hobby) => (
                    <div key={hobby}>
                        <label>
                            <input
                                type="checkbox"
                                name="hobby"
                                value={hobby}
                                checked={this.state.selectedList.includes(hobby)}
                                onChange={this.hanlderChangHobby}
                            />
                            {hobby}
                        </label>
                    </div>
                ))}
            </>
        );
    }
}

export default CheckBoxGroup;
