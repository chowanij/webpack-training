import React, {Component} from 'react';
import api from '../api.js';

export default class UsersComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount(){
        debugger;
        const users = api.getUsers();
        this.setState(
           { users }
        );
    }
    
    render(){
        debugger;
        const users = this.state.users.map((users, index) =>{
            const {name, age} = user;
            return (<p key = {index}> {index} - {name} is {age} </p>);
        });
        return (
            <div> 
                { users }
            </div>
        );
    }
}