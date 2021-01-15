
import React from "react";
import ReactDom from "react-dom";
import App from "./app.js"
import { StateProvider } from "./StateProvider.js";
import reducer,{initialState} from "./reducer"
import { Provider } from 'react-redux';
import { store } from './store/store';


const container=document.getElementById ("app");


ReactDom.render(
    <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
        </StateProvider>    
    </Provider>

,container); 
