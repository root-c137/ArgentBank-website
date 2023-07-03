

import './EditForm.scss';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateUsername} from "../../actions/user.action";
import {OpenClose} from "../../actions/editform.action";

export const EditForm = () =>
{
    const Dispatch = useDispatch();
    const [userName, setUsername] = useState(localStorage.getItem('userName') );

    return(
        <div className="EditForm">
            <h3>Edit user info</h3>
            <form className="EditForm__Form">
                <div className="FormGroup">
                    <label className="FormLabel" htmlFor="Username">User name:</label>
                    <input className="FormInput" type="text" name="Username" id="Username"
                    defaultValue={localStorage.getItem('userName') } onChange={ (e) =>
                    setUsername(e.target.value) } />
                </div>
                <div className="FormGroup">
                    <label className="FormLabel" htmlFor="FirstName">First name:</label>
                    <input className="FormInput" type="text" name="FirstName" id="FirstName"
                    defaultValue={localStorage.getItem('firstName')} readOnly/>
                </div>
                <div className="FormGroup">
                    <label className="FormLabel" htmlFor="LastName">Last name:</label>
                    <input className="FormInput" type="text" name="LastName" id="LastName"
                    defaultValue={localStorage.getItem('lastName')} readOnly/>
                </div>

                <button className="Form__Button" onClick={(e) =>
                {e.preventDefault(); Dispatch(updateUsername(userName)); Dispatch(OpenClose()); }}>Save</button>
                <button className="Form__Button" onClick={(e) => {
                    e.preventDefault(); Dispatch(OpenClose());
                }}>Cancel</button>

            </form>
        </div>
    );
}
