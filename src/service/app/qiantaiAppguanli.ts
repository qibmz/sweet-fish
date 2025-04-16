/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 用户端和管理平台 （用户端每次取第一个）获取app升级列表 GET /client/appinfo/new */
export async function getAppinfoNew({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultSystemApp>('/client/appinfo/new', {
    method: 'GET',
    ...(options || {}),
  });
}
