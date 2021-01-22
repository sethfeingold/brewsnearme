import React from 'react';

const SearchBar = (props) => {

    function changeHandler(e) {
        props.setZip(e.target.value);
    }

    const searchBarStyles = {
        margin: "3rem auto",
        display: 'block',
        padding: '10px',
        borderRadius: '5px',
        border: '10px solid #a69547',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.3rem',
        fontWeight: '700',
        color: '#333'
    };

    return(
            <input onChange={changeHandler} style={searchBarStyles} placeholder={props.text} type="number" />
    );
};

export default SearchBar;