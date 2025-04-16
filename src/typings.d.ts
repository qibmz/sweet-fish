// 全局要用的类型放到这里

declare global {
  type IResData<T> = {
    code: number
    message: string
    data: T
  }

  // uni.uploadFile文件上传参数
  type IUniUploadFileOptions = {
    file?: File
    files?: UniApp.UploadFileOptionFiles[]
    filePath?: string
    name?: string
    formData?: any
  }
}

export {} // 防止模块污染
