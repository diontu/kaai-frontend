import axios, { isAxiosError } from "axios";

type Response<T> = SuccessResponse<T> | ErrorResponse<T>;

type SuccessResponse<T> = {
  status: "success";
  data: T;
};

type ErrorResponse<T> = {
  status: "error";
  data: T;
};

type Payload = { [k: string]: any };

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  responseType: "json",
});

async function baseCall<T>(
  httpMethod: "get" | "post" | "put" | "delete",
  url: string,
  payload?: Payload
): Promise<Response<T>> {
  try {
    const res = await api[httpMethod]<SuccessResponse<T>>(url, payload);
    return res.data;
  } catch (error: unknown) {
    const defaultError = { status: "error", data: error } as ErrorResponse<T>;
    if (isAxiosError<ErrorResponse<T>>(error))
      return error.response?.data ?? defaultError;
    return defaultError;
  }
}

export async function apiGet<DataType>(
  url: string
): Promise<Response<DataType>> {
  return await baseCall("get", url);
}

export async function apiPost<DataType>(
  url: string,
  payload?: Payload
): Promise<Response<DataType>> {
  return await baseCall("post", url, payload);
}

export async function apiPut<DataType>(
  url: string,
  payload?: Payload
): Promise<Response<DataType>> {
  return await baseCall("put", url, payload);
}

export async function apiDelete<DataType>(
  url: string
): Promise<Response<DataType>> {
  return await baseCall("delete", url);
}
