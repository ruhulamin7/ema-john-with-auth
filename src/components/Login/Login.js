import React from 'react';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, errorMessage, signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location?.state?.from || '/shop'
    console.log('came from', location?.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    };

    return (
        <div className="login-form">
            <div >
                <h2>Login</h2>
                <form>
                    <input type="email" name="" placeholder='Email' />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <span>New to ema-john? </span><Link to="/register">Create a Account</Link>
                <div>----------or--------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>google sign in</button>

            </div>
        </div>
    );
};

export default Login;