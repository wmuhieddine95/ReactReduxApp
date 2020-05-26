import React from 'react'

const rainbow = (WrappedComponent) => {
    const colors = ['green','blue','orange','red'];
    const randomColor = colors[Math.floor(Math.random() * 3)];
    const className= randomColor + '-text';

    return(props) => {
        return(
            <div className= {className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default rainbow;