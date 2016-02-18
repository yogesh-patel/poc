/**
 * Created by synerzip on 11/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../../constants';
import config from '../../config';
import {Actions} from 'react-native-router-flux'
var jsonParser = require('x2js');

export function loginUser(userName, password, redirect = "/") {
    return function (dispatch) {
        dispatch({type:'LOGIN_USER_REQUEST'});

        var xmlResponse = '<XmlMessage WebLogicSession =" CVtrWGfS9hR1BFX011qLhn0fvGJyZtVm91Rnw6xXC6Q7H1JzKhyT!-696142810!1455693586800 ">'+
            '<AccountLoginResponse activated =" false ">'+
            '<status code =" 200 " description =" Login Success "/>'+
            '</AccountLoginResponse>'+
            '</XmlMessage> ';
        var x2js = new jsonParser();
        var json = x2js.xml2js(xmlResponse); //returns a string containing the JSON structure by default
        console.log(json);
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

export function setState(newState){
    return (
    {
        type:'CREATE_ACCOUNT_USER_REQUEST',
        payload:newState
    }
    )
}