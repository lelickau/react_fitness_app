import React from 'react';


const InputItem = ({...props}) => {
    return (
        <input className="input__main" {...props} />
    );
};

export default InputItem;