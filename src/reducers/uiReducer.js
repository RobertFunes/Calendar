
const initialState ={
    loading: false,
    msgError: null
}

export const uiReducer  =(state=initialState,action)=>{
    switch (action.type) {
        case "SET_ERROR":
            
            return{
                ...state,
                msgError:action.payload
            };
        case "REM_ERROR":
            return{
                ...state,
                msgError:null
            }   
    
        default:
            return state;
    }
}