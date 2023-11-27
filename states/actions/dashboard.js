import {
    FETCH_PROFILE,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILED
} from './actionTypes'
import Cookies from "js-cookie"
import createApiInstance from '../../helpers/api';
const api = createApiInstance();

function doObjToFormData(obj) {
    let formData = new FormData();
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) { // Check if the property exists in the object
            if (Array.isArray(obj[key])) {
                for (let i = 0; i < obj[key].length; i++) {
                    if (obj[key][i] !== undefined && obj[key][i] !== null) { // Check if the array element is defined
                        formData.append(key + "[]", JSON.stringify(obj[key][i]));
                    }
                }
            } else {
                if (typeof obj[key] == "object" && obj[key] !== null) {
                    formData.append(key, JSON.stringify(obj[key]));
                } else if (obj[key] !== undefined && obj[key] !== null) { // Check if the value is defined
                    formData.append(key, obj[key]);
                }
            }
        }
    }
    return formData;
}
export const fetchMemberData = () => (dispatch) => {

    dispatch({
        type: FETCH_PROFILE,
        payload: null
    });

    api
        .post("get-user-profile", doObjToFormData({ email: Cookies.get("email") }))
        .then(({ data }) => {
            if (data?.data?.status !== 'active') {
                window.location.href = "/verify"
            }

            dispatch({
                type: FETCH_PROFILE_SUCCESS,
                payload: data?.data
            });

        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: FETCH_PROFILE_FAILED,
                payload: error
            });
            // useRedirectInvalidToken();
        });
};