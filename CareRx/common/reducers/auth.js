/**
 * Created by synerzip on 09/02/16.
 */
import {createReducer} from '../util';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../constants';

const initialState = {
    "id": null,
    "username": null,
    "name": null,
    "changePassword": null,
    "roles": null,
    "isAuthenticating": false,
    "isAuthenticated": false,
};

export default createReducer(initialState, {
    'LOGIN_USER_REQUEST': state => {
        return Object.assign({}, state, {
            'isAuthenticating': true
        });
    },
    'LOGIN_USER_SUCCESS': state => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated':true
        });
    },
});