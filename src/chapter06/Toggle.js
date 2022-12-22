import React, { useState } from "react";

/* 클래스형
class Toggle extends Component {
    constructor(props) {
        super();
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}
*/

// 함수형
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn)
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    )
}

export default Toggle;