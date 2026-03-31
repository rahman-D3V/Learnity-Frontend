import axios, { type Method } from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (
  method: Method,
  url: string,
  bodyData?: unknown,
  headers?: Record<string, string>,
  params?: Record<string, string | number>,
) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ?? null,
    headers: headers ?? {},
    params: params ?? {},
  });
};
