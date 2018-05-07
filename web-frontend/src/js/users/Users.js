import React, { Component } from 'react';
import User from './User';

class Users extends Component {

    state = {
        users: [
            {name:"Kim", age:20},
            {name:"Lee", age:30},
            {name:"Tee", age:40},
        ],
        title:"Users Lists"
    }

    reduceAge = () => {
        const newState = this.state.users.map( (user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });

        this.setState({newState});
    }

        /*
        this.setState({
            users: [
                {name:"Kim", age:10},
                {name:"Lee", age:20},
                {name:"Tee", age:30},
            ]
        });
        console.log(this.state.users); //아직 안바뀜. setState가 async라서 그러함.
        */



    render() {
        return (
            <div>
                <button onClick={this.reduceAge}> ReduceAge </button>
                <br/>
                <h1> {this.state.title} </h1>
                {
                    this.state.users.map((user) => {
                        return <User age={user.age}>{user.name}</User>
                    })
                }
            </div>
        )
    }
}

export default Users;