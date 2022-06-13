import React from "react";

export default class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };

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