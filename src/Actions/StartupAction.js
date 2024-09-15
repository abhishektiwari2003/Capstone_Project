import axios from 'axios';
import { StartupConstants } from './ConstantsAction';

export const getAllStartups = () => {
    return async (dispatch) => {
        dispatch({ type: StartupConstants.getAllStartups_REQUEST });
        const res = await axios.get("http://localhost:4000/startup/getAllStartups");
        // console.log(res);
        if (res.status === 200) {
            dispatch({
                type: StartupConstants.getAllStartups_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: StartupConstants.getAllStartups_FAILURE,
                payload: { error: res.data.error },
            });
        }
    };
};
