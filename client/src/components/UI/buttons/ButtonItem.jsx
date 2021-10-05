import React from 'react';

import './buttonItem.scss';

const ButtonItem = ({children, ...props}) => {
    return (
        <button {...props}>{children}</button>
    );
};

export default ButtonItem;