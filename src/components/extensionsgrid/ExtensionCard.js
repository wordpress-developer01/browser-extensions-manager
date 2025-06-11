import React from 'react';

const ExtensionCard = ({ logo, name, description, isActive, onToggle }) => {
    return (
        <div className="card">
            <img src={logo} alt={name} className="logo" />
            <h2>{name}</h2>
            <p className="description">{description}</p>

            <label className="switch">
                <input type="checkbox" checked={isActive} onChange={onToggle} />
                <span className="slider" />
            </label>

        </div>
    );
};

export default ExtensionCard;
