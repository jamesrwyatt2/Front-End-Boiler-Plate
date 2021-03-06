import { useState } from 'react';

export default function useToken() {

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        console.log("userToken Saved Token: " + JSON.parse(tokenString))
        return tokenString
        };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        console.log("Sessioning Token" + JSON.stringify(userToken.token))
        sessionStorage.setItem('token', JSON.stringify(userToken.token));

        setToken(userToken.token);
        console.log(token)
        };

        return {
            setToken: saveToken,
            token
            }

}