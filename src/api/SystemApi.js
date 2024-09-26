import { put, post, get } from "./axios";
import { Axios } from "axios";
import { Environment, Utils } from "common";

export class SystemApi {
  static async getSystemInfo(params = null) {
    try {
      const res = await get(`${Environment.apiHost}/api/tender`, {}, params);
      // console.log(res.data);
      // let ret = Utils.resolveHttpResponse(res);
      return res.data;
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async getDetailedSystemInfo(id, costPerUnit) {
    try {
      const params = costPerUnit ? { costPerUnit: costPerUnit } : null;
      const res = await get(
        `${Environment.apiHost}/api/tender/${id}`,
        {},
        params
      );
      // await Axios.
      let ret = Utils.resolveHttpResponse(res);
      return res;
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async calculate(systemInfo) {
    try {
      const res = await post(
        `${Environment.apiHost}/api/calculator/calculate`,
        systemInfo
      );
      let ret = Utils.resolveHttpResponse(res);
      return ret;
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async addSystem(systemInfo) {
    console.log("systemInfo====>", systemInfo);

    try {
      const res = await post(
        `${Environment.apiHost}/api/system/submit`,
        systemInfo
      );
      let ret = Utils.resolveHttpResponse(res);
      return ret;
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async getSiteList({ params }) {
    console.log("params===>", params);

    try {
      const res = await get(
        `${Environment.apiHost}/api/zone/site?${new URLSearchParams(
          params
        ).toString()}`
      );
      return Utils.resolveHttpResponse(res);
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async getZones() {
    try {
      const res = await get(`${Environment.apiHost}/api/zone/index`);
      return Utils.resolveHttpResponse(res);
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async getOrders(params = null) {
    try {
      const res = await get(`${Environment.apiHost}/api/order`, {}, params);
      return res.data;
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }

  static async setOrderStatus(id, data) {
    try {
      const res = await put(`${Environment.apiHost}/api/order/${id}`, data);
      return res.data;
    } catch (err) {
      return Utils.resolveHttpRejected(err);
    }
  }
}
