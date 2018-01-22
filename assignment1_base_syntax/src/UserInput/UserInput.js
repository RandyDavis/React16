import React from "react";
// import './UserInput.css';

const userInput = (props) => {

    const style = {
        height: '30px',
        border: '1px solid mediumseagreen',
        textAalign: 'center',
        boxShadow: '2px 2px 8px lightgray'
    }
    return (
        <div className="UserInput">
            <input
                style={style}
                type="text"
                onChange={props.changed}
                value={props.currentName}
            />
        </div>
    )
}

export default userInput;