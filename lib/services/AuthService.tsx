import axios, { AxiosError, AxiosResponse } from "axios";

export const enum PasswordTypeEnum {
  PASSWORD = "password",
  TEXT = "text",
}

export interface AuthFormValues {
  emailAddress: string;
  password: string;
}

const BUDGFI_SERVICES_API = process.env.NEXT_PUBLIC_BUDGFI_SERVICES;

const AuthenticationService = {
  signUp: function ({ emailAddress: username, password }: AuthFormValues) {
    return axios.post(`${BUDGFI_SERVICES_API}/auth/signup`, {
      username,
      password,
    });
  },
  login: function({ emailAddress: username, password }: AuthFormValues) {
    return axios.post(`${BUDGFI_SERVICES_API}/auth/signin`, {
      username,
      password
    })
  }
};

export default AuthenticationService;
