import React from 'react';

import './elems.scss';

function PlusMinusElem(props) {
    return (
        <div className="plus-ico">
            <img className="plus-ico__img" {...props} />
        </div>
    );
}

export default PlusMinusElem;