/**
 * Created by synerzip on 17/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import {MEDICATION_SELECTED, ALLEGY_DELETED, STORE_SELECTED, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER} from '../../constants';
import config from '../../config';
import {post} from '../common';
import {Actions} from 'react-native-router-flux'
import React, {

    AlertIOS} from 'react-native';

export function fetchPrescriptions() {
    return function (dispatch) {

        var payload = {
            '1': {
                "firstName": 'Yogesh',
                "lastName": 'Patel',
                "refillReminder": 10,
                "medicationDataList": [
                    {
                        rxNumber: 'Rx1234-1234-1234',
                        name: 'Crosin 8M1',
                        refillRemaining: '12',
                        doctorName: 'Dr. A J Kalam',
                        doctorPhone: '123-123-1234',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Will call Ready',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        txFields: [
                            {
                                lastFilled: '12 Jan 2016',
                                cost: '$20',
                                discount: '$2',
                                fillQty: 12,
                                dispenseDrugName: 'ABC 123'
                            },
                            {
                                lastFilled: '15 Jan 2016',
                                cost: '$20',
                                discount: '$2',
                                fillQty: 12,
                                dispenseDrugName: 'ABC 123'
                            }
                        ]
                    },
                    {
                        rxNumber: 'Rx1111',
                        name: 'Crosin 8M2',
                        lastFilled: '22 Jan 2016',
                        refillRemaining: '22',
                        doctorName: 'Dr. A J Kalam',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20',
                        discount: '$2'
                    },
                    {
                        rxNumber: 'Rx2222',
                        name: 'Crosin 8M3',
                        lastFilled: '12 Jan 2016',
                        refillRemaining: '12',
                        doctorName: 'Dr. A J Kalam',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx3333',
                        name: 'Crosin 8M1',
                        lastFilled: '22 Jan 2016',
                        refillRemaining: '22',
                        doctorName: 'Dr. Y Patel',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx4234',
                        name: 'Crosin 8M2',
                        lastFilled: '12 Jan 2016',
                        refillRemaining: '12',
                        doctorName: 'Dr. Y Patel',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx5555',
                        name: 'Crosin 8M3',
                        lastFilled: '22 Jan 2016',
                        refillRemaining: '22',
                        doctorName: 'Dr. Y Patel',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx1236',
                        name: 'Crosin 8M',
                        lastFilled: '12 Jan 2016',
                        refillRemaining: '12',
                        doctorName: 'Dr. Y Patel',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx1117',
                        name: 'Crosin 8M5',
                        lastFilled: '22 Jan 2016',
                        refillRemaining: '22',
                        doctorName: 'Dr. Abhu Patel',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx2228',
                        name: 'Crosin 8M5',
                        lastFilled: '12 Jan 2016',
                        refillRemaining: '12',
                        doctorName: 'Dr. Patel',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx3339',
                        name: 'Crosin 8M56',
                        lastFilled: '22 Jan 2016',
                        refillRemaining: '22',
                        doctorName: 'Dr. PDX',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Yes',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        cost: '$20'
                    },
                    {
                        rxNumber: 'Rx1210',
                        name: 'Crosin 8M',
                        refillRemaining: '12',
                        doctorName: 'Dr. PDX',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'Available for Refill',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        txFields: [
                            {
                                lastFilled: '12 Jan 2016',
                                cost: '$20',
                                discount: '$2',
                                fillQty: 12,
                                dispenseDrugName: 'ABC 123'
                            },
                            {
                                lastFilled: '12 Jan 2016',
                                cost: '$20',
                                discount: '$2',
                                fillQty: 12,
                                dispenseDrugName: 'ABC 123'
                            }
                        ]

                    },
                    {
                        rxNumber: 'Rx5511',
                        name: 'Crosin 8M',
                        refillRemaining: '22',
                        doctorName: 'Dr. PDX',
                        expirationDate: '12 Jan 2016',
                        writtenDate: '12 Jan 2016',
                        status: 'In Progress',
                        prescribedQty: 12,
                        qunatityRemaining: 12,
                        refillsRemaining: 12,
                        store: 'T1, PQR ABC, Houston, TX',
                        dosage: 'TAKE ONE TABLET BY MOUTH',
                        txFields: [
                            {
                                lastFilled: '12 Jan 2016',
                                cost: '$20',
                                discount: '$2',
                                fillQty: 12,
                                dispenseDrugName: 'ABC 123'
                            },
                            {
                                lastFilled: '12 Jan 2016',
                                cost: '$20',
                                discount: '$2',
                                fillQty: 12,
                                dispenseDrugName: 'ABC 123'
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


        //var CHAIN_ID = 716;
        dispatch({type: 'FETCHING_PRESCRIPTION'});

        var endpoint = "/PatientService";

        var requestParams = "CHAIN_ID=" + config.CHAIN_ID + "&FLOW_POS=317&WebLogicSession=" + config.loginToken;

        post(endpoint, requestParams).then(response=> {
            console.log(response);
            if (response.XmlMessage.PatientResponse.status && response.XmlMessage.PatientResponse.status._code == '-2') {
                dispatch({type: 'ACCOUNT_ACTIVATION_NEEDED'});
            } else {


                console.log("PatientService");
                console.log(response);
                var patientData = response.XmlMessage.PatientResponse.patient;
                console.log(patientData);
                var UIPatientData = {};
                var refillCount = 0;
                UIPatientData.firstName = patientData.firstnm;
                UIPatientData.lastName = patientData.lastnm;
                UIPatientData.medicationDataList = [];
                UIPatientData.allergies = [];
                if (patientData.rxfile && Array.isArray(patientData.rxfile)) {
                    patientData.rxfile.forEach(function (element) {
                        let tempObj = {};
                        if (element.refrem > 0 && returnDate(element.expire) > new Date()) {
                            refillCount = refillCount + 1;
                        }

                        tempObj.rxNumber = element.rxnum;
                        tempObj.name = element.RxAddendum.prescDrugName;
                        tempObj.refillRemaining = element.rxnum;
                        tempObj.expirationDate = element.expire;
                        tempObj.writtenDate = element.first;
                        tempObj.status = element.status;
                        tempObj.prescribedQty = element.quantity;
                        tempObj.refillsRemaining = element.refrem;
                        tempObj.doctorName = element.RxAddendum.docName;
                        tempObj.doctorPhone = element.RxAddendum.docPhone;
                        tempObj.store = element.storeNCPDP;
                        tempObj.dosage = element.RxAddendum.sigText;
                        tempObj.qunatityRemaining = element.left;
                        let tempTx = [];
                        tempObj.txFields = tempTx;

                        if (element.txfile == null || element.txfile == "") // It could be blank
                        {
                            tempTx.push({});
                        }
                        else {
                            if (Array.isArray(element.txfile)) {
                                element.txfile.forEach(function (tx) {
                                    let tempTxObj = {};
                                    tempTxObj.dispenseDrugName = tx.TxAddendum.dispDrugName;
                                    tempTxObj.cost = tx.cost;
                                    tempTxObj.txNumber = tx.txnum;
                                    tempTxObj.discount = tx.discount;
                                    tempTxObj.lastFilled = tx.filled;
                                    tempTxObj.fillQty = tx.quantity;
                                    tempTx.push(tempTxObj);
                                });
                            }
                            else {
                                let tempTxObj = {};
                                tempTxObj.dispenseDrugName = element.txfile.dispDrugName;
                                tempTxObj.cost = element.txfile.cost;
                                tempTxObj.txNumber = element.txfile.txnum;
                                tempTxObj.discount = element.txfile.discount;
                                tempTxObj.lastFilled = element.txfile.filled;
                                tempTxObj.fillQty = element.txfile.quantity;
                                tempTx.push(tempTxObj);
                            }
                        }

                        UIPatientData.medicationDataList.push(tempObj);

                    });

                }else if(patientData.rxfile){
                    var element = patientData.rxfile;
                    let tempObj = {};
                    if (element.refrem > 0 && returnDate(element.expire) > new Date()) {
                        refillCount = refillCount + 1;
                    }

                    tempObj.rxNumber = element.rxnum;
                    tempObj.name = element.RxAddendum.prescDrugName;
                    tempObj.refillRemaining = element.rxnum;
                    tempObj.expirationDate = element.expire;
                    tempObj.writtenDate = element.first;
                    tempObj.status = element.status;
                    tempObj.prescribedQty = element.quantity;
                    tempObj.refillsRemaining = element.refrem;
                    tempObj.doctorName = element.RxAddendum.docName;
                    tempObj.doctorPhone = element.RxAddendum.docPhone;
                    tempObj.store = element.storeNCPDP;
                    tempObj.dosage = element.RxAddendum.sigText;
                    tempObj.qunatityRemaining = element.left;
                    let tempTx = [];
                    tempObj.txFields = tempTx;

                    if (element.txfile == null || element.txfile == "") // It could be blank
                    {
                        tempTx.push({});
                    }
                    else {
                        if (Array.isArray(element.txfile)) {
                            element.txfile.forEach(function (tx) {
                                let tempTxObj = {};
                                tempTxObj.dispenseDrugName = tx.TxAddendum.dispDrugName;
                                tempTxObj.cost = tx.cost;
                                tempTxObj.txNumber = tx.txnum;
                                tempTxObj.discount = tx.discount;
                                tempTxObj.lastFilled = tx.filled;
                                tempTxObj.fillQty = tx.quantity;
                                tempTx.push(tempTxObj);
                            });
                        }
                        else {
                            let tempTxObj = {};
                            tempTxObj.dispenseDrugName = element.txfile.dispDrugName;
                            tempTxObj.cost = element.txfile.cost;
                            tempTxObj.txNumber = element.txfile.txnum;
                            tempTxObj.discount = element.txfile.discount;
                            tempTxObj.lastFilled = element.txfile.filled;
                            tempTxObj.fillQty = element.txfile.quantity;
                            tempTx.push(tempTxObj);
                        }
                    }

                    UIPatientData.medicationDataList.push(tempObj);
                }

                if (patientData.pallergy && Array.isArray(patientData.pallergy)) {
                    patientData.pallergy.forEach(function (allergy) {
                        let tempAllergy = {};
                        tempAllergy.accode = allergy.accode;
                        tempAllergy.DeleteAllergy = allergy.DeleteAllergy;
                        tempAllergy.Description = getAllergyDes(allergy.accode);
                        UIPatientData.allergies.push(tempAllergy);
                    });
                }else if(patientData.pallergy){
                    let tempAllergy = {};
                    tempAllergy.accode = patientData.pallergy.accode;
                    tempAllergy.DeleteAllergy = patientData.pallergy.DeleteAllergy;
                    tempAllergy.Description = getAllergyDes(patientData.pallergy.accode);
                    UIPatientData.allergies.push(tempAllergy);
                }


                console.log("refille reminder value is " + refillCount)
                UIPatientData.refillReminder = refillCount;

                console.log(UIPatientData);
                dispatch({type: 'PRESCRIPTION_DATA_RECEIVED', payload: UIPatientData})
                Actions.dashboard();
            }
        });


    }
}


function getAllergyDes(accode) {
    let map = new Map();
    map.set('513', 'Hydrocod, Morph, Cod,Etc.');
    map.set('45', 'Egg Protein Products');
    map.set('010', 'Pyridoxine (Vit. B6)');

    if (map.has(accode)) {
        return map.get(accode);
    }
    return 'ABC allergy';
}

function returnDate(date) {
    if (date != null && date != "") {
        var parts = date.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]); // year , month  , date
    }
    return new Date();
}

export function medicationSelected(selectedData) {
    return {
        type: 'MEDICATION_SELECTED',
        payload: selectedData
    }
}

export function allergySelected(selectedData) {
    return {
        type: 'ALLERGY_SELECTED',
        payload: selectedData
    }
}

export function onStoreSelected(selectedData) {
    return {
        type: 'STORE_SELECTED',
        payload: selectedData
    }
}

export function onProfilePicCaptured(photoPath) {
    return {
        type: 'PROFILE_PIC_CHANGED',
        payload: photoPath
    }
}

export function onDurationSelected(data) {
    return {
    type: 'PDC_DURATION_SELECTED',
    payload: data
    }
}

export function allergyDeleted(selectedData){
    return {
        type:'ALLERGY_DELETED',
        payload:selectedData
    }
}

export function onPDCDone() {
    return {
        type: 'PDC_DURATION_SUBMITTED'
    }
}

