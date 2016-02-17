/**
 * Created by synerzip on 13/02/16.
 */
import {createReducer} from '../util';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../constants';

const initialState = {
    "isFetching": false,
    "loadingMessage": ""
};

export default createReducer(initialState, {
    'LOGIN_USER_REQUEST': state => {
        return Object.assign({}, state, {
            'isFetching': true,
            'loadingMessage':'Please Wait.'
        });
    },
    'LOGIN_USER_SUCCESS': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage':''
        });
    },
});