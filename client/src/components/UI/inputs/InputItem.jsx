import React from 'react';

import './inputItem.scss';

const InputItem = ({...props}) => {
    return (
        <input {...props} />
    );
};

export default InputItem;