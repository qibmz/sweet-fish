/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 获取默认地址 GET /client/user/address/default */
export async function getAddressDefault({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserAddressduixiang>(
    '/client/user/address/default',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 设置默认地址 GET /client/user/address/default/set/${param0} */
export async function getDefaultSet({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getDefaultSetParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultUserAddressduixiang>(
    `/client/user/address/default/set/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 删除 GET /client/user/address/del/${param0} */
export async function getAddressDel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressDelParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultString>(`/client/user/address/del/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 地址详情 GET /client/user/address/detail/${param0} */
export async function getAddressDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressDetailParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultUserAddressduixiang>(
    `/client/user/address/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 保存 POST /client/user/address/edit */
export async function postAddressEdit({
  body,
  options,
}: {
  body: API.UserAddressRequestduixiang;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserAddressduixiang>(
    '/client/user/address/edit',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** 获取省市区数据 GET /client/user/address/getAreaListTree */
export async function getAddressGetAreaListTree({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListSystemCityTreeVo>(
    '/client/user/address/getAreaListTree',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 列表 GET /client/user/address/list */
export async function getAddressList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getAddressListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageUserAddressduixiang>(
    '/client/user/address/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
