import React, {useState, useEffect} from "react";
import Clock from "./components/clock/clock.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Activity from "./components/Activities/activities.jsx";
import "./See.css"
import {useStateValue} from "./StateProvider"

function See(){
    const [savedActivities,dispatch]= useStateValue(); 
    const [state,setState]=useState({});

    useEffect(()=>{
        dispatch({
            type:"DEL_LIST",
        });
        setState({
                loading: true,
                selectedDate: null,
                day: null,
                month:null,
                year: null
        });
    },[]);


    const dateChanged=(e)=>{
        dispatch({
            type:"DEL_LIST",
        });
        let day=parseInt(e.target.value.slice(8,10));
        let month=parseInt(e.target.value.slice(5,7))-1;            
        let year=parseInt(e.target.value.slice(0,4));
        createList(day,month,year);
        setState({
            ...state,
            loading:false,
            selectedDate: new Date(year,month,day),
            day: day,                
            month: month,
            year: year
        });
    }
    const createList=(day,month,year)=>{
        setDaysDispatch("ADD_DAY1",0,year,month,day);
        setDaysDispatch("ADD_DAY2",1,year,month,day);
        setDaysDispatch("ADD_DAY3",2,year,month,day);
        setDaysDispatch("ADD_DAY4",3,year,month,day);
        setDaysDispatch("ADD_DAY5",4,year,month,day);
        setDaysDispatch("ADD_DAY6",5,year,month,day);
        setDaysDispatch("ADD_DAY7",6,year,month,day);
        setDaysDispatch("ADD_DAY8",7,year,month,day);
    }

    const setDaysDispatch=(type,plus,year,month,day)=>{
        let list=[];
        let newDate=new Date(year,month,day);
        newDate.setDate(newDate.getDate() + plus);
        savedActivities.activities.map((item)=>{
            if(item.day===newDate.getDate() && item.month===newDate.getMonth() && item.year===newDate.getFullYear()){
                list=[...list,item];
            }
            return 0
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
                type:type,
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
            return 0   
        });
    }

    const handleClock=(listLength,plus)=>{
        
        if(state.loading===false && state.selectedDate!==null){
            let displayTime= new Date(state.selectedDate); 
            displayTime.setDate(displayTime.getDate()+plus);  
            return(
                <Clock
                    activities={listLength.length}
                    time={displayTime}
                >    
                </Clock>    
            )
        }  
    }
    const HandleMap = (day)=>{
        //console.log(savedActivities);
        if(day!==undefined){
            return day.map(item=>{
            
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
        <div>
            <NavBar></NavBar>
            <div className="data_picker">
                <input type="date" onChange={(e)=>dateChanged(e)}></input>
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
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day2)
                    }
                </div>
                {
                    handleClock(savedActivities.day3,2)
                }
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day3)
                    }
                </div>
                {
                    handleClock(savedActivities.day4,3)
                }
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day4)
                    }
                </div>
                {
                    handleClock(savedActivities.day5,4)
                }
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day5)
                    }
                </div>
                {
                    handleClock(savedActivities.day6,5)
                }
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day6)
                    }
                </div>
                {
                    handleClock(savedActivities.day7,6)
                }
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day7)
                    }
                </div>
                {
                    handleClock(savedActivities.day8,7)
                }
                <div id="activities" className="activities" >
                    {
                        HandleMap(savedActivities.day8)
                    }
                </div>
            </div>
        </div>
    )
}

export default See;