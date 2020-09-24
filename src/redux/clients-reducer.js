const ADD_CLIENT = 'ADD-CLIENT';
const CHANGE_LOYALTY = 'CHANGE-LOYALTY';


let initialState = {
    users: [
         {name: 'ya', surname: 'da', registrationDate: '12.02.1995'},
         {name: 'yds', surname: 'dsf', registrationDate: '11.07.2001'},
         {name: 'sf', surname: 'fs', registrationDate: '22.02.2003'},
     ],
    loyaltyProgram: 'none'
}

const clientsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CLIENT:{
            return {
                ...state,
                users: action.body,
            
        }
    }  
    case CHANGE_LOYALTY:{
        return {
            ...state,
            loyaltyProgram: action.newProgram,
        
    }
}    
        default:
            return state;
    }

}

export const addClientAC = (newClient) => 
    ({type: 'ADD-CLIENT' , newClient: newClient})

export const newProgramAC = (newProgram) => 
    ({type: 'CHANGE-LOYALTY' , newProgram: newProgram})

export default clientsReducer;