import React from 'react';

const Header = () => {

    const headerStyles = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto, sans-serif'
    };

    const titleStyles = {
        fontWeight: '400',
        fontSize: '3rem',
        color: '#e2e2e2',
        margin: '1rem'
    };

    return(
        <header style={headerStyles}>
            <h1 style={titleStyles}>BrewsNearMe</h1>
            <p style={{color: '#e2e2e2', fontSize: '1.3rem', margin: '0'}}>Enter your zip code to find breweries near you</p>
        </header>
    )
};

export default Header;