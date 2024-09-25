import { jwtDecode } from "jwt-decode";
import { DataStore } from "./datastore";

import {
  jwtDecode
} from "jwt-decode";

export class Utils {
  static debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  static resolveHttpResponse(res) {
    if (!res) {
      return {
        ok: false,
        message: res.data.message,
        data: null,
      };
    }

    let ok = res.status >= 200 && res.status < 300;
    return {
      ok: ok,
      message: (res.data && res.data.message) || "",
      data: (res.data && res.data.data) || res.data || {},
      meta: res.meta || (res.data && res.data.meta) || {},
    };
  }

  static resolveHttpRejected(res) {
    let err;

    if (res.response && res.response.data && res.response.data.message) {
      err = res.response.data.message;
    }

    return {
      ok: false,
      message: err || "Unfortunately a technical error occurred",
      data: res.response && res.response.data,
    };
  }

  static isLoggedIn() {
    const token = DataStore.get("ACCESS_TOKEN");

    if (!token) {
      return false;
    }

    const { exp } = jwtDecode(token);

    if (exp) {
      const currentTime = Date.now() / 1000;
      return exp > currentTime;
    }

    return false;
  }

  static getLoggedInUserPermissions() {
    const token = DataStore.get("ACCESS_TOKEN");

    if (!token) {
      return [];
    }

    const { permissions } = jwtDecode(token);

    return Array.isArray(permissions) ? permissions : [];
  }

  static hasLoggedInUserPermission(permission) {
    if (!permission) {
      return false;
    }

    return Utils.getLoggedInUserPermissions().includes(permission);
  }

  static getDateFormated(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }
}
