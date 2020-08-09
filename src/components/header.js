import React from 'react';

const Header = (props) => {
    return <header className="my-header">
         <h1 className="header-title">Budget tracker!! {props.completed} Budgeted </h1>
    </header>
};

export default Header;
