import React, { Component } from 'react';
import Storage from './Storage.js';

class App extends Component {

    componentWillMount() {
        this.storage = new Storage();
        //contract 초기화 - render()밖에서 하는게 좋은데..
        this.storage.initContract('SimpleStorage.json');
    }

    render() {
        return (
          <div className="App">
                <button onClick={this.storage.setValue}> set </button>
                <button onClick={this.storage.getValue}> get </button>

                <input id="myText" type="text" />
          </div>
        );
    }
}

export default App;
