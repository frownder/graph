import React from 'react';

const user = (props) => {
    return(
        <li>
            <span> name:{props.children}, age:{props.age}, index:{props.index}, id:{props.id}</span>
        </li>
    )
}

export default user;