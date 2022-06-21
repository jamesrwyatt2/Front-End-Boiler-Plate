
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    // console.log(credentials)
    // console.log(JSON.stringify(credentials))
    const response = await fetch('http://localhost:8080/public/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        if (response.status >=200 && response.status <= 299) {
            console.log(response)
            const jsonResonse = await response.json();
            console.log(jsonResonse)
            return jsonResonse
        } else {
            console.log(response.status, response.statusText);
            
            return response
        }
};

export default function Login2 ({setToken}) {
    const nav = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
        username,
        password
    });
    console.log(response)
    if(response.token!=null){
        console.log("Sucessful Login Setting token")
    setToken(response);
    nav("/home")
    } else {
        setError("Invalid Credientials")
    }   
    }

    return (
    <div className="login-wrapper">

        <h1>Please Login</h1>
        <form onSubmit={handleSubmit}>
            <p className="errorText">{error}</p>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword( e.target.value)} />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    )
}
Login2.propTypes = {
    setToken: PropTypes.func.isRequired
    };