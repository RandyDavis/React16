import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is {props.username}.</p>
            <p onClick={props.click}>They call me {props.nickName } for short.</p>
        </div>
    );
}

export default userOutput;