import {
    put,
    get
} from './axios';

import {
    Environment,
    Utils
} from 'common'


export class SystemApi {
    static async getSystemInfo() {
        try {
            const res = await get(`${Environment.apiHost}/api/system`);

            let ret = Utils.resolveHttpResponse(res);
            return ret;
        } catch (err) {
            return Utils.resolveHttpRejected(err);
        }
    }

    static async updateSystemInfo(information) {
        try {
            const res = await put(`${Environment.apiHost}/api/system`, information);

            let ret = Utils.resolveHttpResponse(res);
            return ret;
        } catch (err) {
            return Utils.resolveHttpRejected(err);
        }
    }
}