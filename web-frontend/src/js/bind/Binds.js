import React, { Component } from 'react';

class Binds extends React.Component {

    state = {
        name: "test first name"
    }

    changeName = (newName) => {
        this.setState({
            name: newName
        });
    }

    //input이 바뀌면(event)통해서 자동으로 바뀜
    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render () {
        return (
            <div className = "Binds">
                <br/> <br/>
                <button onClick={() => this.changeName('Annon Name')}> changeName annoymous</button>
                <button onClick={this.changeName.bind(this, 'Bind Name')}> changeName Bind</button>

                <input tyep="text" onChange={this.changeNameFromInput} value={this.state.name} />

                <div> OutPut: {this.state.name} </div>
            </div>
        )
    }

}

export default Binds;