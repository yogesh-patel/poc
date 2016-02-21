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
        dispatch({type:'FETCHING_PRESCRIPTION'});


        var payload = {
            '1':{
                "firstName":'Yogesh',
                "lastName":'Patel',
                "refillReminder":10,
                "medicationDataList": [
                    {
                        rxNumber:'Rx1234-1234-1234' ,
                        name:'Crosin 8M1' ,
                        refillRemaining:'12',
                        doctorName:'Dr. A J Kalam',
                        doctorPhone:'123-123-1234',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Will call Ready',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        txFields:[
                            {
                                lastFilled:'12 Jan 2016',
                                cost:'$20',
                                discount:'$2',
                                fillQty:12,
                                dispenseDrugName:'ABC 123'
                            },
                            {
                                lastFilled:'15 Jan 2016',
                                cost:'$20',
                                discount:'$2',
                                fillQty:12,
                                dispenseDrugName:'ABC 123'
                            }
                        ]
                    },
                    {
                        rxNumber:'Rx1111' ,
                        name:'Crosin 8M2' ,
                        lastFilled:'22 Jan 2016',
                        refillRemaining:'22',
                        doctorName:'Dr. A J Kalam',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20',
                        discount:'$2'
                    },
                    {
                        rxNumber:'Rx2222' ,
                        name:'Crosin 8M3' ,
                        lastFilled:'12 Jan 2016',
                        refillRemaining:'12',
                        doctorName:'Dr. A J Kalam',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx3333' ,
                        name:'Crosin 8M1' ,
                        lastFilled:'22 Jan 2016',
                        refillRemaining:'22',
                        doctorName:'Dr. Y Patel',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx4234' ,
                        name:'Crosin 8M2' ,
                        lastFilled:'12 Jan 2016',
                        refillRemaining:'12',
                        doctorName:'Dr. Y Patel',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx5555' ,
                        name:'Crosin 8M3' ,
                        lastFilled:'22 Jan 2016',
                        refillRemaining:'22',
                        doctorName:'Dr. Y Patel',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx1236' ,
                        name:'Crosin 8M' ,
                        lastFilled:'12 Jan 2016',
                        refillRemaining:'12',
                        doctorName:'Dr. Y Patel',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx1117' ,
                        name:'Crosin 8M5' ,
                        lastFilled:'22 Jan 2016',
                        refillRemaining:'22',
                        doctorName:'Dr. Abhu Patel',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx2228' ,
                        name:'Crosin 8M5' ,
                        lastFilled:'12 Jan 2016',
                        refillRemaining:'12',
                        doctorName:'Dr. Patel',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx3339' ,
                        name:'Crosin 8M56' ,
                        lastFilled:'22 Jan 2016',
                        refillRemaining:'22',
                        doctorName:'Dr. PDX',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Yes',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        cost:'$20'
                    },
                    {
                        rxNumber:'Rx1210' ,
                        name:'Crosin 8M' ,
                        refillRemaining:'12',
                        doctorName:'Dr. PDX',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'Available for Refill',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        txFields:[
                            {
                                lastFilled:'12 Jan 2016',
                                cost:'$20',
                                discount:'$2',
                                fillQty:12,
                                dispenseDrugName:'ABC 123'
                            },
                            {
                                lastFilled:'12 Jan 2016',
                                cost:'$20',
                                discount:'$2',
                                fillQty:12,
                                dispenseDrugName:'ABC 123'
                            }
                        ]

                    },
                    {
                        rxNumber:'Rx5511' ,
                        name:'Crosin 8M' ,
                        refillRemaining:'22',
                        doctorName:'Dr. PDX',
                        expirationDate:'12 Jan 2016',
                        writtenDate:'12 Jan 2016',
                        status:'In Progress',
                        prescribedQty:12,
                        qunatityRemaining:12,
                        refillsRemaining:12,
                        store:'T1, PQR ABC, Houston, TX',
                        dosage:'TAKE ONE TABLET BY MOUTH',
                        txFields:[
                            {
                                lastFilled:'12 Jan 2016',
                                cost:'$20',
                                discount:'$2',
                                fillQty:12,
                                dispenseDrugName:'ABC 123'
                            },
                            {
                                lastFilled:'12 Jan 2016',
                                cost:'$20',
                                discount:'$2',
                                fillQty:12,
                                dispenseDrugName:'ABC 123'
                            }
                        ]
                    },


                ],
                "allergies": [
                    {
                        accode: 513,
                        DeleteAllergy: 'N',
                        Description: "Eggs or Egg-derived Products"
                    },
                    {
                        accode: 1,
                        DeleteAllergy: 'N',
                        Description: "Morphine and Related"
                    },
                    {
                        accode: 2,
                        DeleteAllergy: 'N',
                        Description: "Many, including: swollen eyes, lips, or tongue, difficulty swallowing, shortness of breath, rapid heart rate."
                    },
                    {
                        accode: 3,
                        DeleteAllergy: 'N',
                        Description: "Maculopapular or morbilliform skin eruption, and less commonly urticaria, eosinophilia, serum-sickness–like reactions, and anaphylaxis."
                    },
                ]
            }
        };
        var interval = setInterval(()=>{
            clearInterval(interval);
            dispatch({type:'PRESCRIPTION_DATA_RECEIVED',payload:payload})
            Actions.dashboard();
        },500);

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

export function onProfilePicCaptured(photoPath){
    return {
        type:'PROFILE_PIC_CHANGED',
        payload:photoPath
    }
}

export function onDurationSelected(data){
    return {
        type:'PDC_DURATION_SELECTED',
        payload:data
    }
}

export function onPDCDone(){
    return {
        type:'PDC_DURATION_SUBMITTED'
    }
}

