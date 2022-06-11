import axios from "axios";
import config from ".";

// Axios Configuration
const axiosInstance = axios.create({
  baseURL: config.SERVER_BASE_URL,
  // headers can be added here
});

/**
 *
 * @param {String} url endpoint to which the call has to be made
 * @param {Object} headers an object containing the headers to be sent
 * @returns axios instance of GET request
 * @author Mayank1403 <mayank1403@gmail.com>
 */
export const GET = (url, headers) =>
  axiosInstance({
    method: "get",
    url,
    headers: headers || {},
  });

/**
 *
 * @param {String} url endpoint to which the call has to be made
 * @param {Object} body an object containing the data to be sent
 * @param {Object} headers an object containing the headers to be sent
 * @returns axios instance of POST request
 * @author Mayank1403 <mayank1403@gmail.com>
 */
export const POST = (url, body, headers) =>
  axiosInstance({
    method: "post",
    url,
    headers: headers || {},
    data: body || {},
  });

/**
 *
 * @param {String} url endpoint to which the call has to be made
 * @param {Object} headers an object containing the headers to be sent
 * @returns axios instance of POST request
 * @author Mayank1403 <mayank1403@gmail.com>
 */
export const PUT = (url, headers) =>
  axiosInstance({
    method: "put",
    url,
    headers: headers || {},
  });
