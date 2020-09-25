import { onUnmounted } from '@vue/composition-api'

export const useTimeoutFn = (fn: () => void, interval = 1000) => {
  let timer

  const clear = () => {
    timer && clearTimeout(timer)
  }

  const timeFn = () => {
    timer = setTimeout(fn, interval)
  }

  onUnmounted(() => clear())

  return { timeFn }
}
