import React from "react";
import axios from 'axios';
import StudentAdd from './StudentAdd';
import StudentDelete from './StudentDelete';

async function loginUser(credentials) {
    // const temptoken = 123456;
    // return temptoken;
    return fetch('http://localhost:8080/public/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        };
    
        handleSubmit = async e => {
            e.preventDefault();
            const token = await loginUser({
                username: this.state.username,
                password: this.state.password
            });
            console.log("Setting token: " + token)
            this.props.setToken(token);
        }
        render(){
        return(
            <div className="login-wrapper">
    
            <h1>Please Login</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" value={this.username} onChange={e => this.setState({username : e.target.value})} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={this.password} onChange={e => this.setState({password: e.target.value})} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        )}


}

