import React, { Component } from 'react';
import Users from './users/Users';
import Binds from './bind/Binds';
import Parent from './components/parentToChild/Parent';

import './App.css';

/* 이전챕터 test
    <Users title="Users List"/>
    <Binds/>
*/


class App extends Component {
   state = {
       title: 'place Title'
   }

   changeWorld = (newTitle) => {
       this.setState({title: newTitle});
   }

   render() {
     return (
        <div className="App">
            <Parent changeTheWorld={this.changeWorld.bind(this, "new World")}
                    keepSameWorld={this.changeWorld.bind(this, "same World")}
                    title={this.state.title}
            />
        </div>
     );
   }
}

export default App;
