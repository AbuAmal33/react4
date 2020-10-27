import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header(props) {
    return (
        <div className="app">
            <div className="header">
                <Logo />
                <Menu />
            </div>
        </div>
    );
}

export default Header;