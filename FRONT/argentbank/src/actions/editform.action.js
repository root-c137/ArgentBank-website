

export const OPENCLOSE = "OPENCLOSE";

export const OpenClose = () =>
{
    return (dispatch) => {
        return dispatch({type : OPENCLOSE});
    }
}
