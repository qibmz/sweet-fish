import type { GenerateServiceProps } from 'openapi-ts-request'

export default [
  {
    schemaPath: 'http://127.0.0.1:4523/export/openapi/3?version=3.0',
    serversPath: './src/service/app',
    requestLibPath: `import request from '@/utils/request';\n import { CustomRequestOptions } from '@/interceptors/request';`,
    requestOptionsType: 'CustomRequestOptions',
    reactQueryMode: 'vue',
    isGenJavaScript: false,
    hook: {
      customFunctionName: (data) => {
        const index = data.path.indexOf('{')
        let newPath = data.path
        if (index !== -1) {
          newPath = data.path.slice(0, index - 1)
        }
        const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
        const paths = newPath.split('/').filter((path) => path)
        const secondLastPath = capitalize(paths[paths.length - 2])
        const lastPath = capitalize(paths[paths.length - 1])
        return `${data.method}${secondLastPath}${lastPath}`
      },
    },
  },
] as GenerateServiceProps[]
