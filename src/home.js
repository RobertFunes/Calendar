import React, {useState, useEffect} from "react";
import Clock from "./components/clock/clock.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Activity from "./components/Activities/activities.jsx";
import "./home.css";
import {useStateValue} from "./StateProvider"

 
function Home (){
    var list=[];
    //guardar día de hoy
    const today= new Date();
    //states
    const [savedActivities,dispatch]= useStateValue(); 
    const [loading,setloading]=useState(true);


    const createTodayList=()=>{
        dispatch({
            type:"DEL_LIST",});
        savedActivities.activity.map((item)=>{
            if(item.day===today.getDate() && item.month===today.getMonth() && item.year===today.getFullYear()){
                list=[...list,item];
            }
        }); 
        list.sort((a,b)=>{
            if(a.hour<b.hour){
                return -1;
            }
            if(a.hour>b.hour){
                return 1;
            }
            return 0;
        });
        list.map(item=>{
            
            dispatch({
                type:"ADD_TODAY",
                item:{
                    id:item.id,
                    name:item.name,
                    kind:item.kind,
                    number:item.number,
                    month: item.month,
                    year: item.year,
                    note:item.note,
                    hour: item.hour,
                    minutes: item.minutes,
                    day: item.day
                }});
        });
        //tomorrow
        list=[];
        today.setDate(today.getDate() + 1);
        savedActivities.activity.map((item)=>{
            if(item.day===today.getDate() && item.month===today.getMonth() && item.year===today.getFullYear()){
                list=[...list,item];
            }
        });
        list.map(item=>{
            
            dispatch({
                type:"ADD_TOMORROW",
                item:{
                    id:item.id,
                    name:item.name,
                    kind:item.kind,
                    number:item.number,
                    month: item.month,
                    year: item.year,
                    note:item.note,
                    hour: item.hour,
                    minutes: item.minutes,
                    day: item.day
                }});
        }); 
        setloading(false);
    }
    
    React.useEffect(()=>{
        createTodayList();
        
    },[]);
    const handleClock=(listLenght,plus)=>{
        if(loading===true){
            return(<p>Cargando...</p>)
        }else{
            let date = new Date();
            date.setDate(date.getDate()+plus);
            return(
                <Clock 
                    activities={listLenght}
                    time={date}
                >
                </Clock>
            )
        }
    }
    
    return(
        <div className="a">
            <div>
                <NavBar ></NavBar>
                {
                    handleClock(savedActivities.today.length,0)
                }
            </div>
            <div id="activities" className="activities" >
                {
                
                savedActivities.today.map(item=>{
                    //console.log(item.minutes);
                    return(
                    <Activity 
                        key ={item.id} 
                        day={item.day}
                        id={item.id}
                        minutes={item.minutes}
                        kind ={item.kind} 
                        hour={item.hour} 
                        name={item.name} 
                        note={item.note}
                        number={item.number}>
                    </Activity>
                    )
                })}
                
                
                    
                </div>
                {
                    handleClock(savedActivities.tomorrow.length,1)
                }
                <div className="activities">
                    {
                    
                    savedActivities.tomorrow.map(item=>{
                        
                        return(
                            <Activity 
                                key ={item.id} 
                                day={item.day}
                                id={item.id}
                                minutes={item.minutes}
                                kind ={item.kind} 
                                hour={item.hour} 
                                name={item.name} 
                                note={item.note}
                                number={item.number}>
                            </Activity>
                        )
                    })}
                </div>
                {
                    handleClock(savedActivities.tomorrow.length,2)
                }
                {
                    handleClock(savedActivities.tomorrow.length,3)
                }
                {
                    handleClock(savedActivities.tomorrow.length,4)
                }
                {
                    handleClock(savedActivities.tomorrow.length,5)
                }  
                {
                    handleClock(savedActivities.tomorrow.length,6)
                }
                {
                    handleClock(savedActivities.tomorrow.length,7)
                }                                             
            </div>        
    );
    
}

export default Home;