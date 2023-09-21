//Actions
import {message} from "antd";

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

const initState = {
    data: [],
    message: ""
};

const reducer = (state = initState, action) => {
    switch (action.type) {

        //This is for Button 1, pass list thought redux saga
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                message: "Tree item fetched!"
            };


        // //Error message return
        case FETCH_DATA_FAILED:
            return {
                ...state,
                message: "Something went wrong, please try to fetch again !"
            };

        default:
            return state ;
    }
};

export default reducer;