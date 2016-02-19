/**
 * Created by synerzip on 17/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import {MEDICATION_SELECTED, ALLEGY_SELECTED, STORE_SELECTED, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../../constants';
import config from '../../config';
import {Actions} from 'react-native-router-flux'

export function fetchPrescriptions() {
    return function (dispatch) {
        var CHAIN_ID = 716;

    }
}

export function medicationSelected(selectedData){
    return {
        type:'MEDICATION_SELECTED',
        payload:selectedData
    }
}

export function allergySelected(selectedData){
    return {
        type:'ALLERGY_SELECTED',
        payload:selectedData
    }
}

export function onStoreSelected(selectedData){
    return {
        type:'STORE_SELECTED',
        payload:selectedData
    }
}

