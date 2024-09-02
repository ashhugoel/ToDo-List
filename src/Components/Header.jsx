import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';

const Header = ({ searchTerm, handleSearchInputChange }) => {


    return (
        <header className='d-flex '>
            <div className='favicon mt-2'>
                <DnsRoundedIcon fontSize="large" />
            </div>
            <h1 className='mx-2'>Task Tracker </h1>

            <SearchBar
                searchTerm={searchTerm}
                handleSearchInputChange={handleSearchInputChange}
            />
        </header>
    );
}

export default Header;
