/**
 * Created by synerzip on 17/02/16.
 */
import {createReducer} from '../util';
import {PRESCRIPTION_DATA_RECEIVED,MEDICATION_SELECTED, ALLERGY_DELETED} from '../constants';

const initialState = {
    'profiles':null,
    'selectedProfile':null,
    'selectedMedication':null,
    'selectedAllergy':null,
    'profilePic':null,
    'pdcDetail':null,
    'selectedDuration':null,
    'pdcValue':null,
    "medicationDataList": [
        {
            rxNumber:'Rx1234-1234-1234' ,
            name:'Crosin 8M1' ,
            lastFilled:'12 Jan 2016',
            refillRemaining:'12',
            doctorName:'Dr. A J Kalam',
            expirationDate:'12 Jan 2016',
            writtenDate:'12 Jan 2016',
            status:'Will call Ready',
            prescribedQty:12,
            qunatityRemaining:12,
            refillsRemaining:12,
            store:'T1, PQR ABC, Houston, TX',
            dosage:'TAKE ONE TABLET BY MOUTH'
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
            cost:'$20'
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
            lastFilled:'12 Jan 2016',
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
            cost:'$20'
        },
        {
            rxNumber:'Rx5511' ,
            name:'Crosin 8M' ,
            lastFilled:'22 Jan 2016',
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
            cost:'$20'
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
    ],
    'selectedMedication':null

};

export default createReducer(initialState, {
    'PRESCRIPTION_DATA_RECEIVED': (state, payload) => {
        var profileObject = {};
        var key = payload.firstName+"-"+payload.lastName;
        profileObject[key] = payload;
        return Object.assign({}, state, {
            'profiles': profileObject,
            'selectedProfile':key
        });
    },
    'MEDICATION_SELECTED': (state, payload) => {
        return Object.assign({}, state, {
            'selectedMedication':payload
        });
    },
    'ALLERGY_DELETED': (state, payload) => {
        return Object.assign({}, state, {
            allergies: payload
        });
    },
    'PROFILE_PIC_CHANGED': (state, payload) => {
        return Object.assign({}, state, {
            'profilePic':payload
        });
    },
    'PDC_DURATION_SELECTED': (state, payload) => {
        return Object.assign({}, state, {
            'selectedDuration':payload
        });
    },
    'PDC_DURATION_SUBMITTED': (state, payload) => {
        return Object.assign({}, state, {
            'pdcValue':'65%'
        });
    },
});
