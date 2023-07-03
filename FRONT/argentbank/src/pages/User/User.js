
import './User.css';
import {Account} from "../../components/Account/Account";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GET_PROFILE, getProfile} from "../../actions/user.action";
import {EditForm} from "../../components/EditForm/EditForm";
import {OpenClose} from "../../actions/editform.action";

export const User = () =>
{

    const Dispatch = useDispatch();
    const EditFormState = useSelector((state) => state.editFormReducer);
    const UserState = useSelector((state) => state.userReducer);



    useEffect(() =>
    {
        if(localStorage.getItem('token') && !localStorage.getItem('firstName') ){
            console.log('yes');
            Dispatch(getProfile());
        }
    });


    return(
        <main className="main bg-dark">
            <div className="header">
                {EditFormState.isOpen ? <EditForm /> :

                <>
                    <h1>Welcome back<br/>{UserState.firstName} {UserState.lastName}!</h1>
                    <button className="edit-button" onClick={() => {
                    Dispatch(OpenClose() );
                    }}>Edit Name</button>
                </>
            }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account />
            <Account />
            <Account />

        </main>
    )
}
