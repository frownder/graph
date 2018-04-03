import React, { Component } from 'react';
import Storage from './Storage.js';
//import $ from 'jquery';

class App extends Component {

    storage = new Storage();

    render() {

        //new Storage 여기서.해보자
        //contract 초기화

        this.storage.initContract('SimpleStorage.json');


        return (
          <div className="App">
            <p className="App-intro">


                <button onClick={this.storage.setValue}> set </button>
                <button onClick={this.storage.getValue}> get </button>

                <input id="myText" type="text" />

            </p>
          </div>
        );
    }
}

export default App;
