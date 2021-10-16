import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className="register-form">
            <div >
                <div >
                    <h2>Register: Create Account</h2>
                    <form onSubmit="">
                        <input type="email" name="" placeholder='Email' />
                        <br />
                        <input type="password" name="" id="" placeholder="Password" />
                        <br />
                        <input type="password" name="" id="" placeholder="Re-Enter Password" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <span>Already Have an Account? </span><Link to="/login">Login</Link>
                    <div>----------or--------</div>
                    <button className='btn-regular'>google sign in</button>

                </div>
            </div>
        </div>
    );
};

export default Register;