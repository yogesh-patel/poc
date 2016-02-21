/**
 * Created by synerzip on 11/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../../constants';
import config from '../../config';
import {Actions} from 'react-native-router-flux'
import {fetchPrescriptions} from '../prescription';
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

        //fetch prescriptions
        var interval = setInterval(()=>{
            clearInterval(interval);
            dispatch(fetchPrescriptions());
        },500);
    }
}

export function showCreateAccount(){
    return function (dispatch){
        dispatch({type:'CREATE_ACCOUNT_USER_REQUEST'});
        Actions.createAccount();
    }
}

export function showStatesList(){
    return function (dispatch){
        //dispatch({type:'CREATE_ACCOUNT_USER_REQUEST'});
        Actions.showStatesList();
    }
}

export function showCityList(){
    return function (dispatch){
        //dispatch({type:'CREATE_ACCOUNT_USER_REQUEST'});
        Actions.showCityList();
    }
}

export function onSelectedState(newState){
    return (
    {
        type:'STATE_SELECTED',
        payload:newState
    }
    )
}

export function onSelectedCity(newCity){
    return (
    {
        type:'CITY_SELECTED',
        payload:newCity
    }
    )
}

export function onStoreSelected(selectedStore){
    return (
    {
        type:'STORE_SELECTED',
        payload:selectedStore
    }
    )
}

export function createAccount(accountDetail){
    return function(dispatch){
        dispatch({type:'LOGIN_USER_REQUEST'});

        //Check Duplicate Account Name

        //var interval = setInterval(()=>{
        //    clearInterval(interval);
        //    dispatch({type:'DUPLICATE_ACCOUNT_NAME'});
        //},1000);


        //Send Create Account Request

        //On Success - dispatch for login
        dispatch(loginUser(accountDetail.accountName,accountDetail.password));

    }
}