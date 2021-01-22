import React from 'react';

const List = (props) => {

    const listContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e2e2e2',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.2rem'
    }

    return(
        <div style={listContainerStyles} className="list-container">
            {props.children}
        </div>
    )
};

export default List;