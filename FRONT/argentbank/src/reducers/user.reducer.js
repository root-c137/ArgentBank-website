import {GET_PROFILE, LOG_OUT, LOGIN, UPDATE_USERNAME} from "../actions/user.action";


const initialState = {
    "username" : localStorage.getItem('userName'),
    "firstName" : localStorage.getItem('firstName'),
    "lastName" : localStorage.getItem('lastName'),
    "email" : localStorage.getItem('email'),
    "token" : localStorage.getItem('token'),
    "error" : null
}

export const userReducer = (state = initialState, action) => {

    switch (action.type)
    {
        case LOGIN :
        {
            const Data = action.payload;
            if(Data.status === 200)
            {
                localStorage.setItem('token', action.payload.body.token);
                return {...state, token: action.payload.body.token, error: null};
            }
            else
                return {...state, error : Data.message}
        }
        case GET_PROFILE :
        {
            console.log('getprofile');
            localStorage.setItem('firstName', action.payload.body.firstName);
            localStorage.setItem('lastName', action.payload.body.lastName);
            localStorage.setItem('userName', action.payload.body.userName);
            localStorage.setItem('email', action.payload.body.email);
            return {...state, firstName : action.payload.body.firstName};
        }
        case UPDATE_USERNAME :
        {
            console.log(action.payload);
            localStorage.setItem('userName', action.payload.body.userName);
            return {...state, username: action.payload.body.userName};
        }
        case LOG_OUT :
        {
            localStorage.clear();
            return {...state, token: '', username: ''}
        }
        default : return state;
    }
}
