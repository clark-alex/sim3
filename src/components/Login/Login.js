import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Helo</h1>
                    <a href={process.env.REACT_APP_LOGIN}><button>Login/Register</button></a>

                </div>
            </div>
        );
    }
}

export default Login;