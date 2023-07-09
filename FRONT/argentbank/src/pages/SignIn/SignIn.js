

import './SignIn.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Login} from "../../actions/user.action";
import {useEffect, useState} from "react";
import {Error} from "../../components/Error/Error";

export const SignIn = () =>
{
    const Dispatch = useDispatch();
    const State = useSelector((state) => state.userReducer) ;
    const [Username, setUsername] = useState(null);
    const [Pass, setPass] = useState(null);
    const Navigate = useNavigate();


    useEffect(() =>
    {
        if(State.token )
        {
            Navigate('/profile');
        }
    })

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Error Msg={State.error}/>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" onChange={(e) => setPass(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                    >Remember me</label>
                    </div>

                        <button className="sign-in-button" onClick={(e) => {e.preventDefault();
                        return Dispatch(Login({email : Username, password : Pass}))} }>Sign In</button>
                </form>
            </section>
        </main>
    );
}
