const ADD_CLIENT = 'ADD-CLIENT';



const initialState = {
    users: [
         {name: 'Tarasenko', surname: 'Artem', gender: 'male', loyalty: 'card', card: '0960360807', registrationDate: '12.09.1997'},
         {name: 'Scarlett', surname: 'Johansson', gender: 'female', loyalty: 'not available', registrationDate: '22.11.1984'},
         {name: 'Tom', surname: 'Hardy', gender: 'male', loyalty: 'mobile app',  registrationDate: '15.09.1977'}
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