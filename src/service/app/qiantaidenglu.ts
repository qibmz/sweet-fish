/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 账号密码登录 POST /client/user/login */
export async function postUserLogin({
  body,
  options,
}: {
  body: API.LoginRequestduixiang;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 验证码注册登录 POST /client/user/loginCode */
export async function postUserLoginCode({
  body,
  options,
}: {
  body: API.LoginCodeRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/loginCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 退出登录 GET /client/user/logout */
export async function getUserLogout({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 手机号密码注册 POST /client/user/registerClientUser */
export async function postUserRegisterClientUser({
  body,
  options,
}: {
  body: API.RegisterClientUserRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResult>('/client/user/registerClientUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注销 POST /client/user/remove */
export async function postUserRemove({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postUserRemoveParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 发送短信登录验证码 GET /client/user/sendCode */
export async function getUserSendCode({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getUserSendCodeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultObject>('/client/user/sendCode', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
