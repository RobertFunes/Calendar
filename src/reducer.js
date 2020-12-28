export const initialState= {
    activity: [],
    today:[],
    tomorrow: []
}

const reducer =(state, action)=>{
    //console.log(state);
    switch(action.type){
        case "ADD_ACTIVITY":
            
            return{
                ...state,
                activity: [...state.activity, action.item]
            };
        case "DEL_LIST":
            return{
                ...state,
                today:[],
                tomorrow: []
            };
        case "ADD_TODAY":
            return{
                ...state,
                today: [...state.today ,action.item]
            }; 
        case "ADD_TOMORROW":
            return{
                ...state,
                tomorrow: [...state.tomorrow ,action.item]
            };

        case "DELETE":
            console.log("1",state);
            console.log(state.activity.filter((e)=>e.id!==action.item.id));
            return{
                activity: state.activity.filter((e)=>e.id!==action.item.id),             
            }
            

        default:
            return state;
    }
    
}

export default reducer;