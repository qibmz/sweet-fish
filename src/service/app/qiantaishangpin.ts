/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取分类 获取分类左侧导航栏 GET /client/category/leftcategory */
export async function getCategoryLeftcategory({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListCategoryTreeVo>(
    '/client/category/leftcategory',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 商品地址 GET /client/category/product/address/${param0} */
export async function getProductAddress({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductAddressParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultStoreProductAddressResponse>(
    `/client/category/product/address/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 生成商品分享链接 GET /client/category/product/createShareUrl */
export async function getProductCreateShareUrl({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductCreateShareUrlParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>(
    '/client/category/product/createShareUrl',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 商品详情 GET /client/category/product/detail/${param0} */
export async function getProductDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductDetailParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultProductDetailResponse>(
    `/client/category/product/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 商品分享 GET /client/category/product/share */
export async function getProductShare({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getProductShareParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/category/product/share', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品列表 GET /client/category/products */
export async function getCategoryProducts({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getCategoryProductsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageIndexProductResponse>(
    '/client/category/products',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
