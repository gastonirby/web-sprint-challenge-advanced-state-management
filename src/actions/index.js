import axios from 'axios';
 
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type: FETCH_START});
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                console.err(err)
                dispatch(fetchError(err))
            })
    }
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (smurf) => {
    return ({ type: FETCH_SUCCESS, payload: smurf})
}

export const fetchError = (error) => {
    return ({ type: FETCH_ERROR, payload: error})
}

export const addSmurf = (newSmurf) => {
    return ({ type: ADD_SMURF, payload: newSmurf })
}

export const setError = (error) => {
    return ({ type: SET_ERROR, payload: error})
}