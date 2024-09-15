import { StartupConstants } from '../Actions/ConstantsAction';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const StartupReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case StartupConstants.getAllStartups_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case StartupConstants.getAllStartups_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case StartupConstants.getAllStartups_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default StartupReducer;