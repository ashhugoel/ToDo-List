import React from 'react';

const SearchBar = ({ handleSearchInputChange, searchTerm }) => {
    return (
        <div className='  flex-grow-1 position-relative'>
            <input className='custom-input'
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearchInputChange}
            />
        </div>
    );
};

export default SearchBar;
