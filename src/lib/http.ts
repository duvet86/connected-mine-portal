import { getToken } from "lib/sessionStorageApi";
import Log from "lib/Log";

const getJwtToken = (): string => {
  const tokenInfo = getToken();
  const token = tokenInfo && tokenInfo.token;
  if (token == null) {
    throw new Error("Missing token.");
  }

  return token;
};

const getJwtHeaders = (token: string): HeadersInit => ({
  Authorization: `Bearer ${token}`
});

const getHeader = (): HeadersInit => {
  const token = getJwtToken();

  return {
    ...getJwtHeaders(token),
    "Content-Type": "application/json",
    section: process.env.TENANT_ID!
  };
};

const handleErrors = async (response: Response) => {
  if (!response.ok) {
    const error = await response.text();
    throw { status: response.status, error: error && JSON.parse(error) };
  }

  const res = await response.text();

  try {
    return (res && JSON.parse(res)) || {};
  } catch (e) {
    Log.error("http.handleErrors", e);
    throw {
      error: e.toString(),
      status: "javascript error",
      tip: "Have you changed the BASE_URL in the constants file?"
    };
  }
};

export const getAsync = async <T>(
  url: string,
  headers: HeadersInit
): Promise<T> => {
  const response = await fetch(`${process.env.BASE_URL}/${url}`, {
    headers,
    method: "GET"
  });

  return handleErrors(response);
};

export const postAsync = async <T>(
  url: string,
  data: any,
  headers: HeadersInit
): Promise<T> => {
  const response = await fetch(`${process.env.BASE_URL}/${url}`, {
    body: JSON.stringify(data),
    headers,
    method: "POST"
  });

  return handleErrors(response);
};

export const deleteAsync = async <T>(
  url: string,
  headers: HeadersInit
): Promise<T> => {
  const response = await fetch(`${process.env.BASE_URL}/${url}`, {
    headers,
    method: "DELETE"
  });

  return handleErrors(response);
};

export const getWithJwtAsync = <T>(url: string) =>
  getAsync<T>(url, getHeader());

export const postWithJwtAsync = <T>(url: string, data?: any) =>
  postAsync<T>(url, data, getHeader());

export const deleteWithJwtAsync = <T>(url: string) =>
  deleteAsync<T>(url, getHeader());
