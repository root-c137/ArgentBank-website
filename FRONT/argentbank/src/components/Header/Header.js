
import  argentBankLogo from '../../img/argentBankLogo.png';
import './Header.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Header = () =>
{
    const State = useSelector((state) => state.userReducer );

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
                            {State.username}
                            <i className="fa fa-user-circle"></i>
                        </>
                        {State.token ?
                            <>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                Sing Out
                            </>

                            :
                            "Sign In"
                        }
                    </Link>
                </div>
            </nav>
        </header>
    )
}