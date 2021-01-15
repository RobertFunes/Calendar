import React from "react"
    import ReactDom from "react-dom";
import {useStateValue} from "./StateProvider"
import "./edit.css"
import { startNewAct } from "./act";

import { useDispatch } from 'react-redux';





function Save({name,kind,number,date,note,form}) {

    const dispatchRedux=useDispatch();
    const [state,dispatch]= useStateValue(); 


    const addActivity=()=>{
        let hour;
        if(name==="" || number==="" || date===""){
            const container = document.getElementById("error");
            ReactDom.render(<Message s="error"></Message>,container);
        }else{
            const container = document.getElementById("error");
            ReactDom.render(<Message s="saving"></Message>,container);

            hour= new Date(date);
            const id= new Date().getTime()
            dispatch({
                type:"ADD_ACTIVITY",
                item:{
                    id:id,
                    name:name,
                    kind:kind,
                    number:number,
                    month: hour.getMonth(),
                    year: hour.getFullYear(),
                    note:note,
                    hour: hour.getHours(),
                    minutes: hour.getMinutes(),
                    day: hour.getDate()
                }});

            const item={
                id:id,
                name:name,
                kind:kind,
                number:number,
                month: hour.getMonth(),
                year: hour.getFullYear(),
                note:note,
                hour: hour.getHours(),
                minutes: hour.getMinutes(),
                day: hour.getDate()
            }    
            dispatchRedux(startNewAct(item));
            ReactDom.render(<Message s="saved" name={name}></Message>,container);        
        }

    }
    
    return(
        <div>
            <center>
                <button onClick={addActivity}>✅Guardar✅</button>
            
            <Message s="uncompleted"></Message>
            <div id="error">
                
            </div>
            </center>
        </div>
    )
}

export default Save;

class Message extends React.Component{
    render(){
        if(this.props.s==="uncompleted"){
            
            return(
                <div>
                </div>
            )
        }else if (this.props.s==="error"){
            return(
                <div className="error_section">
                    <h4>Error: Comprueba los campos.</h4>
                </div>
            )

        }else if (this.props.s==="saving"){
            return(
                <div className="loading_section">
                    <h3>Guardando...⚠️</h3>
                </div>
            )

            }else if (this.props.s==="saved"){
                return(
                    <div className="saved_section">
                        <h4>{this.props.name} Guardado☑️</h4>
                    </div>
                )
    
                }

    }

}