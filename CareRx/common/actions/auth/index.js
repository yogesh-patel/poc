/**
 * Created by synerzip on 11/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../../constants';
import config from '../../config';
import {Actions} from 'react-native-router-flux'

export function loginUser(userName, password, redirect = "/") {
    return function (dispatch) {
        dispatch({type:'LOGIN_USER_REQUEST'});
        var interval = setInterval(()=>{
            clearInterval(interval);
            dispatch({type:'LOGIN_USER_SUCCESS'});
            Actions.dashboard();
        },1000);
    }
}

export function showCreateAccount(){
    return function (dispatch){
        dispatch({type:'CREATE_ACCOUNT_USER_REQUEST'});
        Actions.createAccount();
    }
}