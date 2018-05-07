import React, { Component, Fragment } from 'react';
import './App.css';
import Child from './Child.js';

const Temp = (props) => {
    return (<Fragment>{props.greet === 'Hi' ? <Fragment>{props.greet}&lt;div;&gt;</Fragment> : props.greet}</Fragment>)
}

class App extends Component {

    constructor() {
        super();
        console.log('constructor');
    }

    state = {name:'Lee'}

    //constructor후에 1번호출 : init작업하기 좋음
    componentWillMount(){
        console.log('willMount');
        if (window.innerWidth < 500) {
            this.setState({innerWidth:window.innerWidth});
        }
    }

    //parent ajax쏘기 좋은 곳임.
    componentDidMount() { //여기서 ajax호출해야 함
        console.log('DidMount');
        //this.setState({name:'Kim'}); //render만 일어남. child도 render만 일어남.
    }

    /////////redraw check용도들 /////////////

    componentWillReceiveProps() {
        console.log("WillReceiveProps");
    }
    //render전에 호출
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    changeState() {
        this.setState({name:'YOU'}); //render만 일어남. child도 render만 일어남.
    }

    unmountChild() {
        this.setState({name:'DELL'});
    }

    render() {
        console.log('render');
        if (this.state.name === 'DELL') {
            return (<div/>);
        }
        return (
            <div className="App">
                {this.state.name},{this.state.innerWidth}
                <Child name="Mychild"/>
                <button onClick={this.changeState.bind(this)}>Change State</button>
                <button onClick={this.unmountChild.bind(this)}>unmount Child</button>
            </div>
        );
    }
}

export default App;
