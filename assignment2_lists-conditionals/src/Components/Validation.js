import React from 'react';

const Validate = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short'
    }
    return (
        <div className="Validate">
            <p>{validationMessage}</p>
        </div>
    );
}

export default Validate;