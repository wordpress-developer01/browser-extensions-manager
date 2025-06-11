import React from 'react';
import "./header.css";

function Header({ darkMode, toggleTheme }) {
    return (
        <div className="Header-body">
            <img className="Logo1" src="assets/images/logo.svg" alt="Logo" />

            <button className="theme-toggle" onClick={toggleTheme}>
                <img
                    className="Logo2"
                    src={darkMode ? "assets/images/icon-sun.svg" : "assets/images/icon-moon.svg"}
                    alt="Theme toggle"
                />
            </button>
        </div>
    );
}

export default Header;
