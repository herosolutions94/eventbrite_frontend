import {
    FETCH_PROFILE,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILED
} from '../actions/actionTypes'
const initialState = {
    isLoading: true,
    content:{},
    error:null
}
export default function (state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_PROFILE:
            return {
                ...state,
                isLoading: true,
                content: {},
            };
        case FETCH_PROFILE_SUCCESS:

            return {
                ...state,
                isLoading: false,
                content: payload,
            };
        case FETCH_PROFILE_FAILED:
            return {
                ...state,
                isLoading: false,
                content: {},
                error: payload
            };

        default:
            return state;
    }
}
