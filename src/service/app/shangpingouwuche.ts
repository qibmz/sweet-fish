/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 删除 POST /client/user/cart/delete */
export async function postCartDelete({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postCartDeleteParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/cart/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页列表 GET /client/user/cart/list */
export async function getCartList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCartListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageCartInfoResponseduixiang>(
    '/client/user/cart/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 修改 POST /client/user/cart/num */
export async function postCartNum({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postCartNumParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/user/cart/num', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 购物车重选规格 POST /client/user/cart/resetcart */
export async function postCartResetcart({
  body,
  options,
}: {
  body: API.CartResetRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/cart/resetcart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增 POST /client/user/cart/save */
export async function postCartSave({
  body,
  options,
}: {
  body: API.CartRequestduixiang;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSaveCartRes>('/client/user/cart/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
