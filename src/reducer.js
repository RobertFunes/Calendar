export const initialState= {
    activities: [],
    day1:[],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: [],
    day8: []
}

const reducer =(state, action)=>{
    //console.log(state);
    switch(action.type){
        case "ADD_ACTIVITY":
            
            return{
                ...state,
                activities: [...state.activities, action.item]
            };
        case "DEL_LIST":
            return{
                ...state,
                day1:[],
                day2: [],
                day3: [],
                day4: [],
                day5: [],
                day6: [],
                day7: [],
                day8: []
            };
        case "ADD_DAY1":
            return{
                ...state,
                day1: [...state.day1 ,action.item]
            }; 
        case "ADD_DAY2":
            return{
                ...state,
                day2: [...state.day2 ,action.item]
            };

        case "DELETE":
            //if(state.activities!==undefined){
                return{
                    ...state,
                    activities: state.activities.filter((e)=>e.id!==action.item.id),             
                //}
            }

        default:
            return state;
    }
    
}

export default reducer;