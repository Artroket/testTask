const CHANGE_PATH = 'CHANGE-PATH';

const initialState = {
    path: '/profile'
}

const pathReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_PATH:
            return {
                ...state,
                path: action.path
    }    
        default:
            return state;
    }

}

export const changePath = (path) => 
    ({type: CHANGE_PATH , path})

export default pathReducer;