/**
 * Created by synerzip on 17/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import config from '../../config';
import {updateAccessToken} from '../auth';

export function post(nodeURL,data) {
    //get token
    let loggedinUser = localStorage.getItem('ccmLoggedinUser');
    if (loggedinUser !== null) {
        var loggedinUserObj = JSON.parse(loggedinUser);
        return fetch(config.BASE_URL + nodeURL, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-AUTH-TOKEN': loggedinUserObj.token
            },
            body:JSON.stringify(data)

        }).then(checkHttpStatus)
            .then((response) => {
                var token = response.headers.get('X-AUTH-TOKEN');
                updateAccessToken(token);
                return parseJSON(response);
            })
            .then(result => {
                return result;
            })
            .catch(error => {
                throw error;
            })
    } else {
        dispatch(pushState(null, '/login'));
    }
}