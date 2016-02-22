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
            'loadingMessage': 'Please Wait.'
        });
    },
    'FETCH_STORE_REQUEST': state => {
        return Object.assign({}, state, {
            'isFetching': true,
            'loadingMessage': 'Loading Stores...'
        });
    },
    'CREATE_ACCOUNT_USER_REQUEST': state => {
        return Object.assign({}, state, {
            'isFetching': true,
            'loadingMessage': 'Registering Account...'
        });
    },
    'STORE_RECEIVED': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
    'LOGIN_USER_FAILED': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
    'FETCHING_PRESCRIPTION': state => {
        return Object.assign({}, state, {
            'isFetching': true,
            'loadingMessage': 'Getting Patient Information'
        });
    },
    'ACTIVATE_PROFILE_REQUEST': state => {
        return Object.assign({}, state, {
            'isFetching': true,
            'loadingMessage': 'Activating Account...'
        });
    },
    'ACCOUNT_ACTIVATION_DONE': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
    'INVALID_PIN': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
    'PRESCRIPTION_DATA_RECEIVED': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
    'LOGIN_USER_SUCCESS': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
    'DUPLICATE_ACCOUNT_NAME': state => {
        return Object.assign({}, state, {
            'isFetching': false,
            'loadingMessage': ''
        });
    },
});