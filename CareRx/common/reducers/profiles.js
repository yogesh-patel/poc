/**
 * Created by synerzip on 17/02/16.
 */
import {createReducer} from '../util';
import {PRESCRIPTION_DATA_RECEIVED,MEDICATION_SELECTED, ALLERGY_SELECTED} from '../constants';

const initialState = {
    'profiles':null,
    'selectedProfile':null,
    'selectedMedication':null,
    'selectedAllergy':null,
    'profilePic':null,
    'pdcDetail':null,
    'selectedDuration':null,
    'pdcValue':null
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
    'ALLERGY_SELECTED': (state, payload) => {
        return Object.assign({}, state, {
            'selectedAllergy':payload
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