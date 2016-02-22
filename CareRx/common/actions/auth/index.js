/**
 * Created by synerzip on 11/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../../constants';
import config from '../../config';
import {post} from '../common';
import {Actions} from 'react-native-router-flux'
import {fetchPrescriptions} from '../prescription';
var jsonParser = require('x2js');

export function createAccount(accountDetail) {
    return function (dispatch) {
        dispatch({type: 'CREATE_ACCOUNT_USER_REQUEST'});

        //Check Duplicate Account Name
        var requestParams = "CHAIN_ID=" + config.CHAIN_ID + "&FLOW_POS=317&STORE_ID=ALL&account" + accountDetail.accountName + "&WebLogicSession=" + config.token;

        post("/AccountNameVerifyService", requestParams).then((response)=> {
            var resCode = response.XmlMessage.AccountNameVerifyResponse.status._code;
            //console.log(response);
            if (resCode != '200') {
                dispatch({type: 'DUPLICATE_ACCOUNT_NAME'});
            } else {
                var phoneSplits = accountDetail.phoneNumber.split(' ');
                console.log(accountDetail);
                console.log("RxNumber"+ accountDetail.rxNumber);
                var createAccountParams = "CHAIN_ID=" + config.CHAIN_ID +
                    "&FLOW_POS=317&STORE_ID=ALL&accountName=" + accountDetail.accountName +
                    "&password=" + accountDetail.password +
                    "&passwordConfirmation=" + accountDetail.passwordConfirmation +
                    "&firstName=" + accountDetail.firstName +
                    "&lastName=" + accountDetail.lastName +
                    "&address1=" + accountDetail.address1 +
                    "&city=" + accountDetail.city +
                    "&state=" + 'TX' +
                    "&zipCode=" + accountDetail.zipCode +
                    "&areaCode=" + phoneSplits[0] +
                    "&prefix=" + phoneSplits[1] +
                    "&telroot=" + phoneSplits[2] +
                    "&emailAddress=" + accountDetail.email +
                    "&emailAddressConfirmation=" + accountDetail.confirmEmail +
                    "&accountOwner=ME" +
                    "&birthdate=" + accountDetail.birthDate +
                    "&ToSAccepted=" + true +
                    "&rxNumber=" + parseInt(accountDetail.rxNumber) +
                    "&selectedStoreId=" + accountDetail.selectedStoreId;

                console.log(createAccountParams);
                post("/AccountRegisterService", createAccountParams).then((createAccountResponse)=> {
                    console.log(createAccountResponse);
                    if(createAccountResponse.XmlMessage.AccountRegisterResponse.status._code == '200'){

                        dispatch(loginUser(accountDetail.accountName, accountDetail.password));

                    }else{
                        console.log(createAccountResponse);
                    }
                });
                //
            }
        });

    }
}

export function activateProfile(pin) {
    return function (dispatch) {
        dispatch({type: 'ACTIVATE_PROFILE_REQUEST'});
        var activateEndPoint = "/ActivateProfileService";
        var activateReqParams = "CHAIN_ID="+config.CHAIN_ID+"&WebLogicSession="+config.loginToken+"&Action=activate&PIN="+pin+"&FLOW_POS=317&STORE_ID=ALL";
        post(activateEndPoint,activateReqParams).
        then((activateResponse)=>{
            if(activateResponse.XmlMessage.ActivateProfileResponse.status._code == '200'){
                dispatch({type:'ACCOUNT_ACTIVATION_DONE'});
                dispatch(fetchPrescriptions());
            }else{
                dispatch({type:'INVALID_PIN'});
            }

        });

    }
}

export function resetInvalidPin(){
    return (
    {
        type:'RESET_INVALID_PIN'
    }
    )
}

export function loginUser(userName, password, redirect = "/") {
    return function (dispatch) {
        dispatch({type: 'LOGIN_USER_REQUEST'});

        var requestParams = "CHAIN_ID=" + config.CHAIN_ID + "&FLOW_POS=317&ACCOUNT_NAME=" + userName + "&ACCOUNT_PASSWORD=" + password;


        post("/AccountLoginService", requestParams).then((response)=> {

            var resCode = response.XmlMessage.AccountLoginResponse.status._code;
            config.loginToken = response.XmlMessage._WebLogicSession;
            console.log("Login Token:"+config.loginToken);
            //console.log(resCode);
            if (resCode == '200') {
                //console.log("Yogesh------"+resCode)
                post("/StoreService", "CHAIN_ID=" + config.CHAIN_ID + "&FLOW_POS=317").then(storeResponse=> {

                    //console.log(storeResponse.XmlMessage.StoreResponse.stores.storeData)
                    dispatch({
                        type: 'STORE_RECEIVED',
                        payload: storeResponse.XmlMessage.StoreResponse.stores.storeData
                    });

                    dispatch(fetchPrescriptions());
                })

            } else {
                dispatch({
                    type: 'LOGIN_USER_FAILED', payload: {
                        message: response.XmlMessage.AccountLoginResponse.status._description
                    }
                })
            }
        }).catch((error)=> {
            dispatch({
                type: 'LOGIN_USER_FAILED', payload: {
                    message: 'Fail To Login Yogesh'
                }
            })
        });


    }
}

export function removeLoginFail(){
    return ({
        type: 'REMOVE_LOGIN_FAILED'
    });
}

export function getStores() {
    return function (dispatch) {
        dispatch({type: 'FETCH_STORE_REQUEST'});
        var endpoint = "/StoreService";
        post(endpoint, "CHAIN_ID=" + config.CHAIN_ID + "&FLOW_POS=317").then(response=> {
            dispatch({type: 'STORE_RECEIVED', payload: response.XmlMessage.StoreResponse.stores.storeData});
        });
    }

}

export function showCreateAccount() {
    return function (dispatch) {

        Actions.createAccount();
    }
}

export function showStatesList() {
    return function (dispatch) {
        //dispatch({type:'CREATE_ACCOUNT_USER_REQUEST'});
        Actions.showStatesList();
    }
}

export function showCityList() {
    return function (dispatch) {
        //dispatch({type:'CREATE_ACCOUNT_USER_REQUEST'});
        Actions.showCityList();
    }
}

export function onSelectedState(newState) {
    return (
    {
        type: 'STATE_SELECTED',
        payload: newState
    }
    )
}

export function onSelectedCity(newCity) {
    return (
    {
        type: 'CITY_SELECTED',
        payload: newCity
    }
    )
}

export function onStoreSelected(selectedStore) {
    return (
    {
        type: 'STORE_SELECTED',
        payload: selectedStore
    }
    )
}

