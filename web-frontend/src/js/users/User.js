import React from 'react';

const User = (props) => {
    let age = props.age ? props.age : 'NA';

    if (props.children) {
        return ( <div> Name: {props.children} , Age: {age} </div> )   //children은 tag사이의 text임.
    } else {
        return <div>Invalid</div>
    }
}

export default User;