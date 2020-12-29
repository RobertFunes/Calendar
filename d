[1mdiff --git a/src/home.js b/src/home.js[m
[1mindex 8933c53..76b8a73 100644[m
[1m--- a/src/home.js[m
[1m+++ b/src/home.js[m
[36m@@ -18,7 +18,7 @@[m [mfunction Home (){[m
     const createTodayList=()=>{[m
         dispatch({[m
             type:"DEL_LIST",});[m
[31m-        savedActivities.activity.map((item)=>{[m
[32m+[m[32m        savedActivities.activities.map((item)=>{[m
             if(item.day===today.getDate() && item.month===today.getMonth() && item.year===today.getFullYear()){[m
                 list=[...list,item];[m
             }[m
[36m@@ -35,7 +35,7 @@[m [mfunction Home (){[m
         list.map(item=>{[m
             [m
             dispatch({[m
[31m-                type:"ADD_TODAY",[m
[32m+[m[32m                type:"ADD_DAY1",[m
                 item:{[m
                     id:item.id,[m
                     name:item.name,[m
[36m@@ -52,7 +52,7 @@[m [mfunction Home (){[m
         //tomorrow[m
         list=[];[m
         today.setDate(today.getDate() + 1);[m
[31m-        savedActivities.activity.map((item)=>{[m
[32m+[m[32m        savedActivities.activities.map((item)=>{[m
             if(item.day===today.getDate() && item.month===today.getMonth() && item.year===today.getFullYear()){[m
                 list=[...list,item];[m
             }[m
[36m@@ -60,7 +60,7 @@[m [mfunction Home (){[m
         list.map(item=>{[m
             [m
             dispatch({[m
[31m-                type:"ADD_TOMORROW",[m
[32m+[m[32m                type:"ADD_DAY2",[m
                 item:{[m
                     id:item.id,[m
                     name:item.name,[m
[36m@@ -82,94 +82,110 @@[m [mfunction Home (){[m
         [m
     },[]);[m
     const handleClock=(listLenght,plus)=>{[m
[31m-        if(loading===true){[m
[32m+[m[32m        if(loading===true || listLenght===undefined){[m
             return(<p>Cargando...</p>)[m
[31m-        }else{[m
[32m+[m[32m        }else {[m
             let date = new Date();[m
             date.setDate(date.getDate()+plus);[m
             return([m
                 <Clock [m
[31m-                    activities={listLenght}[m
[32m+[m[32m                    activities={listLenght.length}[m
                     time={date}[m
                 >[m
                 </Clock>[m
             )[m
         }[m
     }[m
[32m+[m
[32m+[m[32m    const HandleMap = (day)=>{[m
[32m+[m[32m        if(day!==undefined && loading===false){[m
[32m+[m[32m            return day.map(item=>{[m
[32m+[m[32m            //console.log(item.minutes);[m
[32m+[m[32m                return([m
[32m+[m[32m                <Activity[m[41m [m
[32m+[m[32m                    key ={item.id}[m[41m [m
[32m+[m[32m                    day={item.day}[m
[32m+[m[32m                    id={item.id}[m
[32m+[m[32m                    minutes={item.minutes}[m
[32m+[m[32m                    kind ={item.kind}[m[41m [m
[32m+[m[32m                    hour={item.hour}[m[41m [m
[32m+[m[32m                    name={item.name}[m[41m [m
[32m+[m[32m                    note={item.note}[m
[32m+[m[32m                    number={item.number}>[m
[32m+[m[32m                </Activity>[m
[32m+[m[32m                )[m
[32m+[m[32m            })[m
[32m+[m[32m        }[m[41m    [m
[32m+[m[32m    }[m
     [m
     return([m
         <div className="a">[m
[31m-            <div>[m
[31m-                <NavBar ></NavBar>[m
[31m-                {[m
[31m-                    handleClock(savedActivities.today.length,0)[m
[31m-                }[m
[31m-            </div>[m
[32m+[m[32m            <NavBar ></NavBar>[m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day1,0)[m
[32m+[m[32m            }[m
             <div id="activities" className="activities" >[m
                 {[m
[31m-                [m
[31m-                savedActivities.today.map(item=>{[m
[31m-                    //console.log(item.minutes);[m
[31m-                    return([m
[31m-                    <Activity [m
[31m-                        key ={item.id} [m
[31m-                        day={item.day}[m
[31m-                        id={item.id}[m
[31m-                        minutes={item.minutes}[m
[31m-                        kind ={item.kind} [m
[31m-                        hour={item.hour} [m
[31m-                        name={item.name} [m
[31m-                        note={item.note}[m
[31m-                        number={item.number}>[m
[31m-                    </Activity>[m
[31m-                    )[m
[31m-                })}[m
[31m-                [m
[31m-                [m
[31m-                    [m
[31m-                </div>[m
[32m+[m[32m                    HandleMap(savedActivities.day1)[m
[32m+[m[32m                }[m[41m        [m
[32m+[m[32m            </div>[m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day2,1)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,1)[m
[32m+[m[32m                    HandleMap(savedActivities.day2)[m
                 }[m
[31m-                <div className="activities">[m
[31m-                    {[m
[31m-                    [m
[31m-                    savedActivities.tomorrow.map(item=>{[m
[31m-                        [m
[31m-                        return([m
[31m-                            <Activity [m
[31m-                                key ={item.id} [m
[31m-                                day={item.day}[m
[31m-                                id={item.id}[m
[31m-                                minutes={item.minutes}[m
[31m-                                kind ={item.kind} [m
[31m-                                hour={item.hour} [m
[31m-                                name={item.name} [m
[31m-                                note={item.note}[m
[31m-                                number={item.number}>[m
[31m-                            </Activity>[m
[31m-                        )[m
[31m-                    })}[m
[31m-                </div>[m
[32m+[m[32m            </div>[m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day3,2)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,2)[m
[32m+[m[32m                    HandleMap(savedActivities.day3)[m
                 }[m
[32m+[m[32m            </div>[m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day4,3)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,3)[m
[32m+[m[32m                    HandleMap(savedActivities.day4)[m
                 }[m
[32m+[m[32m            </div>[m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day5,4)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,4)[m
[32m+[m[32m                    HandleMap(savedActivities.day5)[m
                 }[m
[32m+[m[32m            </div>[m[41m  [m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day6,5)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,5)[m
[31m-                }  [m
[32m+[m[32m                    HandleMap(savedActivities.day6)[m
[32m+[m[32m                }[m
[32m+[m[32m            </div>[m
[32m+[m[32m            {[m
[32m+[m[32m                    handleClock(savedActivities.day7,6)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,6)[m
[32m+[m[32m                    HandleMap(savedActivities.day7)[m
                 }[m
[32m+[m[32m            </div>[m
[32m+[m[32m            {[m
[32m+[m[32m                handleClock(savedActivities.day8,7)[m
[32m+[m[32m            }[m
[32m+[m[32m            <div className="activities">[m
                 {[m
[31m-                    handleClock(savedActivities.tomorrow.length,7)[m
[31m-                }                                             [m
[31m-            </div>        [m
[32m+[m[32m                    HandleMap(savedActivities.day8)[m
[32m+[m[32m                }[m
[32m+[m[32m            </div>[m[41m                                      [m
[32m+[m[32m        </div>[m[41m        [m
     );[m
     [m
 }[m
