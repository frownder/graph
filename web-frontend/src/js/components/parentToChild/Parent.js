import React from 'react';
import Child from './Child.js';

const Parent = (props) => {
    return (
        <div>
            <Child doWhatever={props.changeTheWorld} title={props.title}/>
            <Child doWhatever={props.keepSameWorld} title={props.title}/>
        </div>
    )
}

export default Parent;