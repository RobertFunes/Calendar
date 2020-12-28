import React from "react";
import ReactDom from "react-dom";
import App from "./app.js"
import { StateProvider } from "./StateProvider.js";
import reducer,{initialState} from "./reducer"


const container=document.getElementById ("app");


ReactDom.render(
<StateProvider initialState={initialState} reducer={reducer}>
    <App/>
</StateProvider>    

,container);    

