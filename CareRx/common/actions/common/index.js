/**
 * Created by synerzip on 17/02/16.
 */
import { checkHttpStatus, parseJSON } from '../../util';
import config from '../../config';

var jsonParser = require('x2js');

const  x2js = new jsonParser();

export function post(endpoint,data) {
    //get token

    return fetch(config.BASE_URL+endpoint, {
        method: 'post',

        body: data

    }).then(checkHttpStatus)
        .then((response) => {
            //var token = response.headers.get('X-AUTH-TOKEN');
            //updateAccessToken(token);
           // var json = x2js.xml2js(xmlResponse);
            return response.text()
        })
        .then(result => {

            var json = x2js.xml2js(result);
            //save token for further request
            config.token = json.XmlMessage._WebLogicSession;

           // console.log(json);
            return json;
        })
        .catch(error => {
            throw error;
        })

}