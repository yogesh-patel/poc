/**
 * Created by synerzip on 18/02/16.
 */
import {createReducer} from '../util';
import {STORE_RECEIVED} from '../constants';

const initialState = {
    "stores": [
        {
            id: 80000030,
            name: 'QA Test Chain 80000030',
            address1: '101 JIM WRIGHT FREEWAY #81',
            city: 'Dallas',
            state: 'TX',
            zip: '76118',
            phone: '8173670081',
            faxPhone: '8179352032',
            latitude: 32.759052,
            longitude: -96.47669,
            timezoe: 'America/Chicago',
            hours:{
                'Wednesday':{
                    date:'02/17/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                },
                'Thursday':{
                    date:'02/18/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                },
                'Friday':{
                    date:'02/19/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                },
                'Saturday':{
                    date:'02/20/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                },
                'Sunday':{
                    date:'02/21/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                },
                'Monday':{
                    date:'02/21/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                },
                'Tuesday':{
                    date:'02/22/2016',
                    closed:false,
                    openTime:'6:00 AM',
                    closeTime:'8:00 PM'
                }
            }
        },
        {
            id: 8000080,
            name: 'QA Test Chain 80000081',
            address1: '101 JIM WRIGHT FREEWAY #81',
            city: 'Dallas',
            state: 'TX',
            zip: '76118',
            phone: '8173670081',
            faxPhone: '8179352032',
            latitude: 32.759052,
            longitude: -96.47669,
            timezoe: 'America/Chicago'
        },
        {
            id: 80000031,
            name: 'QA Test Chain 80000081',
            address1: '101 JIM WRIGHT FREEWAY #81',
            city: 'Dallas',
            state: 'TX',
            zip: '76118',
            phone: '8173670081',
            faxPhone: '8179352032',
            latitude: 32.759052,
            longitude: -97.47669,
            timezoe: 'America/Chicago'
        }
    ],
    'selectedStore':null
};

export default createReducer(initialState, {
    'STORE_RECEIVED': (state, payload) => {
        return Object.assign({}, state, {
            'stores': payload
        });
    },
    'STORE_SELECTED': (state, payload) => {
        return Object.assign({}, state, {
            'selectedStore': payload
        });
    },
});