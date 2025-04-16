/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 查询系统配置 GET /client/user/system/config */
export async function getSystemConfig({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultUserConfigResponseduixiang>(
    '/client/user/system/config',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}

/** 文件上传 POST /client/user/system/file */
export async function postSystemFile({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postSystemFileParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultFileResultVo>('/client/user/system/file', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 图片上传 POST /client/user/system/image */
export async function postSystemImage({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.postSystemImageParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultFileResultVo>('/client/user/system/image', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 客户端图片直接上传到云端 GET /client/user/system/uploadToOss */
export async function getSystemUploadToOss({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getSystemUploadToOssParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOssFormResultVo>(
    '/client/user/system/uploadToOss',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}
