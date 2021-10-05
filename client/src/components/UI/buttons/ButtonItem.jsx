import React from 'react';

import './buttonItem.scss';

const ButtonItem = ({children, ...props}) => {
    return (
        <button {...props} className={`btn__main ${props.btnStyle}`}>{children}</button>
    );
};

export default ButtonItem;