import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, ADD_SMURF, SET_ERROR } from '../actions/index';


export const initialState = {
    smurfs: [],
    isLoading: false,
    error: '',
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
               ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
            return{
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        case SET_ERROR:
            return{
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default reducer;