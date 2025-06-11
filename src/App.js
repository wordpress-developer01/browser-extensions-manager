import React, { useState, useEffect } from 'react';
import Header from "./components/header/Header";
import ExtensionsGrid from "./components/extensionsgrid/ExtensionsGrid";
import './App.css';
import SearchBar from "./components/searchbar/SearchBar";
import mockExtensions from "./components/extensionsgrid/mockExtensions";


function App(props) {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

    const [extensions, setExtensions] = useState(mockExtensions);

    const toggleExtension = (id) => {
        setExtensions((prev) =>
            prev.map((ext) =>
                ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
            )
        );
    };

    const [filter, setFilter] = useState('all');

    const filtred = extensions.filter((ext) => {
       if(filter === 'active') return ext.isActive;
       if(filter === 'inactive') return !ext.isActive;

       return true;
    });



    return (
        <div>
           <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <SearchBar setFilter={setFilter}/>
           <ExtensionsGrid extensions={filtred} onToggle={toggleExtension}/>

        </div>
    );
}

export default App;