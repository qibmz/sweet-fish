/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 用户金币记录明细分页列表 GET /client/user/money/goldRecordList */
export async function getMoneyGoldRecordList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMoneyGoldRecordListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageUserMoneyRecordResponse>(
    '/client/user/money/goldRecordList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 用户积分记录明细分页列表 GET /client/user/money/integralRecordList */
export async function getMoneyIntegralRecordList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMoneyIntegralRecordListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageUserMoneyRecordResponse>(
    '/client/user/money/integralRecordList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 用户获取余额记录明细分页列表 GET /client/user/money/moneyRecordList */
export async function getMoneyMoneyRecordList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getMoneyMoneyRecordListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageUserMoneyRecordResponse>(
    '/client/user/money/moneyRecordList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
