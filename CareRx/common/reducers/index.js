import {combineReducers} from 'redux';

import auth from './auth';
import app from './app';
import profiles from './profiles';
import stores from './stores';
import userProfile from './userprofile';
//import consentForms from './consentForm';
//import levelOneDashboard from './levelOneDashboard';
//import levelTwoDashboard from './levelTwoDashboard';

export default combineReducers({
    auth,
    app,
    profiles,
    stores,
    userProfile
    //app,
    //admin,
    //toast,
    //consentForms,
    //levelOneDashboard,
    //levelTwoDashboard,
    //router: routerStateReducer
});
