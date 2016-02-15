import {combineReducers} from 'redux';

import auth from './auth';
import app from './app';
//import admin from './admin';
//import app from './app';
//import consentForms from './consentForm';
//import levelOneDashboard from './levelOneDashboard';
//import levelTwoDashboard from './levelTwoDashboard';

export default combineReducers({
    auth,
    app,
    //app,
    //admin,
    //toast,
    //consentForms,
    //levelOneDashboard,
    //levelTwoDashboard,
    //router: routerStateReducer
});
