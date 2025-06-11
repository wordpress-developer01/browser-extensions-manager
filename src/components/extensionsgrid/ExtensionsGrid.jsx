import React from 'react';
import './extensionsgrid.css';
import ExtensionCard from "./ExtensionCard";

function ExtensionsGrid({ extensions, onToggle }) {
    return (
        <div className="extensions-grid">
            {extensions.map((ext) => (
                <ExtensionCard
                    key={ext.id}
                    {...ext}
                    onToggle={() => onToggle(ext.id)}
                />
            ))}
        </div>
    );
}


export default ExtensionsGrid;