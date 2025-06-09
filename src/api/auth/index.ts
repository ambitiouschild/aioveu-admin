import request from "@/utils/request";
import { AxiosPromise } from "axios";
import { CaptchaResult, LoginData, LoginResult } from "./types";

/**
 * @Description: TODO   登录API
 * @Param:  null
 * @Return: null
 * @Author: 雒世松
 * @Email: ambitiouschild@qq.com
 * @Date:  2025-06-09 15:35:46
 * @LastEditors: 雒世松
 * @LastEditTime: 2025-06-09 15:35:46
 */

export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("captchaId", data.captchaId as string);
  formData.append("captchaCode", data.captchaCode as string);
  formData.append("grant_type", "password");
  return request({
    url: "/aioveu-auth/oauth2/token",
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Basic bWFsbC1hZG1pbjoxMjM0NTY=", // 客户端信息Base64明文：aioveu-admin:123456
    },
  });
}

/**
 * 获取验证码
 */
export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: "/aioveu-auth/api/v1/auth/captcha",
    method: "get",
  });
}

/**
 * 注销API
 */
export function logoutApi() {
  return request({
    url: "/aioveu-system/api/v1/users/logout",
    method: "delete",
  });
}
