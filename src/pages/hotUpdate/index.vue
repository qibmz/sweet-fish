<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '升级',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="update-mask flex-center">
    <view class="content botton-radius">
      <view class="content-top">
        <view class="content-top-text">
          <text class="">发现新版本 v{{ data.editionName }}</text>
          <text class="version">当前版本：{{ version }}</text>
        </view>
        <image
          class="content-top"
          style="top: 0"
          width="100%"
          height="100%"
          src="/static/images/hotUpdate/bg_top.png"
        ></image>
      </view>
      <view class="content-header"></view>
      <view class="content-body">
        <view class="title"><text>更新内容</text></view>
        <view class="body">
          <scroll-view class="box-des-scroll" :scroll-y="true">
            <rich-text :nodes="data.describe"></rich-text>
          </scroll-view>
        </view>
        <view class="footer flex-center">
          <view class="progress-box flex-column" v-if="!updateBtn">
            <progress
              class="progress"
              border-radius="35"
              :percent="percent"
              activeColor="#3DA7FF"
              show-info
              :stroke-width="10"
            />
            <!-- <u-line-progress :striped="true" :percent="percent" :striped-active="true"></u-line-progress> -->
            <view>
              <text class="fs24">
                正在下载，请稍后 ({{ downloadedSize }}/{{ packageFileSize }}M)
              </text>
            </view>
          </view>

          <button
            class="content-button"
            style="color: #fff; border: none"
            plain
            @click="confirm"
            v-if="updateBtn"
          >
            立即升级
          </button>
        </view>
      </view>

      <image
        v-if="cancelBtn"
        class="close-img"
        src="/static/images/hotUpdate//app_update_close.png"
        @click.stop="cancel"
      ></image>
    </view>
  </view>
</template>

<script setup lang="ts">
import { SystemApp } from '@/service/app'

const version = ref('1.0.0') // 当前运行版本(打包时manifest里的版本名称)
const percent = ref(0) // 进度条百分比
const updateBtn = ref(true) // 是否显示立即更新
const cancelBtn = ref(true) // 是否显示取消按钮
const downloadedSize = ref(0) // 当前已下载大小
const packageFileSize = ref(0) // 安装包大小
const data = reactive({
  describe: '1. 修复已知问题<br>2. 优化用户体验',
  editionUrl:
    'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6bef1fe3-e3e3-4909-9f0c-6ed9bd11c93b/aae2360a-6628-4c93-b873-ce1600b9a852.apk', // 安装包下载地址或者通用应用市场地址
  editionForce: 1, // 是否强制更新 0代表否 1代表是
  packageType: 0, // 0是整包升级 1是wgt升级
  editionName: '1.0.1', // 后端返回的版本名称
})

onBackPress(() => {
  // 强制更新不允许返回
  if (data.editionForce === 1) {
    return true
  }
})
onHide(() => {
  data.editionForce = 0
  uni.navigateBack({
    delta: 1,
  })
})
onLoad((e) => {
  if (e) {
    const params = e as SystemApp
    data.describe = params.des ?? '1. 修复已知问题<br>2. 优化用户体验'
    data.editionName = params.version ?? '1.0.1'

    const platform = uni.getSystemInfoSync().platform
    if (platform === 'android') {
      data.editionUrl = params.androidWgtUrl ?? ''
    } else if (platform === 'ios') {
      data.editionUrl = params.iosWgtUrl ?? ''
    }
    plus.runtime.getProperty(plus.runtime?.appid ?? '1.0.0', (inf) => {
      version.value = inf.version ?? '1.0.0'
    })
  }
})
const cancel = () => {
  // 取消升级 返回上一页
  uni.navigateBack({
    delta: 1,
  })
}

const confirm = () => {
  if (data.packageType === 0) {
    const platform = uni.getSystemInfoSync().platform
    if (platform === 'ios') {
      // 在App Store Connect中的App Store下的app信息，可找到appleId
      const appleId = 1515706501
      plus.runtime.launchApplication(
        {
          action: `itms-apps://itunes.apple.com/cn/app/id${appleId}?mt=8`,
        },
        function (e) {
          console.log('Open system default browser failed: ' + e.message)
        },
      )
      return
    }
    // apk整包升级 下载地址必须以.apk结尾
    if (data.editionUrl.includes('.apk')) {
      updateBtn.value = false
      cancelBtn.value = false
      download()
    } else {
      // 外部下载 一般是手机应用市场或者其他h5页面
      data.editionForce = 0 // 解决跳转外部链接后，更新提示还在的问题
      plus.runtime.openURL(data.editionUrl)
      uni.navigateBack({
        delta: 1,
      })
    }
  } else {
    updateBtn.value = false
    cancelBtn.value = false
    // wgt资源包升级 下载地址必须以.wgt结尾
    download()
  }
}

const download = () => {
  const packageType = data.packageType
  const downloadTask = uni.downloadFile({
    url: data.editionUrl,
    success: (res) => {
      if (res.statusCode === 200) {
        plus.runtime.install(
          res.tempFilePath,
          {
            force: true, // true表示强制安装，不进行版本号的校验；false则需要版本号校验，
          },
          () => {
            // console.log('success', success);
            if (packageType === 1) {
              plus.runtime.restart()
            }
          },
          (e) => {
            // 提示部分wgt包无法安装的问题
            data.editionForce = 0
            uni.showToast({
              title: e.message,
              icon: 'none',
              duration: 2500,
            })
            setTimeout(() => {
              uni.navigateBack()
            }, 2000)
          },
        )
        if (packageType === 0) {
          // 解决安装app点击取消，更新还在的问题
          data.editionForce = 0
          uni.navigateBack()
        }
      }
    },
  })
  // 进度条
  downloadTask.onProgressUpdate((res) => {
    percent.value = res.progress
    downloadedSize.value = parseFloat((res.totalBytesWritten / Math.pow(1024, 2)).toFixed(2))
    packageFileSize.value = parseFloat(
      (res.totalBytesExpectedToWrite / Math.pow(1024, 2)).toFixed(2),
    )
  })
}
</script>

<style>
page {
  background: transparent;
}

.flex-center {
  /* #ifndef APP-NVUE */
  display: flex;
  align-items: center;
  /* #endif */
  justify-content: center;
}

.update-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
}

.botton-radius {
  border-bottom-right-radius: 30rpx;
  border-bottom-left-radius: 30rpx;
}

.content {
  position: relative;
  top: 0;
  box-sizing: border-box;
  width: 600rpx;
  padding: 0 50rpx;
  font-family: Source Han Sans CN;
  background-color: #fff;
}

.text {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  line-height: 200px;
  color: #ffffff;
  text-align: center;
}

.content-top {
  position: absolute;
  top: -195rpx;
  left: 0;
  width: 600rpx;
  height: 270rpx;
}

.content-top-text {
  position: absolute;
  top: 120rpx;
  left: 50rpx;
  z-index: 1;
  display: flex;
  flex-direction: column;
  font-size: 40rpx;
  font-weight: bold;
  color: #f8f8fa;
}

.content-header {
  height: 70rpx;
}

.title {
  font-size: 33rpx;
  font-weight: bold;
  line-height: 38px;
  color: #3da7ff;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150rpx;
}

.box-des-scroll {
  box-sizing: border-box;
  padding: 0 40rpx;
  text-align: left;
}

.box-des {
  font-size: 26rpx;
  line-height: 50rpx;
  color: #000000;
}

.progress-box {
  width: 100%;
}

.progress {
  width: 83%;
  height: 40rpx;
  border-radius: 35px;
}

.close-img {
  position: absolute;
  bottom: -120rpx;
  left: calc(50% - 70rpx / 2);
  z-index: 1000;
  width: 70rpx;
  height: 70rpx;
}

.content-button {
  flex: 1;

  height: 80rpx;
  margin: 0 18rpx;
  font-size: 30rpx;
  font-weight: 400;
  line-height: 80rpx;
  color: #ffffff;
  text-align: center;

  background: linear-gradient(to right, #1785ff, #3da7ff);
  border-radius: 40rpx;
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fs24 {
  font-size: 24rpx;
}
.version {
  margin-top: 10rpx;
  font-size: 24rpx;
  color: #eeeeee;
  text-decoration: underline;
}
</style>
