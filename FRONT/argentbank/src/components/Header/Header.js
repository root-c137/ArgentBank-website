
import  argentBankLogo from '../../img/argentBankLogo.png';
import './Header.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../actions/user.action";

export const Header = () =>
{
    const State = useSelector((state) => state.userReducer );
    const Dispatch = useDispatch();
    const Navigate = useNavigate();

    return(
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>

                    <Link to={'sign-in'} className="main-nav-item">
                        <>
                            <i className="fa fa-user-circle"></i>
                            {State.username}
                        </>
                    </Link>

                    {State.token ?
                        <a  onClick={() => {
                            Dispatch(logOut());
                            Navigate('/')
                        }}
                            className="main-nav-item">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Sign Out
                        </a>

                        :

                        <Link  to={'sign-in'} className="main-nav-item">
                            Sign In
                        </Link>
                    }


                </div>
            </nav>
        </header>
    )
}