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
        savedActivities.activities.map((item)=>{
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
                type:"ADD_DAY1",
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
        savedActivities.activities.map((item)=>{
            if(item.day===today.getDate() && item.month===today.getMonth() && item.year===today.getFullYear()){
                list=[...list,item];
            }
        });
        list.map(item=>{
            
            dispatch({
                type:"ADD_DAY2",
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
        if(loading===true || listLenght===undefined){
            return(<p>Cargando...</p>)
        }else {
            let date = new Date();
            date.setDate(date.getDate()+plus);
            return(
                <Clock 
                    activities={listLenght.length}
                    time={date}
                >
                </Clock>
            )
        }
    }

    const HandleMap = (day)=>{
        if(day!==undefined && loading===false){
            return day.map(item=>{
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
            })
        }    
    }
    
    return(
        <div className="a">
            <NavBar ></NavBar>
            {
                handleClock(savedActivities.day1,0)
            }
            <div id="activities" className="activities" >
                {
                    HandleMap(savedActivities.day1)
                }        
            </div>
            {
                handleClock(savedActivities.day2,1)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day2)
                }
            </div>
            {
                handleClock(savedActivities.day3,2)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day3)
                }
            </div>
            {
                handleClock(savedActivities.day4,3)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day4)
                }
            </div>
            {
                handleClock(savedActivities.day5,4)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day5)
                }
            </div>  
            {
                handleClock(savedActivities.day6,5)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day6)
                }
            </div>
            {
                    handleClock(savedActivities.day7,6)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day7)
                }
            </div>
            {
                handleClock(savedActivities.day8,7)
            }
            <div className="activities">
                {
                    HandleMap(savedActivities.day8)
                }
            </div>                                      
        </div>        
    );
    
}

export default Home;