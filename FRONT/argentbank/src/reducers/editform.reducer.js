import {OPENCLOSE} from "../actions/editform.action";

const initialState = {isOpen : false};
export const editFormReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case OPENCLOSE :
        {
            return {...state, isOpen: !state.isOpen};
        }
        default : return state;
    }

}