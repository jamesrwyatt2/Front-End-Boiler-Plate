

export async function LoginUser(credentials) {



    const response = await fetch('http://localhost:8080/public/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        .then(data => data.json());
        return response

};