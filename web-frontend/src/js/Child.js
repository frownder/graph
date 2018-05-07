import React, {Component} from 'react';

class Child extends Component {

    constructor() {
        super();
        console.log('Child: constructor');
    }

    //constructor후에 1번호출 : init작업하기 좋음
    componentWillMount(){
        console.log('Child: willMount');
    }

    componentDidMount() {
        console.log('Child: DidMound');
    }

    componentWillReceiveProps() {
        console.log("Child: WillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Child: shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('Child: willUpdate');
    }
    // child ajax 쏘기 좋은 곳으로 보임
    componentDidUpdate(prevProps, prevState) {
        console.log('Child: DidUpdate,' + prevProps +',' + prevState);
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount(){
        console.log('Child: willUnmount');
    }

    render() {
        console.log('Child: render');
        return (
            <div className="App">

                {this.props.name}
            </div>
        );
    }
}

export default Child;