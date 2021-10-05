import React from 'react';

import './headerTitle.scss';

function HeaderTitle({title}) {
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
        </div>
    );
}

export default HeaderTitle;