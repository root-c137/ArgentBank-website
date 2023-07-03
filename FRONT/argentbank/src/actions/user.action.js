import {EasyFetch} from "../EasyFetch/EasyFetch";


export const LOGIN = "LOGIN";
export const GET_PROFILE = "GET_PROFILE";

export const LOG_OUT = "LOG_OUT";

export const Login = (Data) =>
{
    return (dispatch) => {
        const LoginURL = "user/login";
        const Method = "POST";

        return EasyFetch(LoginURL, Data, Method).then((res) => {
            console.log(res);
            dispatch({type : LOGIN, payload : res});
        })
    }
}

export const getProfile = () =>
{
    return (dispatch) => {
        const Url = "user/profile";
        const Method = "POST";

        return EasyFetch(Url, null, Method, localStorage.getItem('token') ).then((res) => {
            dispatch({type : GET_PROFILE, payload : res});
        })
    }
}

export const logOut = () =>
{
    return (dispatch) => {
        dispatch({type : LOG_OUT});
    }
}

