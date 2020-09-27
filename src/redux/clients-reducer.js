const ADD_CLIENT = 'ADD-CLIENT';



const initialState = {
    users: [
         {name: 'ktoto', surname: 'da', gender: 'male', loyalty: 'card', card: '32947983470', registrationDate: '12.02.1995'},
         {name: 'yds', surname: 'dsf', gender: 'gender', loyalty: 'loyalty', registrationDate: '11.07.2001'},
         {name: 'vasya', surname: 'fs', gender: 'female', loyalty: 'not available',  registrationDate: '22.02.2003'},
     ]
}

const clientsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CLIENT:
            console.log(action.newClient)
            return {
                ...state,
                users: [...state.users, action.newClient]
    }    
        default:
            return state;
    }

}

export const addClientAC = (newClient) => 
    ({type: ADD_CLIENT , newClient})

export default clientsReducer;