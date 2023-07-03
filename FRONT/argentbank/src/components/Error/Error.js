
import './Error.css';


export const Error = ({Msg}) =>
{
    return(
        <div className="Error">
            <p className="ErrorMsg">{Msg}</p>
        </div>
    );
}
