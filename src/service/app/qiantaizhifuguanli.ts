/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 订单支付 POST /client/user/pay/payment */
export async function postPayPayment({
  body,
  options,
}: {
  body: API.OrderPayRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultObject>('/client/user/pay/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
