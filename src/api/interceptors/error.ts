import { hasCustomKey } from '@/api'
import { showToast } from '@/utils/uni'
import { AjaxResponse } from 'uni-ajax'

export const ERROR_OVERWRITE: Record<string, string> = {
  '003000': '不合法的Token',
}

export const toastError = (err: Error | AjaxResponse) => {
  console.log('toast err', err)
  if ((err as { errMsg: string })?.errMsg === 'request:fail abort') {
    // request abort
    return Promise.reject(err)
  }
  const isError = err instanceof Error
  if (isError || !hasCustomKey(err.config, 'noToast')) {
    const title = isError ? err.message : ERROR_OVERWRITE[err.data?.code] ?? (err.data?.msg || '系统错误')
    setTimeout(() => showToast(title), 100)
  }
  return Promise.reject(err)
}
