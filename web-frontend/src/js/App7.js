import React, { Component } from 'react';
//import Users from './users/Users';
//import Binds from './bind/Binds';
//import Parent from './components/parentToChild/Parent';
import UniqueId from 'react-html-id';
import User from './components/user.js'

import './App.css';

/* 이전챕터 test
    <Users title="Users List"/>
    <Binds/>
*/

class App extends Component {

    constructor() {
        super();
        UniqueId.enableUniqueIds(this);

        this.state = { //uniqueID를 쓰려면 this때문에 생성자에서?
            users: [
                {id:this.nextUniqueId(),  name:'Kim', age:10},
                {id:this.nextUniqueId(), name:'Lee', age:20}
            ]
        }

        //array.findIndex( )로 true리턴해서 쉽게 찾을수 있음.
    }

    render() {
     return (
        <div className="App">
            <ul>
                {
                    this.state.users.map((user,index) => {
                        return (<User age={user.age} id={user.id} index={index}>{user.name}</User>)
                    })
                }
            </ul>
        </div>
     );
    }
}

export default App;
