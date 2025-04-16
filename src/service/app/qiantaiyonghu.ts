/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取某个月份的签到记录 GET /client/sign/record */
export async function getSignRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSignRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListUserSignRecord>('/client/sign/record', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取签到奖励配置 GET /client/sign/setting */
export async function getSignSetting({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSignSetting>('/client/sign/setting', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 签到 POST /client/sign/today */
export async function postSignToday({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/sign/today', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取用户详情 GET /client/user/info */
export async function getUserInfo({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUser>('/client/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 换绑手机号 POST /client/user/updateBindingPhone */
export async function postUserUpdateBindingPhone({
  body,
  options,
}: {
  body: API.BindingPhoneRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/updateBindingPhone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改交易密码 POST /client/user/updatePayPassword */
export async function postUserUpdatePayPassword({
  body,
  options,
}: {
  body: API.UpdatePayPwdRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/updatePayPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 POST /client/user/updatePwd */
export async function postUserUpdatePwd({
  body,
  options,
}: {
  body: API.PasswordRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/updatePwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改用户信息 POST /client/user/updateUserInfo */
export async function postUserUpdateUserInfo({
  body,
  options,
}: {
  body: API.ClientUserUpdateRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultInteger>('/client/user/updateUserInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 校验验证码是否正确 POST /client/user/verificationCode */
export async function postUserVerificationCode({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postUserVerificationCodeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/verificationCode', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 实名认证 实名认证 POST /client/user/verified */
export async function postUserVerified({
  body,
  options,
}: {
  body: API.shimingrenzhengduixiang;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/verified', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
