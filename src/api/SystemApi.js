import {
	put,
	post,
	get
} from './axios';

import {
	Environment,
	Utils
} from 'common'


export class SystemApi {
	static async getSystemInfo() {
		try {
			const res = await get(`${Environment.apiHost}/api/tender`);

			let ret = Utils.resolveHttpResponse(res);
			return ret;
		} catch (err) {
			return Utils.resolveHttpRejected(err);
		}
	}

	static async getDetailedSystemInfo(id) {
		try {
			const res = await get(`${Environment.apiHost}/api/tender/${id}`);

			let ret = Utils.resolveHttpResponse(res);
			return ret;
		} catch (err) {
			return Utils.resolveHttpRejected(err);
		}
	}
	static async getCalculatedInfo(id, costPerUnit) {
		let data = {
			id, costPerUnit
		}
		console.log(data)
		try {
			const res = await post(`${Environment.apiHost}/api/calculator/invest`, {
				"id": id,
				"costPerUnit": costPerUnit
			});

			let ret = Utils.resolveHttpResponse(res);
			return ret;
		} catch (err) {
			return Utils.resolveHttpRejected(err);
		}
	}

	static async updateSystemInfo(information) {
		try {
			const res = await put(`${Environment.apiHost}/api/tender`, information);

			let ret = Utils.resolveHttpResponse(res);
			return ret;
		} catch (err) {
			return Utils.resolveHttpRejected(err);
		}
	}
}