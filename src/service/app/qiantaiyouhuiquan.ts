/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取优惠券广场列表 GET /client/coupon/list */
export async function getCouponList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageFrontCouponResponse>(
    '/client/coupon/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 获取商品优惠券列表 GET /client/coupon/productCouponList/${param0} */
export async function getCouponProductCouponList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponProductCouponListParams;
  options?: CustomRequestOptions;
}) {
  const { productId: param0, ...queryParams } = params;

  return request<API.CommonResultListFrontCouponResponse>(
    `/client/coupon/productCouponList/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 领取优惠券 POST /client/coupon/receive/${param0} */
export async function postCouponReceive({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postCouponReceiveParams;
  options?: CustomRequestOptions;
}) {
  const { couponId: param0, ...queryParams } = params;

  return request<API.CommonResultString>(`/client/coupon/receive/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户优惠券列表 GET /client/coupon/userList */
export async function getCouponUserList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCouponUserListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageFrontCouponUserRelationResponse>(
    '/client/coupon/userList',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
