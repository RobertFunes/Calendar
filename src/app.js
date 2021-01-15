import React,{useReducer,useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { AuthContext } from "./components/auth/AuthContext.js";
import Edit from "./edit.js";
import Home from "./home.js"
import Login from "./login.js"
import See from "./See.js"
import { authReducer } from './components/auth/authReducer';
import Config from './config';
import { firebase } from './firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import {auth} from "./components/auth/auth"
import { PrivateRoutes } from './PrivateRoute';
import { loadActs } from "./act.js";
import {useStateValue} from "./StateProvider"



function App () {

    //const [savedActivities,acdispatch]= useStateValue(); 
    const [Checking, setChecking] = useState(true);
    const dispatchRedux = useDispatch();
    const [user,dispatch]=useReducer(authReducer,{});
    const [isLogged, setisLogged] = useState(false);    
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user?.uid){
                dispatchRedux(auth(user.uid,user.displayName));
                setisLogged(true);
                
            }else{setisLogged(false)}
            setChecking(false);
        });
    },[dispatchRedux,setChecking, setisLogged,] )

    if (Checking){
        return(
            <h1>Cargando...</h1>
        )
    }
    return(
        <AuthContext.Provider value={{user,dispatch}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoutes isLogged={isLogged} exact path="/" component={Home}/>
                    <PrivateRoutes isLogged={isLogged} path="/home" component={Home}/>
                    <PrivateRoutes isLogged={isLogged} path="/edit" component={Edit}/>
                    <PrivateRoutes isLogged={isLogged} path="/see" component={See}/>
                    <PrivateRoutes isLogged={isLogged} path="/config" component={Config}/>
                </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;