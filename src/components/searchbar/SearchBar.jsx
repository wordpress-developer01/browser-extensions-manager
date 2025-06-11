import React from 'react';
import './searchbar.css';

function SearchBar( {setFilter} ) {
    return (
        <div className="search-bar">
            <h1>Extenions List</h1>
            <div className={'btn'}>
            <button className={'btn-all'} onClick={() => setFilter('all')}>All</button>
            <button className={'btn-active'} onClick={() => setFilter('active')}>Active</button>
            <button className={'btn-inactive'} onClick={() => setFilter('inactive')}>Inactive</button>
            </div>
        </div>
    );
}

export default SearchBar;