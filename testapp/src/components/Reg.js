import React from "react";
import { useNavigate } from "react-router-dom";

async function RegUser(credentials) {
    // const temptoken = 123456;
    // return temptoken;
    return fetch('http://localhost:8080/public/users/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fullname:'',
            password: '',
            repassword:'',
        }
    };

    handleSubmit = async e => {
        e.preventDefault();
        const nav = useNavigate();
        const token = await RegUser({
            username: this.state.username,
            fullname: this.state.fullname,
            password: this.state.password
        });
        console.log("Setting token: " + token)
        this.props.setToken(token);
        console.log("Navigating to: /home ")
        nav("/home")
    }

    render(){
        return(
            <div className="login-wrapper">

            <h1>Please Register</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" value={this.username} onChange={e => this.setState({username : e.target.value})} />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" value={this.fullname} onChange={e => this.setState({name : e.target.value})} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" value={this.password} onChange={e => this.setState({password: e.target.value})} />
                </label>
                <label>
                    <p>Re-Password</p>
                    <input type="password" value={this.repassword} onChange={e => this.setState({repassword: e.target.value})} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>


        )};


}