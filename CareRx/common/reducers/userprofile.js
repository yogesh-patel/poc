/**
 * Created by synerzip on 13/02/16.
 */
import {createReducer} from '../util';

const initialState = {
    stateList : [
        {
            id: 1,
            name: 'Texas'
        },
        {
            id: 2,
            name: 'Arizona'
        },
    ],
    citiesList : [
        {
            'Texas': [
                {
                    id: 1,
                    name: 'Austin',
                    isSelected: false
                },
                {
                    id: 2,
                    name: 'Nevada',
                    isSelected: false
                }],
            'Arizona': [
                {
                    id: 1,
                    name: 'Austin',
                    isSelected: false
                },
                {
                    id: 2,
                    name: 'Nevada',
                    isSelected: false
                }]
        }
    ],
    selectedState: null,
    selectedCitiesListOfState: null,
    selectedCity: null
};


export default createReducer(initialState, {
    'STATE_SELECTED': (state, payload) => {
        return Object.assign({}, state, {
            selectedState: payload
        });
    },
    'CITY_SELECTED': (state, payload) => {
        return Object.assign({}, state, {
            selectedCity: payload
        });
    }
});