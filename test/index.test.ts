import { useTimeoutFn } from './useTimeoutFn'
import renderHook from '../src/index'

let wrapper
const callback = jest.fn()

beforeEach(() => {
  jest.useFakeTimers()
  wrapper = renderHook(() => {
    const { timeFn } = useTimeoutFn(callback, 3000)
    return { timeFn }
  })
})

describe('useTimeout', () => {
  it('should be defined', () => {
    expect(useTimeoutFn).toBeDefined()
  })

  it('should return true after 3000ms', () => {
    expect(callback).not.toBeCalled()
    wrapper.vm.timeFn()
    expect(jest.getTimerCount()).toBe(1)
    jest.runOnlyPendingTimers()
    expect(callback).toBeCalled()
    expect(jest.getTimerCount()).toBe(0)
    expect(callback).toHaveBeenCalledTimes(1)
  })
  it('should clear when onUnmounted', () => {
    wrapper.vm.timeFn()
    expect(jest.getTimerCount()).toBe(1)
    wrapper.vm.$destroy()
    expect(jest.getTimerCount()).toBe(0)
  })
})
