import React, { useState } from "react";
import "./activities.css";
import {useStateValue} from "../../StateProvider.js"
let fixedHour,fixedMinutes,isam,message;
function Del(props){
    const[state,setState]=useState(false)
    const [savedActivities,dispatch]= useStateValue(); 
    //console.log(props.id);
    const style=()=>{
        if(state===false){
            return "del"
        }else{
            return "del1"
        }

    }
    const delAct=()=>{
        if(state===false){
            setState(true)
        }else{
        dispatch({
            type:"DELETE",
            item:{
                id:props.id
            }});
            window.location.reload();
        }
    }
    
    return(

        <button
            type="button" 
            className={style()}
            onClick={delAct}>
                ❌
        </button>
    ) 
}

class Activities extends React.Component {
    
    constructor(props){
        super (props);
        if(props.hour>12){
            fixedHour=props.hour-12;
            isam="PM";
            if(fixedHour<10){
                fixedHour="0"+ fixedHour.toString();
            }
        }else{
            fixedHour=props.hour
            isam="AM";
            if(fixedHour<10){
                fixedHour="0"+ fixedHour.toString();
            }
        }
        if(props.minutes<10){
            fixedMinutes="0"+props.minutes
        }else{fixedMinutes=props.minutes}

        this.state={
            id:props.id,
            am: isam,
            minutes: fixedMinutes|| 0  ,
            hour:fixedHour || "Hora",
            kind: props.kind || "Kind",
            name: props.name || "Nombre",
            note: props.note || false,
            number: props.number,
            day: props.day

        }
    }
    renderNote(){
        if(this.props.note!==""){
            return(
                <>  
                    <button onClick={()=>{alert(this.props.note);}}>📓</button>

                </>
            )
        }
    }
    messageCreate(){
        message="https://wa.me/52"+this.state.number.toString()+
        "?text=Le%20escribe%20la%20doctora%20Verónica%20para%20confirmar%20su%20cita%20agendada%20el%20día%20"
        +this.props.day.toString()+"%20a%20las%20"+fixedHour.toString()+
        ":"+fixedMinutes.toString()+"%20"+isam+".";
        return message
        
    }
    

    render(){
        return(
            <div className="activity">  
                <p className="activity__hour">
                    <strong>🕰️{this.state.hour}:{this.state.minutes} </strong>
                    <small>{isam}</small>
                </p>
                <p className="activity__title">
                    {this.state.kind}
                </p>
                <center>
                    <p className="activity__name">{this.state.name}</p>
                    <a href={this.messageCreate()}>    
                        <button className="number_button">💭{this.state.number}</button>
                    </a>    
                    </center>
                <center>    
                    <a href={"tel:"+this.props.number}> 
                        <button className="call_button">📞</button></a>
                    <Del id={this.props.id }></Del>
                    {this.renderNote()}
                </center>
            </div>

        );
    }
}

export default Activities;

