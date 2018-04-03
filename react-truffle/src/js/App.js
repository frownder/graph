import React, { Component } from 'react';
import Storage from './Storage.js';

class App extends Component {

    storage = new Storage();

    render() {

        //contract 초기화 - render()밖에서 하는게 좋은데..
        this.storage.initContract('SimpleStorage.json');

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
