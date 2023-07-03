import {useSelector} from "react-redux";
import {Navigate} from "react-router";


export const Protected = ({children}) =>
{
    const UserState = useSelector((state) => state.userReducer);
    if(UserState.token)
        return children;
    else
        return <Navigate to="/" replace />
}

