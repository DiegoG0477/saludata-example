import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles/login.css';
import '../App.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'ingresar@gmail.com' && password === 'abc1234') {
            setLoggedIn(true);
        } else {
            alert('Error: datos incorrectos');
        }
    };

    if (loggedIn) {
        return <Navigate to="/menu" />;
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit} >
                <h2 className="login-heading">Iniciar sesión</h2>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={handleUsernameChange}
                    className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"

                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handlePasswordChange}
                    className="shadow-sm p-3 mb-5 bg-body-tertiary rounded form-control input"
                />
                <button type="submit" className="login-button">
                    Iniciar sesión
                </button>
            </form>
            <div className="login-container1"></div>

        </div>
    );
};

export default Login;