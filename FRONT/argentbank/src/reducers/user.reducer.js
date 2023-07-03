import {GET_PROFILE, LOGIN} from "../actions/user.action";


const initialState = {
    "username" : localStorage.getItem('firstName'),
    "email" : '',
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
            localStorage.setItem('firstName', action.payload.body.firstName);
            return {...state, username : action.payload.body.firstName};
        }
        default : return state;
    }
}
