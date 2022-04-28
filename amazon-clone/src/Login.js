import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import {auth} from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            // it successfully createda new user email and password
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login-logo'
                    src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png'
                />
            </Link>

            <div className='login-container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail or mobile phone number</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login-signinButton'>Sign In</button>

                </form>

                <small className='keep-signIn'>
                    <input type='checkbox' /> Keep me signed in
                </small>

                <p>
                    By signing-in, you agree to Amazon's Clone Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className='login-registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;
