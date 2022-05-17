import React from "react";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
    }
    }
    signIn () {
        this.isAuthenticated = true;
        callback();
    }
    signOut () {
        this.isAuthenticated = false;
    }

}

