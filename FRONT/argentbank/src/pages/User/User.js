
import './User.css';
import {Account} from "../../components/Account/Account";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {GET_PROFILE, getProfile} from "../../actions/user.action";

export const User = () =>
{
    const Dispatch = useDispatch();
    
    useEffect(() =>
    {
        console.log('username  : ');
        if(localStorage.getItem('token') ){
            console.log('yes');
            Dispatch(getProfile());
        }
    });


    return(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account />
            <Account />
            <Account />

        </main>
    )
}
