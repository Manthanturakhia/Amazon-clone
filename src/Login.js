import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const login = (event) =>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push("/");
        })
        .catch(e => alert(e.message));
    };    
    const register = (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push("/")
        })
        .catch(e => alert(e.message));
        
    }    
    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt = ""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" onChange={event =>setEmail(event.target.value)} value={email}/>
                    <h5>Password</h5>
                    <input type="password" onChange={event => setPassword(event.target.value)} value={password}/>
                    <button type="submit"  onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>       
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )

}

export default Login
