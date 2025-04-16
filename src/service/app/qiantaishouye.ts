/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 分类页图片 GET /client/homepage/categoryImage */
export async function getHomepageCategoryImage({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListHashMapStringObject>(
    '/client/homepage/categoryImage',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 根据id获取子分类和自己 GET /client/homepage/getChildByPid/${param0} */
export async function getHomepageGetChildByPid({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getHomepageGetChildByPidParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultCategoryTreeVo>(
    `/client/homepage/getChildByPid/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 组合数据列表 获取组合数据 GET /client/homepage/getGroupDataById/${param0} */
export async function getHomepageGetGroupDataById({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getHomepageGetGroupDataByIdParams;
  options?: CustomRequestOptions;
}) {
  const { id: param0, ...queryParams } = params;

  return request<API.CommonResultListHashMapStringObject>(
    `/client/homepage/getGroupDataById/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 首页数据 获取轮播图、公告 GET /client/homepage/index */
export async function getHomepageIndex({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultIndexInfoResponse>('/client/homepage/index', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 首页商品列表 GET /client/homepage/index/product/${param0} */
export async function getIndexProduct({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getIndexProductParams;
  options?: CustomRequestOptions;
}) {
  const { type: param0, ...queryParams } = params;

  return request<API.CommonResultCommonPageIndexProductResponse>(
    `/client/homepage/index/product/${param0}`,
    {
      method: 'GET',
      params: {
        ...queryParams,
      },
      ...(options || {}),
    }
  );
}

/** 精选专区轮播图 GET /client/homepage/jinXuanSliderImage */
export async function getHomepageJinXuanSliderImage({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultListHashMapStringObject>(
    '/client/homepage/jinXuanSliderImage',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 一级分类 获取一级分类 GET /client/homepage/oneLevelCategoryList/${param0} */
export async function getHomepageOneLevelCategoryList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getHomepageOneLevelCategoryListParams;
  options?: CustomRequestOptions;
}) {
  const { type: param0, ...queryParams } = params;

  return request<API.CommonResultListCategoryduixiang>(
    `/client/homepage/oneLevelCategoryList/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 隐私政策 GET /client/homepage/privacyPolicy */
export async function getHomepagePrivacyPolicy({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/homepage/privacyPolicy', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户协议 GET /client/homepage/userAgreement */
export async function getHomepageUserAgreement({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultString>('/client/homepage/userAgreement', {
    method: 'GET',
    ...(options || {}),
  });
}
