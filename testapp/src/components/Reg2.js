import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

async function RegUser(credentials) {
    console.log(credentials)
    console.log(JSON.stringify(credentials))
    const response = await fetch('http://localhost:8080/public/users/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        
        .catch(error => {
            console.log(error)
            if(error === 400 ) {
                console.log("400 error")
            }

        })
        console.log("Start of logic Reg Response")
        console.log(response)
        const jsonResonse = await response.json();
        // Can filter out different types of errors if needed, and have different returns

        if (response.status >=200 && response.status <= 299) {
            console.log(jsonResonse)
            return jsonResonse
        } if (response.status >=300 ) {
            console.log(response.status, jsonResonse.errorMessage);
            return jsonResonse
        }
};


export default function Reg2 ({setToken}) {
    const nav = useNavigate()
    const [username, setUsername] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await RegUser({
            username,
            fullName,
            password,
            rePassword
        });
        console.log(response)
// We can see if there is a token in the rsponse and save or redirect, 
// see if there is an error Message and save it as Error to display 

        if(response.token != null){
            console.log("Sucessful Registration Setting token")
            setToken(response);
            nav("/home")
        }
        if(response.errorMessage) {
            console.log("Setting Error")
            setError(response.errorMessage)
        }
    }

    return (
        <div className="login-wrapper">
    
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <p className="errorText">{error}</p>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setFullName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword( e.target.value)} />
                </label>
                <label>
                    <p>Re-Enter Password</p>
                    <input type="password" onChange={e => setRePassword( e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
}

Reg2.propTypes = {
    setToken: PropTypes.func.isRequired
    };