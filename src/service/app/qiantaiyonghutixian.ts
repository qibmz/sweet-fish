/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 提现申请 POST /client/user/extract/cash */
export async function postExtractCash({
  body,
  options,
}: {
  body: API.UserExtractRequestduixiang;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/extract/cash', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零钱包提现记录列表 GET /client/user/extract/getIntegralExtractRecord */
export async function getExtractGetIntegralExtractRecord({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getExtractGetIntegralExtractRecordParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageUserExtractduixiang>(
    '/client/user/extract/getIntegralExtractRecord',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
