import React from "react";
import { LoginUser } from "./Callables/LoginUser";

import { useNavigate } from "react-router-dom";

// async function loginUser(credentials, props) {


//     // const temptoken = 123456;
//     // return temptoken;
//     const token = await fetch('http://localhost:8080/public/users/login', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())
//     console.log("Login call")
//     console.log(token)    
//     props.setToken(token)
// }

    function RedirectHome  () {
        console.log("Redirect Called")
        let nav = useNavigate();
        nav("/home")

    }

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    


    handleSubmit = async e => {
        e.preventDefault();
        
        console.log("Login Handler")
        const token = await LoginUser({
                username: this.state.username,
                password: this.state.password
            });
        this.props.setToken(token);
        RedirectHome()
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
    )};
}

