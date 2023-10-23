import React from "react";

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "football",
            hobbies: ["football", "swimming", "walking"],
        };
    }
    componentDidUpdate() {
        console.log(this.state.selected);
    }
    hanlderChangHobby = (e) => {
        this.setState({
            ...this.state,
            selected: e.target.value,
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
                                type="radio"
                                name="hobby"
                                value={hobby}
                                checked={this.state.selected === hobby}
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

export default RadioGroup;
