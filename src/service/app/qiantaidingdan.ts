/* eslint-disable */
// @ts-ignore
import request from '@/utils/request';
import { CustomRequestOptions } from '@/interceptors/request';

import * as API from './types';

/** 取消订单 GET /client/user/order/cancel */
export async function getOrderCancel({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderCancelParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultBoolean>('/client/user/order/cancel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 计算订单价格 POST /client/user/order/computed/price */
export async function postComputedPrice({
  body,
  options,
}: {
  body: API.OrderComputedPriceRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOrderInfoVo>(
    '/client/user/order/computed/price',
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

/** 确认收货 GET /client/user/order/confirm/${param0} */
export async function getOrderConfirm({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderConfirmParams;
  options?: CustomRequestOptions;
}) {
  const { orderNum: param0, ...queryParams } = params;

  return request<API.CommonResultBoolean>(
    `/client/user/order/confirm/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 物流轨迹 GET /client/user/order/courierLogistics */
export async function getOrderCourierLogistics({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderCourierLogisticsParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCourierLogisticsResponse>(
    '/client/user/order/courierLogistics',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** 创建订单 POST /client/user/order/create */
export async function postOrderCreate({
  body,
  options,
}: {
  body: API.CreateOrderRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultOrderRes>('/client/user/order/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单详情 GET /client/user/order/detail/${param0} */
export async function getOrderDetail({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderDetailParams;
  options?: CustomRequestOptions;
}) {
  const { orderNum: param0, ...queryParams } = params;

  return request<API.CommonResultOrderDetailResponse>(
    `/client/user/order/detail/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 获取订单售后方式 GET /client/user/order/getAfterType */
export async function getOrderGetAfterType({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderGetAfterTypeParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultInteger>('/client/user/order/getAfterType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单列表 GET /client/user/order/list */
export async function getOrderList({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getOrderListParams;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultCommonPageOrderDetailResponse>(
    '/client/user/order/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/**  第二步骤-加载预下单 GET /client/user/order/load/pre/${param0} */
export async function getLoadPre({
  params,
  options,
}: {
  // 叠加生成的Param类型 (非body参数openapi默认没有生成对象)
  params: API.getLoadPreParams;
  options?: CustomRequestOptions;
}) {
  const { preOrderNo: param0, ...queryParams } = params;

  return request<API.CommonResultPreOrderResponse>(
    `/client/user/order/load/pre/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    }
  );
}

/** 第一步-预下单 POST /client/user/order/pre/order */
export async function postPreOrder({
  body,
  options,
}: {
  body: API.PreOrderRequest;
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultPreOrderRes>('/client/user/order/pre/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订单数量统计 GET /client/user/order/type/num */
export async function getTypeNum({
  options,
}: {
  options?: CustomRequestOptions;
}) {
  return request<API.CommonResultStoreOrderCountItemResponse>(
    '/client/user/order/type/num',
    {
      method: 'GET',
      ...(options || {}),
    }
  );
}
