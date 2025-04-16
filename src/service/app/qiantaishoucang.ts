/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 添加/取消  收藏产品 添加/取消  收藏产品 GET /client/collect/product/${param0}/${param1} */
export async function getCollectProduct({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCollectProductParams;
  options?: CustomRequestOptions;
}) {
  const { productId: param0, flag: param1, ...queryParams } = params;

  return request<API.CommonResultBoolean>(
    `/client/collect/product/${param0}/${param1}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 用户获取商品收藏列表 用户获取商品收藏列表 GET /client/collect/product/list */
export async function getProductList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageUserRelationResponseduixiang>(
    '/client/collect/product/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
