/* eslint-disable */
// @ts-ignore

export type BindingPhoneRequest = {
  /** 手机号 */
  newPhone: string;
  /** 验证码 */
  code: string;
  /** 验证码 */
  newCode: string;
};

export type CartInfoResponseduixiang = {
  /** 购物车表ID */
  id?: number;
  /** 商品ID */
  productId?: number;
  /** 商品属性 */
  productAttrUnique?: string;
  /** 商品数量 */
  cartNum?: number;
  /** 商品图片 */
  image?: string;
  /** 商品名称 */
  storeName?: string;
  /** 商品规格id */
  attrId?: number;
  /** 商品属性索引值 (attr_value|attr_value[|....]) */
  suk?: string;
  /** sku价格 */
  price?: number;
  /** 商品是否有效 */
  attrStatus?: boolean;
  /** sku库存 */
  stock?: number;
  /** sku会员价格 */
  vipPrice?: number;
};

export type CartRequestduixiang = {
  /** 商品ID */
  productId: number;
  /** 商品属性 -- attr 对象的id */
  productAttrUnique: string;
  /** 商品数量 */
  cartNum: number;
};

export type CartResetRequest = {
  /** 购物车id */
  id: number;
  /** 购物车数量 */
  num: number;
  /** 商品id */
  productId: number;
  /** AttrValue Id */
  unique: number;
};

export type Categoryduixiang = {
  /** 父级ID */
  pid: number;
  /** 分类名称 */
  name: string;
  /** 类型，类型，1 产品分类，2 附件分类，3 文章分类， 4 设置分类， 5 菜单分类， 6 配置分类， 7 秒杀配置 */
  type: number;
  /** 地址 */
  url?: string;
  /** 扩展字段 */
  extra?: string;
  /** 状态, 0正常，1失效 */
  status: boolean;
  /** 排序 */
  sort: number;
};

export type CategoryTreeVo = {
  id?: number;
  /** 父级ID */
  pid?: number;
  /** 路径 */
  path?: string;
  /** 分类名称 */
  name?: string;
  /** 类型，类型，1 产品分类，2 附件分类，3 文章分类， 4 设置分类， 5 菜单分类， 6 配置分类， 7 秒杀配置 */
  type?: number;
  /** 地址 */
  url?: string;
  /** 扩展字段 */
  extra?: string;
  /** 状态, 0正常，1失效 */
  status?: boolean;
  /** 排序 */
  sort?: number;
  /** 是否有子节点 */
  hasChildren?: boolean;
  child?: CategoryTreeVo[];
};

export type ClientUserUpdateRequest = {
  /** 用户昵称 */
  nickName?: string;
  /** 用户头像 */
  avatar?: string;
  /** 性别,0未知，1男，2女，3保密 */
  sex?: string;
  /** 生日 */
  birthday?: string;
  /** 城市 */
  city?: string;
};

export type CommonPageCartInfoResponseduixiang = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: CartInfoResponseduixiang[];
};

export type CommonPageFrontCouponResponse = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: FrontCouponResponse[];
};

export type CommonPageFrontCouponUserRelationResponse = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: FrontCouponUserRelationResponse[];
};

export type CommonPageIndexProductResponse = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: IndexProductResponse[];
};

export type CommonPageOrderDetailResponse = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: OrderDetailResponse[];
};

export type CommonPageStoreOrderAfterResponse = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: StoreOrderAfterResponse[];
};

export type CommonPageUserAddressduixiang = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: UserAddressduixiang[];
};

export type CommonPageUserExtractduixiang = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: UserExtractduixiang[];
};

export type CommonPageUserMoneyRecordResponse = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: UserMoneyRecordResponse[];
};

export type CommonPageUserRelationResponseduixiang = {
  page?: number;
  limit?: number;
  totalPage?: number;
  total?: number;
  list?: UserRelationResponseduixiang[];
};

export type CommonResult = {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  success?: boolean;
};

export type CommonResultBoolean = {
  code?: number;
  message?: string;
  data?: boolean;
  success?: boolean;
};

export type CommonResultCategoryTreeVo = {
  code?: number;
  message?: string;
  data?: CategoryTreeVo;
  success?: boolean;
};

export type CommonResultCommonPageCartInfoResponseduixiang = {
  code?: number;
  message?: string;
  data?: CommonPageCartInfoResponseduixiang;
  success?: boolean;
};

export type CommonResultCommonPageFrontCouponResponse = {
  code?: number;
  message?: string;
  data?: CommonPageFrontCouponResponse;
  success?: boolean;
};

export type CommonResultCommonPageFrontCouponUserRelationResponse = {
  code?: number;
  message?: string;
  data?: CommonPageFrontCouponUserRelationResponse;
  success?: boolean;
};

export type CommonResultCommonPageIndexProductResponse = {
  code?: number;
  message?: string;
  data?: CommonPageIndexProductResponse;
  success?: boolean;
};

export type CommonResultCommonPageOrderDetailResponse = {
  code?: number;
  message?: string;
  data?: CommonPageOrderDetailResponse;
  success?: boolean;
};

export type CommonResultCommonPageStoreOrderAfterResponse = {
  code?: number;
  message?: string;
  data?: CommonPageStoreOrderAfterResponse;
  success?: boolean;
};

export type CommonResultCommonPageUserAddressduixiang = {
  code?: number;
  message?: string;
  data?: CommonPageUserAddressduixiang;
  success?: boolean;
};

export type CommonResultCommonPageUserExtractduixiang = {
  code?: number;
  message?: string;
  data?: CommonPageUserExtractduixiang;
  success?: boolean;
};

export type CommonResultCommonPageUserMoneyRecordResponse = {
  code?: number;
  message?: string;
  data?: CommonPageUserMoneyRecordResponse;
  success?: boolean;
};

export type CommonResultCommonPageUserRelationResponseduixiang = {
  code?: number;
  message?: string;
  data?: CommonPageUserRelationResponseduixiang;
  success?: boolean;
};

export type CommonResultCourierLogisticsResponse = {
  code?: number;
  message?: string;
  data?: CourierLogisticsResponse;
  success?: boolean;
};

export type CommonResultFileResultVo = {
  code?: number;
  message?: string;
  data?: FileResultVo;
  success?: boolean;
};

export type CommonResultIndexInfoResponse = {
  code?: number;
  message?: string;
  data?: IndexInfoResponse;
  success?: boolean;
};

export type CommonResultInteger = {
  code?: number;
  message?: string;
  data?: number;
  success?: boolean;
};

export type CommonResultListCategoryduixiang = {
  code?: number;
  message?: string;
  data?: Categoryduixiang[];
  success?: boolean;
};

export type CommonResultListCategoryTreeVo = {
  code?: number;
  message?: string;
  data?: CategoryTreeVo[];
  success?: boolean;
};

export type CommonResultListCourierLogisticsResponse = {
  code?: number;
  message?: string;
  data?: CourierLogisticsResponse[];
  success?: boolean;
};

export type CommonResultListFrontCouponResponse = {
  code?: number;
  message?: string;
  data?: FrontCouponResponse[];
  success?: boolean;
};

export type CommonResultListHashMapStringObject = {
  code?: number;
  message?: string;
  data?: Record<string, unknown>[];
  success?: boolean;
};

export type CommonResultListSignSetting = {
  code?: number;
  message?: string;
  data?: SignSetting[];
  success?: boolean;
};

export type CommonResultListSystemCityTreeVo = {
  code?: number;
  message?: string;
  data?: SystemCityTreeVo[];
  success?: boolean;
};

export type CommonResultListUserSignRecord = {
  code?: number;
  message?: string;
  data?: UserSignRecord[];
  success?: boolean;
};

export type CommonResultObject = {
  code?: number;
  message?: string;
  data?: Record<string, unknown>;
  success?: boolean;
};

export type CommonResultOrderDetailResponse = {
  code?: number;
  message?: string;
  data?: OrderDetailResponse;
  success?: boolean;
};

export type CommonResultOrderInfoVo = {
  code?: number;
  message?: string;
  data?: OrderInfoVo;
  success?: boolean;
};

export type CommonResultOrderRes = {
  code?: number;
  message?: string;
  data?: OrderRes;
  success?: boolean;
};

export type CommonResultOssFormResultVo = {
  code?: number;
  message?: string;
  data?: OssFormResultVo;
  success?: boolean;
};

export type CommonResultPreOrderRes = {
  code?: number;
  message?: string;
  data?: PreOrderRes;
  success?: boolean;
};

export type CommonResultPreOrderResponse = {
  code?: number;
  message?: string;
  data?: PreOrderResponse;
  success?: boolean;
};

export type CommonResultProductDetailResponse = {
  code?: number;
  message?: string;
  data?: ProductDetailResponse;
  success?: boolean;
};

export type CommonResultSaveCartRes = {
  code?: number;
  message?: string;
  data?: SaveCartRes;
  success?: boolean;
};

export type CommonResultStoreOrderAfterAddressResponse = {
  code?: number;
  message?: string;
  data?: StoreOrderAfterAddressResponse;
  success?: boolean;
};

export type CommonResultStoreOrderAfterResponse = {
  code?: number;
  message?: string;
  data?: StoreOrderAfterResponse;
  success?: boolean;
};

export type CommonResultStoreOrderCountItemResponse = {
  code?: number;
  message?: string;
  data?: StoreOrderCountItemResponse;
  success?: boolean;
};

export type CommonResultStoreProductAddressResponse = {
  code?: number;
  message?: string;
  data?: StoreProductAddressResponse;
  success?: boolean;
};

export type CommonResultString = {
  code?: number;
  message?: string;
  data?: string;
  success?: boolean;
};

export type CommonResultSystemApp = {
  code?: number;
  message?: string;
  data?: SystemApp;
  success?: boolean;
};

export type CommonResultUser = {
  code?: number;
  message?: string;
  data?: User;
  success?: boolean;
};

export type CommonResultUserAddressduixiang = {
  code?: number;
  message?: string;
  data?: UserAddressduixiang;
  success?: boolean;
};

export type CommonResultUserConfigResponseduixiang = {
  code?: number;
  message?: string;
  data?: UserConfigResponseduixiang;
  success?: boolean;
};

export type CourierLogisticsResponse = {
  /** 物流公司编码 */
  cpCode?: string;
  /** 物流公司名称 */
  logisticsCompanyName?: string;
  /** 物流状态码 */
  logisticsStatus?: string;
  /** 物流状态码描述 */
  logisticsStatusDesc?: string;
  /** 快递单号 */
  mailNo?: string;
  /** 最后消息 */
  theLastMessage?: string;
  /** 最后时间 */
  theLastTime?: string;
  /** 物流公司名称 */
  logisticsTraceDetailList?: CourierLogisticsTraceDetailResponse[];
};

export type CourierLogisticsTraceDetailResponse = {
  /** 物流描述 */
  desc?: string;
  /** 物流状态码 */
  logisticsStatus?: string;
  /** 时间戳 */
  time?: number;
};

export type CreateOrderRequest = {
  /** 预下单订单号 */
  preOrderNo: string;
  /** 支付类型编号 */
  payWayId: number;
  /** 支付类型 不用传 */
  payType?: string;
  /** 支付渠道付 不用传 */
  payChannel?: string;
  /** 订单备注 */
  mark?: string;
};

export type FileResultVo = {
  fileName?: string;
  extName?: string;
  fileSize?: number;
  url?: string;
  type?: string;
};

export type FrontCouponResponse = {
  /** 优惠券id */
  id?: number;
  /** 优惠券名称 */
  name?: string;
  /** 金额 */
  amount?: number;
  /** 使用门槛；0表示无门槛 */
  minPoint?: number;
  /** 使用开始时间 */
  startTime?: string;
  /** 使用过期时间 */
  endTime?: string;
  /** 使用类型：0->全场通用；1->指定分类；2->指定商品 */
  useType?: number;
  /** 开始领取日期 */
  enableTime?: string;
};

export type FrontCouponUserRelationResponse = {
  /** id */
  id?: number;
  /** 优惠券id */
  couponId?: number;
  /** 优惠券名称 */
  name?: string;
  /** 金额 */
  amount?: number;
  /** 使用门槛；0表示无门槛 */
  minPoint?: number;
  /** 使用开始时间 */
  startTime?: string;
  /** 使用过期时间 */
  endTime?: string;
  /** 使用类型：0->全场通用；1->指定分类；2->指定商品 */
  useType?: number;
  /** 创建日期 */
  createTime?: string;
  /** 使用状态：0->未使用；1->已使用；2->已过期 */
  useStatus?: number;
  /** 商品id列表 */
  productIdList?: number[];
  /** 商品分类id列表 */
  cateIdList?: number[];
};

export type getAddressDelParams = {
  id: number;
};

export type getAddressDetailParams = {
  id: number;
};

export type getAddressListParams = {
  page?: number;
  limit?: number;
};

export type getAfterCourierLogisticsParams = {
  orderAfterNu: string;
};

export type getAfterInfoParams = {
  orderAfterNu: string;
};

export type getAfterListParams = {
  orderId?: number;
  orderAfterNu?: string;
  afterType?: number;
  /** 售后状态(-3：超时未退货关闭 -2：用户取消 -1：商家驳回 0：商家待审核 1：用户待退货 2：商家待收货/用户发货 3：商家收货/重新发货 4：用户重新收货 5：待打款/商家同意退货退款且已收到用户的退货物流 6：已完成) */
  afterStatus?: number;
  contact?: string;
  phone?: string;
  dateLimit?: string;
  uid?: number;
  supplierName?: string;
  storeOrderAfterLqw?: LambdaQueryWrapperStoreOrderAfter;
  page?: number;
  limit?: number;
};

export type getCartListParams = {
  /** 类型，true-有效商品，false-无效商品 */
  isValid: boolean;
  page?: number;
  limit?: number;
};

export type getCategoryProductsParams = {
  keyword?: string;
  cid?: number;
  priceOrder?: 'range[asc,desc]';
  salesOrder?: 'range[asc,desc]';
  isNew?: boolean;
  isBest?: boolean;
  isHot?: boolean;
  isSubsidy?: boolean;
  productType?: number;
  page?: number;
  limit?: number;
};

export type getCollectProductParams = {
  productId: number;
  flag: boolean;
};

export type getCouponListParams = {
  /** 使用类型：0->全场通用；1->指定分类；2->指定商品 */
  useType?: number;
  page?: number;
  limit?: number;
};

export type getCouponProductCouponListParams = {
  productId: number;
};

export type getCouponUserListParams = {
  /** 使用状态：0->未使用；1->已使用；2->已过期 */
  useStatus?: number;
  page?: number;
  limit?: number;
};

export type getDefaultSetParams = {
  id: number;
};

export type getExtractGetIntegralExtractRecordParams = {
  page?: number;
  limit?: number;
};

export type getHomepageGetChildByPidParams = {
  id: number;
};

export type getHomepageGetGroupDataByIdParams = {
  id: number;
};

export type getHomepageOneLevelCategoryListParams = {
  type: number;
};

export type getIndexProductParams = {
  /** 类型 【1 推荐 2 畅销品 3 、新品 4、促销单品 */
  type: number;
  page?: number;
  limit?: number;
};

export type getLoadPreParams = {
  preOrderNo: string;
};

export type getMoneyGoldRecordListParams = {
  channel?: number;
  type?: number;
  dateLimit?: string;
  page?: number;
  limit?: number;
};

export type getMoneyIntegralRecordListParams = {
  channel?: number;
  type?: number;
  dateLimit?: string;
  page?: number;
  limit?: number;
};

export type getMoneyMoneyRecordListParams = {
  channel?: number;
  type?: number;
  dateLimit?: string;
  page?: number;
  limit?: number;
};

export type getOrderCancelParams = {
  id: number;
};

export type getOrderConfirmParams = {
  orderNum: string;
};

export type getOrderCourierLogisticsParams = {
  orderNum: string;
};

export type getOrderDetailParams = {
  orderNum: string;
};

export type getOrderGetAfterTypeParams = {
  orderNum: string;
};

export type getOrderListParams = {
  /** -6 所有订单,  -10 退款过的所有订单, 1 待发货, 2 待收货, 3 待确认, 4 已完成, 5 待核销, 10 未退款, 11 退款中, 12 已退款, 13 拒绝退款 14 部分退款 */
  type: number;
  page?: number;
  limit?: number;
};

export type getProductAddressParams = {
  /** 商品id */
  id: number;
};

export type getProductCreateShareUrlParams = {
  url: string;
  productId?: number;
  encode: boolean;
};

export type getProductDetailParams = {
  /** 商品id */
  id: number;
};

export type getProductListParams = {
  page?: number;
  limit?: number;
};

export type getProductShareParams = {
  id: number;
  uid: number;
};

export type getSignRecordParams = {
  /** 年份 */
  year: number;
  /** 月份 */
  month: number;
};

export type getSystemUploadToOssParams = {
  model: string;
  pid: number;
};

export type getUserSendCodeParams = {
  /** 手机号码 */
  phone: string;
};

export type GlobalPrice = {
  freightFee?: number;
  payPrice?: number;
};

export type IndexInfoResponse = {
  /** 首页banner滚动图 */
  banner?: Record<string, unknown>[];
  /** 分类导航模块 */
  categorys?: Categoryduixiang[];
};

export type IndexProductResponse = {
  /** 商品id */
  id?: number;
  /** 商品图片 */
  image?: string;
  /** 轮播图 */
  sliderImage?: string;
  /** 商品名称 */
  storeName?: string;
  /** 商品价格 */
  price?: number;
  /** 市场价 */
  otPrice?: number;
  /** 展示图 */
  flatPattern?: string;
  /** 商品详情 */
  content?: string;
};

export type ISqlSegment = {
  sqlSegment?: string;
};

export type LambdaQueryWrapperStoreOrderAfter = {
  paramNameValuePairs?: Record<string, unknown>;
  paramAlias?: string;
  sqlComment?: string;
  sqlFirst?: string;
  entity?: StoreOrderAfter;
  expression?: MergeSegments;
  sqlSelect?: string;
  sqlSegment?: string;
  useAnnotationOrderBy?: boolean;
  emptyOfEntity?: boolean;
  emptyOfNormal?: boolean;
  emptyOfWhere?: boolean;
  targetSql?: string;
  nonEmptyOfWhere?: boolean;
  nonEmptyOfEntity?: boolean;
  nonEmptyOfNormal?: boolean;
  sqlSet?: string;
  customSqlSegment?: string;
};

export type LoginCodeRequest = {
  /** 手机号 */
  phone: string;
  /** 验证码 */
  code: string;
  /** 邀请码 */
  inviteCode?: string;
};

export type LoginRequestduixiang = {
  /** 手机号 */
  phone: string;
  /** 密码 */
  password: string;
};

export type MergeSegments = {
  normal?: ISqlSegment[];
  groupBy?: ISqlSegment[];
  having?: ISqlSegment[];
  orderBy?: ISqlSegment[];
  sqlSegment?: string;
};

export type OrderAfterApplyRequest = {
  /** 订单Id */
  orderId: number;
  /** 订单详情id */
  orderInfoId: number;
  /** 商品数量 */
  goodsAfterNumber: number;
  /** 售后类型（1：仅退款 2：退货退款） */
  afterType: number;
  /** 原因 */
  afterDesc: string;
  /** 原因说明 */
  cause?: string;
  /** 原因说明图 */
  explainPic?: string;
  /** 是否需要退货（后端用 前端不要传） */
  sendGoods?: boolean;
};

export type OrderAfterCourierRequest = {
  /** 售后单号 */
  orderAfterNu: string;
  /** 快递单号 */
  courierNu: string;
  /** 售后订单id */
  connectionId: number;
  /** 联系电话 */
  phone: string;
  /** 联系人 */
  contact: string;
  /** 收货地址 */
  address: string;
  /** 物流商品图片 */
  picture: string;
  /** 备注 */
  remark?: string;
};

export type OrderComputedPriceRequest = {
  /** 预下单订单号 */
  preOrderNo: string;
  /** 地址id */
  addressId: number;
  /** 优惠券id */
  couponId?: number;
};

export type OrderDetailResponse = {
  storeOrder?: StoreOrder;
  cartInfo?: StoreOrderInfoOldVo[];
  statusPic?: string;
  offlinePayStatus?: number;
  /** 订单id */
  id?: number;
  /** 订单号 */
  orderNum?: string;
  /** 创建时间 */
  createTime?: string;
  /** 支付状态 */
  paid?: boolean;
  /** 支付时间 */
  payTime?: string;
  /** 订单总价 */
  totalPrice?: number;
  /** 支付金额 */
  payPrice?: number;
  /** 扣减金额 */
  discountPrice?: number;
  /** 优惠券金额 */
  couponPrice?: number;
  /** 用户姓名 */
  realName?: string;
  /** 用户电话 */
  userPhone?: string;
  /** 详细地址 */
  userAddress?: string;
  /** 订单状态（0：未支付 1：待发货；2：待收货；3：待确认 4：已完成 5：待核销） */
  status?: number;
  /** 订单状态 */
  orderStatus?: string;
  /** 订单商品总数 */
  totalNum?: number;
  /** 支付邮费 */
  payPostage?: number;
  /** 0 未退款 1 申请中 2 已退款 3 退款中 */
  refundStatus?: number;
  /** 快递名称/送货人姓名 */
  deliveryName?: string;
  /** 发货类型 */
  deliveryType?: string;
  /** 快递单号/手机号 */
  deliveryId?: string;
  /** 拼团id 0没有拼团 */
  pinkId?: number;
  /** 砍价id */
  bargainId?: number;
  /** 核销码 */
  verifyCode?: string;
  /** 门店id */
  storeId?: number;
  /** 配送方式 1=快递 ，2=门店自提 */
  shippingType?: number;
  /** 活动类型 */
  activityType?: string;
  /** 订单详情对象列表 */
  orderInfoList?: OrderInfoResponse[];
  /** 发货时间 */
  deliveryTime?: string;
  /** 收货时间 */
  receiveTime?: string;
  /** 订单类型:0-普通订单，1-视频号订单 */
  type?: number;
  logistics?: CourierLogisticsResponse;
};

export type OrderInfoDetailVo = {
  productId?: number;
  cateId?: string;
  productName?: string;
  attrValueId?: number;
  image?: string;
  sku?: string;
  price?: number;
  payNum?: number;
  weight?: number;
  volume?: number;
  tempId?: number;
  giveIntegral?: number;
  productType?: number;
  cost?: number;
  isNeedDeliver?: boolean;
  discountPrice?: number;
  couponPrice?: number;
  /** 商户id */
  merId?: number;
};

export type OrderInfoResponse = {
  /** id */
  id?: number;
  /** attrId */
  attrId?: number;
  /** 商品ID */
  productId?: number;
  /** 商品数量 */
  cartNum?: number;
  /** 商品图片 */
  image?: string;
  /** 商品名称 */
  storeName?: string;
  /** 商品价格 */
  price?: number;
  /** 是否评价 */
  isReply?: number;
  /** 规格属性值 */
  sku?: string;
  /** 售后状态(-1：已关闭 0：正常无售后 1售后中 2: 等待发货 3：已发货 4：已完成) */
  afterStatus?: number;
  /** 售后数量 */
  afterNumber?: number;
};

export type OrderInfoVo = {
  /** 预下单类型（“shoppingCart”：购物车下单，“buyNow”：立即购买，”again“： 再次购买，”video“: 视频号商品下单） */
  preOrderType: string;
  /** 订单详情列表 */
  orderDetails: PreOrderDetailRequest[];
  /** 客户端类型 */
  platform: string;
  /** 下单用户id */
  uid?: number;
  /** 订单号 */
  orderNum?: string;
  /** 运费金额 */
  freightFee?: number;
  /** 商品总计金额 */
  totalFee?: number;
  /** 商品总计折扣金额 */
  discountFee?: number;
  /** 优惠券金额 */
  couponFee?: number;
  /** 订单商品数量 */
  productNum?: number;
  /** 实际支付金额 */
  payFee?: number;
  /** 收获地址Id */
  addressId?: number;
  /** 订单详情数组 */
  orderDetailList?: OrderInfoDetailVo[];
  /** 购物车编号列表(主键Id) */
  cartIdList?: number[];
  /** 预订单的类型 */
  type?: number;
  /** 商户id */
  merId?: number;
  /** 支付方式列表 */
  payWayList?: (
    | 'PAY_WAY_APP_ALIPAY'
    | 'PAY_WAY_H5_ALIPAY'
    | 'PAY_WAY_APP_WECHAT'
    | 'PAY_WAY_INTEGRAL'
    | 'PAY_WAY_MONEY'
    | 'PAY_WAY_H5_WECHAT'
    | 'PAY_WAY_MP_WECHAT'
  )[];
  freightMap?: Record<string, unknown>;
  globalOrderNum?: string;
  isLastOrder?: boolean;
  globalPriceMap?: Record<string, unknown>;
  /** 可用优惠券 */
  couponList?: FrontCouponUserRelationResponse[];
  /** 优惠券编号（选择优惠券时有值 */
  couponId?: number;
};

export type OrderPayRequest = {
  /** 订单编号 */
  orderNo: string;
  /** 全局订单号 */
  globalOrderNum?: string;
  /** 支付密码 */
  payPassword?: string;
  /** 微信授权码 小程序支付必传 */
  code?: string;
  /** 支付成功返回地址(h5支付) */
  returnUrl?: string;
};

export type OrderRes = {
  orderNum?: string;
  globalOrderNum?: string;
};

export type OssFormResultVo = {
  respMap?: Record<string, unknown>;
};

export type PairBigDecimalBigDecimal = {
  first?: number;
  second?: number;
};

export type PasswordRequest = {
  /** 密码 */
  password: string;
  /** 验证码 */
  verificationCode: string;
};

export type postAfterCancelParams = {
  orderAfterNu: string;
};

export type postAfterConfirmParams = {
  orderAfterNu: string;
};

export type postCartDeleteParams = {
  ids: number[];
};

export type postCartNumParams = {
  id: number;
  number: number;
};

export type postCouponReceiveParams = {
  couponId: number;
};

export type postSystemFileParams = {
  multipart: string;
  model: string;
  pid: number;
};

export type postSystemImageParams = {
  multipart: string;
  /** 模块 用户user,商品product,微信wechat,news文章 */
  model: string;
};

export type postUserRemoveParams = {
  code: string;
};

export type postUserVerificationCodeParams = {
  code: string;
};

export type PreOrderDetailRequest = {
  /** 购物车编号，购物车预下单时必填 */
  shoppingCartId?: number;
  /** 商品id（立即购买必填） */
  productId?: number;
  /** 商品规格属性id（立即购买、活动购买必填） */
  attrValueId?: number;
  /** 商品数量（立即购买、活动购买必填） */
  productNum?: number;
};

export type PreOrderRequest = {
  /** 预下单类型（“shoppingCart”：购物车下单，“buyNow”：立即购买，”again“： 再次购买，”video“: 视频号商品下单） */
  preOrderType: string;
  /** 订单详情列表 */
  orderDetails: PreOrderDetailRequest[];
  /** 客户端类型 */
  platform: string;
};

export type PreOrderRes = {
  preOrderNo?: string;
};

export type PreOrderResponse = {
  /** 预下单订单号 */
  preOrderNo?: string;
  orderInfoVo?: OrderInfoVo;
};

export type ProductDetailResponse = {
  /** 产品属性 */
  productAttr?: StoreProductAttrduixiang[];
  /** 商品属性详情 */
  productValue?: Record<string, unknown>;
  productInfo?: StoreProduct;
  /** 收藏标识 */
  userCollect?: boolean;
};

export type RegisterClientUserRequest = {
  /** 手机号 */
  phone: string;
  /** 密码 */
  password: string;
  /** 验证码(6位数) */
  verificationCode: string;
  /** 邀请码(6位数) */
  inviteCode?: string;
};

export type SaveCartRes = {
  cartId?: number;
};

export type shimingrenzhengduixiang = {
  /** 用户姓名 */
  realName: string;
  /** 身份证号 */
  idCard: string;
  /** 居住地址 */
  address: string;
  /** 份证正面照 */
  cardSide: string;
  /** 身份证反面照 */
  cardReverseSide: string;
};

export type SignSetting = {
  id?: number;
  /** 天数 */
  day?: number;
  /** 奖励金币数 */
  award?: number;
  /** 是否激活 */
  status?: boolean;
  /** 是否删除 */
  isDel?: boolean;
  createTime?: string;
  updateTime?: string;
};

export type StoreOrder = {
  /** 订单ID */
  id?: number;
  /** 订单号 */
  orderNum?: string;
  /** 全局订单号 */
  globalOrderNum?: string;
  /** 用户id */
  uid?: number;
  /** 用户姓名 */
  realName?: string;
  /** 用户电话 */
  userPhone?: string;
  /** 详细地址 */
  userAddress?: string;
  /** 运费金额 */
  freightPrice?: number;
  /** 订单商品总数 */
  totalNum?: number;
  /** 订单总价 */
  totalPrice?: number;
  /** 扣减金额 */
  discountPrice?: number;
  /** 实际支付金额 */
  payPrice?: number;
  /** 优惠券id */
  couponId?: number;
  /** 优惠券金额 */
  couponPrice?: number;
  /** 支付状态: 0未支付 1已支付 */
  paid?: boolean;
  /** 支付渠道 */
  payChannel?: string;
  /** 支付时间 */
  payTime?: string;
  /** 支付方式 */
  payType?: string;
  /** 创建时间 */
  createTime?: string;
  /** 订单状态（0：待发货；1：待收货；2：已收货，待评价；3：已完成；4：待核销；） */
  status?: number;
  /** 0 未退款 1 申请中 2 已退款 3 退款中 */
  refundStatus?: number;
  /** 退款图片 */
  refundReasonWapImg?: string;
  /** 退款用户说明 */
  refundReasonWapExplain?: string;
  /** 前台退款原因 */
  refundReasonWap?: string;
  /** 不退款的理由 */
  refundReason?: string;
  /** 退款时间 */
  refundReasonTime?: string;
  /** 退款金额 */
  refundPrice?: number;
  /** 快递名称/送货人姓名 */
  deliveryName?: string;
  /** 快递公司编码 */
  deliveryCode?: string;
  /** 发货类型 */
  deliveryType?: string;
  /** 快递单号/手机号 */
  deliveryId?: string;
  /** 发货时间 */
  deliveryTime?: string;
  /** 消费赚取积分 */
  gainIntegral?: number;
  /** 使用积分 */
  useIntegral?: number;
  /** 给用户退了多少积分 */
  backIntegral?: number;
  /** 备注 */
  mark?: string;
  /** 是否删除 */
  isDel?: boolean;
  /** 管理员备注 */
  remark?: string;
  /** 支付渠道(0-微信公众号,1-微信小程序,2-H5,3-余额,4-微信AppIos,5-微信AppIos安卓,6-支付宝支付，7-支付宝app支付,8-平台金钻支付) */
  isChannel?: number;
  /** 收货时间 */
  receiveTime?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 订单类型:0-普通订单 1-积分订单 */
  type?: number;
  /** 商户id */
  merId?: number;
  /** 是否需要发货 */
  isNeedDeliver?: boolean;
  moneyAndCashInfo?: PairBigDecimalBigDecimal;
};

export type StoreOrderAfter = {
  id?: number;
  /** 供应商名称 */
  supplierName?: string;
  /** 售后单号 */
  orderAfterNu?: string;
  /** 订单id */
  orderId?: number;
  /** 用户id */
  uid?: number;
  /** 订单详情id */
  orderInfoId?: number;
  /** 售后商品数量 */
  afterNumber?: number;
  /** 退款编号 */
  refundNu?: string;
  /** 售后类型(1：仅退款 2：退货退款 3换货) */
  afterType?: number;
  /** 售后状态(-3：超时未退货关闭 -2：用户取消 -1：商家驳回 0：商家待审核 1：用户待退货 2：商家待收货/用户发货 3：商家收货/重新发货 4：用户重新收货 5：待打款/商家同意退货退款且已收到用户的退货物流 6：已完成) */
  afterStatus?: number;
  /** 售后申请时间 */
  afterTime?: string;
  /** 售后原因 */
  afterDesc?: string;
  /** 原因说明 */
  cause?: string;
  /** 凭证图片 */
  explainPic?: string;
  /** 审核人 */
  auditor?: string;
  /** 审核时间 */
  auditTime?: string;
  /** 审核备注 */
  auditorDesc?: string;
  /** 申请金额 */
  applyPrice?: number;
  /** 运费金额 */
  freightPrice?: number;
  /** 其他费用金额 */
  otherPrice?: number;
  /** 是否发货 */
  sendGoods?: boolean;
  /** 联系电话 */
  phone?: string;
  /** 联系人姓名 */
  contact?: string;
  /** 买家退货时间-退货/换货才有 */
  buyerTime?: string;
  /** 商家收货地址 */
  address?: string;
  /** 商家寄回时间 */
  disposeTime?: string;
  /** 用户收货状态 0未收货 1已收货 */
  receiveStatus?: boolean;
  /** 完成时间 */
  finishTime?: string;
  /** 创建时间 */
  createTime?: string;
  /** 更新时间 */
  updateTime?: string;
};

export type StoreOrderAfterAddressResponse = {
  /** 联系电话 */
  phone?: string;
  /** 联系人姓名 */
  contact?: string;
  /** 收货地址 */
  address?: string;
};

export type StoreOrderAfterResponse = {
  id?: number;
  /** 售后单号 */
  orderAfterNu?: string;
  /** 售后商品数量 */
  afterNumber?: number;
  /** 商品名称 */
  productName?: string;
  /** 商品图片 */
  productImage?: string;
  /** 商品价格 */
  productPrice?: string;
  /** 商品sku */
  productSku?: string;
  /** 售后状态(-3：超时关闭 -2：用户取消 -1：驳回 0：待审核 1：待退货 2：待收货/用户发货 3：重新发货 4：重新收货/商家发货 5：待打款 6：已完成) */
  afterStatus?: number;
};

export type StoreOrderCountItemResponse = {
  /** 总数 */
  all?: number;
  /** 未支付 */
  unPaid?: number;
  /** 未发货 */
  notShipped?: number;
  /** 待收货 */
  spike?: number;
  /** 待评价 */
  bargain?: number;
  /** 交易完成 */
  complete?: number;
  /** 待核销 */
  toBeWrittenOff?: number;
  /** 退款中 */
  refunding?: number;
  /** 已退款 */
  refunded?: number;
  /** 部分退款 */
  refundedSection?: number;
  /** 0 未退款 1 申请中 2 已退款 */
  refundStatus?: number;
  /** 已删除 */
  deleted?: number;
};

export type StoreOrderInfoOldVo = {
  /** id */
  id?: number;
  /** 订单id */
  orderId?: number;
  /** 商品ID */
  productId?: number;
  info?: OrderInfoDetailVo;
  /** 唯一id */
  unique?: string;
  /** 售后状态(-1：已关闭 0：正常无售后 1售后中 2: 等待发货 3：已发货 4：已完成) */
  afterStatus?: number;
  /** 售后数量 */
  afterNumber?: number;
};

export type StoreProduct = {
  /** 商品id */
  id?: number;
  /** 供应商名称 */
  supplierName?: string;
  /** 商户Id(0为管理员创建,其他为商户创建) */
  merId?: number;
  /** 商品图片 */
  image?: string;
  /** 轮播图 */
  sliderImage?: string;
  /** 商品名称 */
  storeName?: string;
  /** 商品简介 */
  storeInfo?: string;
  /** 关键字 */
  keyword?: string;
  /** 商品条码（一维码） */
  barCode?: string;
  /** 分类id */
  cateId?: string;
  /** 商品价格 */
  price?: number;
  /** 会员价格 */
  vipPrice?: number;
  /** 市场价 */
  otPrice?: number;
  /** 单位名 */
  unitName?: string;
  /** 排序 */
  sort?: number;
  /** 销量 */
  sales?: number;
  /** 库存 */
  stock?: number;
  /** 状态（0：未上架，1：上架） */
  isShow?: boolean;
  /** 是否热卖(畅销品) */
  isHot?: boolean;
  /** 是否优惠(促销单品) */
  isBenefit?: boolean;
  /** 是否精品(推荐) */
  isBest?: boolean;
  /** 是否新品 */
  isNew?: boolean;
  /** 官方补贴 */
  isSubsidy?: boolean;
  /** 添加时间 */
  addTime?: number;
  /** 是否回收站 */
  isRecycle?: boolean;
  /** 是否删除 */
  isDel?: boolean;
  /** 获得积分 */
  giveIntegral?: number;
  /** 成本价 */
  cost?: number;
  /** 虚拟销量 */
  ficti?: number;
  /** 浏览量 */
  browse?: number;
  /** 商品二维码地址(用户小程序海报) */
  codePath?: string;
  /** 淘宝京东1688类型 */
  soureLink?: string;
  /** 主图视频链接 */
  videoLink?: string;
  /** 运费模板ID */
  tempId?: number;
  /** 商品地址id */
  addressId?: number;
  /** 规格 0单 1多 */
  specType?: boolean;
  /** 是否需要发货 */
  isNeedDeliver?: boolean;
  /** 商品详情 */
  content?: string;
  /** 商品类型 */
  type?: number;
};

export type StoreProductAddressResponse = {
  /** 厂家电话 */
  phone?: string;
  /** 厂家姓名 */
  contact?: string;
  /** 厂家收货地址 */
  address?: string;
};

export type StoreProductAttrduixiang = {
  /** attrId */
  id?: number;
  /** 商品ID */
  productId?: number;
  /** 属性名 */
  attrName?: string;
  /** 属性值 */
  attrValues?: string;
  /** 活动类型 0=商品，1=秒杀，2=砍价，3=拼团 */
  type?: number;
  /** 是否删除,0-否，1-是 */
  isDel?: boolean;
};

export type SystemApp = {
  id?: number;
  /** 安卓下载地址 */
  androidWgtUrl?: string;
  /** ios下载地址 */
  iosWgtUrl?: string;
  /** true强制更新 */
  method?: string;
  /** 版本号 */
  version?: string;
  /** 通用下载地址 */
  wgtUrl?: string;
  /** ios版本号 */
  iosVersion?: string;
  /** 创建时间 */
  createTime?: string;
  /** 更新描述 */
  des?: string;
};

export type SystemCityTreeVo = {
  id?: number;
  /** 城市id */
  cityId?: number;
  /** 省市级别 */
  level?: number;
  /** 父级id */
  parentId?: number;
  /** 区号 */
  areaCode?: string;
  /** 名称 */
  name?: string;
  /** 合并名称 */
  mergerName?: string;
  /** 经度 */
  lng?: string;
  /** 纬度 */
  lat?: string;
  /** 是否展示 */
  isShow?: boolean;
  /** 创建时间 */
  createTime?: string;
  /** 修改时间 */
  updateTime?: string;
  child?: SystemCityTreeVo[];
};

export type UpdatePayPwdRequest = {
  /** 密码 */
  payPassword: string;
  /** 验证码 */
  verificationCode: string;
};

export type User = {
  /** 用户id */
  uid?: number;
  /** 用户账号 */
  account?: string;
  /** 用户密码 */
  pwd?: string;
  /** 是否实名 */
  isCertification?: boolean;
  /** 真实姓名 */
  realName?: string;
  /** 生日 */
  birthday?: string;
  /** 身份证号码 */
  idCard?: string;
  /** 用户备注 */
  mark?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户头像 */
  avatar?: string;
  /** 手机号码 */
  phone?: string;
  /** 微信openid */
  wxOpenId?: string;
  /** 最后一次登录ip */
  lastIp?: string;
  /** 用户余额 */
  money?: number;
  /** 用户剩余购物积分 */
  integral?: number;
  /** 用户金币 */
  gold?: number;
  /** 1为正常，0为禁止 */
  status?: boolean;
  /** 用户登陆类型，h5,wechat,routine */
  loginType?: string;
  /** 创建时间 */
  createTime?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 最后一次登录时间 */
  lastLoginTime?: string;
  /** 清除时间 */
  cleanTime?: string;
  /** 性别，0未知，1男，2女，3保密 */
  sex?: string;
  /** 支付宝账户名称 */
  zhifubaoName?: string;
  /** 支付宝账号 */
  zhifubaoAccount?: string;
  /** 支付密码 */
  payPassword?: string;
  /** 邀请码 */
  inviteCode?: string;
  /** 父级uid */
  spreadUid?: number;
  /** 推荐路径 */
  path?: string;
  /** 上次签到时间 */
  lastSignTime?: string;
  /** 连续签到天数 */
  continueSignDays?: number;
  /** 是否缺失支付密码 （1：未设置 0：已设置） */
  payPasswordIsMissing?: boolean;
};

export type UserAddressCityRequestduixiang = {
  /** 收货人所在省 */
  province: string;
  /** 收货人所在市 */
  city: string;
  /** 城市id */
  cityId: number;
  /** 收货人所在区 */
  district: string;
};

export type UserAddressduixiang = {
  /** 用户地址id */
  id?: number;
  /** 用户id */
  uid?: number;
  /** 收货人姓名 */
  realName?: string;
  /** 收货人电话 */
  phone?: string;
  /** 收货人所在省 */
  province?: string;
  /** 收货人所在市 */
  city?: string;
  /** 城市id */
  cityId?: number;
  /** 收货人所在区 */
  district?: string;
  /** 收货人详细地址 */
  detail?: string;
  /** 邮编 */
  postCode?: number;
  /** 经度 */
  longitude?: string;
  /** 纬度 */
  latitude?: string;
  /** 是否默认 */
  isDefault?: boolean;
  /** 是否删除 */
  isDel?: boolean;
  /** 创建时间 */
  updateTime?: string;
  /** 创建时间 */
  createTime?: string;
};

export type UserAddressRequestduixiang = {
  /** 用户地址id */
  id?: number;
  /** 收货人姓名 */
  realName: string;
  /** 收货人电话 */
  phone: string;
  /** 收货人详细地址 */
  detail: string;
  /** 是否默认 */
  isDefault: boolean;
  address: UserAddressCityRequestduixiang;
};

export type UserConfigResponseduixiang = {
  /** 图片前缀 */
  picUrlPre?: string;
  /** app微信支付是否开启 */
  appWxPay?: boolean;
  /** app支付宝支付是否开启 */
  appAliPay?: boolean;
  /** 提现至支付宝是否开启 */
  cashToAli?: boolean;
  /** 提现至微信是否开启 */
  cashToWx?: boolean;
};

export type UserExtractduixiang = {
  id?: number;
  uid?: number;
  /** alipay = 支付宝 weixin=微信 */
  extractType?: string;
  /** 提现目标  */
  extractTarget?: number;
  /** 提现金额 */
  extractPrice?: number;
  /** 备注 */
  mark?: string;
  /** 无效原因 */
  failMsg?: string;
  /** -1 未通过 0 审核中 1 已提现 */
  status?: number;
  /** 创建时间 */
  createTime?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 单号 */
  orderNum?: string;
  /** 手续费 */
  commission?: number;
  /** 实到金额 */
  actualPrice?: number;
  /** 手机号 */
  phone?: string;
  /** 账号 */
  account?: string;
  /** 真实姓名 */
  realName?: string;
};

export type UserExtractRequestduixiang = {
  /** 提现方式| alipay=支付宝,weixin=微信 */
  extractType: string;
  /** 提现目标| 1余额提现, */
  extractTarget: number;
  /** 备注 */
  mark?: string;
  /** 交易密码 */
  payPassword: string;
  /** 提现金额 */
  money: number;
};

export type UserMoneyRecordResponse = {
  /** 记录id */
  id?: number;
  /** 类型 1增加  2扣减 */
  type?: number;
  /** 途径 */
  channel?: number;
  /** 标题 */
  title?: string;
  /** 数额 */
  money?: number;
  /** 余额 */
  balance?: number;
  /** 创建时间 */
  createTime?: string;
};

export type UserRelationResponseduixiang = {
  /** 收藏id */
  id?: number;
  /** 商品ID */
  productId?: number;
  /** 创建时间 */
  createTime?: string;
  /** 商品名称 */
  storeName?: string;
  /** 商品图片 */
  image?: string;
  /** 商品价格 */
  price?: number;
};

export type UserSignRecord = {
  id?: number;
  uid?: number;
  createTime?: string;
  /** 奖励金币数 */
  award?: number;
  /** 签到日期 */
  signDate?: string;
  /** 连续签到天数 */
  continueDays?: number;
};
