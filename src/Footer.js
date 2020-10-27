import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className="app">
            <div className="footer">
                <FooterLogo />
                <FooterMenu />
                <Copyright />
            </div>
        </div>
    );
}

export default Footer;