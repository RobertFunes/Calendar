import React from "react";
import "./login.css"

function Login () {

    return(
        <div className="container">
            <div className="sub-container">
                <div className="banner-img">                     
                    <img alt="Agenda" src="https://images.unsplash.com/photo-1608848941166-0cc5a0b12edc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"></img>
                </div>
                <div className="login-form">
                    <div className="title">
                        Agenda
                    </div>
                    <div className="input-fields">
                        <label className="label">Nombre:</label>
                        <input type="text" className="input"></input>
                    </div>
                    <div className="input-fields">
                        <label className="label">Password:</label>
                        <input type="password" className="input"></input>
                    </div>
                    <div className="btn">
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;