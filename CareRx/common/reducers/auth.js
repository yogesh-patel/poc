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
    "loginFail":false,
    "loginFailMessage":"",
    "accountActivationNeed":false,
    "invalidPin":false
};

export default createReducer(initialState, {
    'LOGIN_USER_REQUEST': state => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            "loginFail":false,
            "loginFailMessage":""
        });
    },
    'ACCOUNT_ACTIVATION_NEEDED': state => {
        return Object.assign({}, state, {
            "accountActivationNeed":true,
            "invalidPin":false
        });
    },
    'ACCOUNT_ACTIVATION_DONE': state => {
        return Object.assign({}, state, {
            "accountActivationNeed":false,
            "invalidPin":false
        });
    },
    'PRESCRIPTION_DATA_RECEIVED':state => {
        return Object.assign({}, state, {
            "accountActivationNeed":false,
            "invalidPin":false
        });
    },
    'INVALID_PIN': state => {
        return Object.assign({}, state, {
            "accountActivationNeed":false,
            "invalidPin":true
        });
    },
    'RESET_INVALID_PIN': state => {
        return Object.assign({}, state, {
            "accountActivationNeed":false,
            "invalidPin":false
        });
    },
    'LOGIN_USER_SUCCESS': state => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated':true
        });
    },
    'LOGIN_USER_FAILED': (state, payload) => {
        return Object.assign({}, state, {
            "loginFail":true,
            "loginFailMessage":payload.message
        });
    },
    'REMOVE_LOGIN_FAILED':(state, payload) => {
        return Object.assign({}, state, {
            "loginFail":false,
            "loginFailMessage":''
        });
    },
});