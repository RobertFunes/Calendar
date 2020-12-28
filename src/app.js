import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Edit from "./edit.js";
import Home from "./home.js"
import Login from "./login.js"

function App () {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/edit" component={Edit}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;