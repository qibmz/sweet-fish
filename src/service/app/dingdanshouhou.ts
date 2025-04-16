/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 申请售后 POST /client/order/after/apply */
export async function postAfterApply({
  body,
  options,
}: {
  body: API.OrderAfterApplyRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/order/after/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 取消售后 POST /client/order/after/cancel */
export async function postAfterCancel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postAfterCancelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/order/after/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 确认收货 POST /client/order/after/confirm */
export async function postAfterConfirm({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postAfterConfirmParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/order/after/confirm', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 物流轨迹 GET /client/order/after/courierLogistics */
export async function getAfterCourierLogistics({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterCourierLogisticsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCourierLogisticsResponse>(
    '/client/order/after/courierLogistics',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 售后订单详情 GET /client/order/after/info */
export async function getAfterInfo({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterInfoParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultStoreOrderAfterResponse>(
    '/client/order/after/info',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 售后订单列表 GET /client/order/after/list */
export async function getAfterList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAfterListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageStoreOrderAfterResponse>(
    '/client/order/after/list',
    {
      method: 'GET',
      params: {
        ...params,
        storeOrderAfterLqw: undefined,
        ...params['storeOrderAfterLqw'],
      },
      ...(options || {}),
    }
  );
}

/** 退货发货 POST /client/order/after/sendGoods */
export async function postAfterSendGoods({
  body,
  options,
}: {
  body: API.OrderAfterCourierRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/order/after/sendGoods', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取平台收货地址 GET /client/order/after/shopAddress */
export async function getAfterShopAddress({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultStoreOrderAfterAddressResponse>(
    '/client/order/after/shopAddress',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
