/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
// 从右往左执行函数
export default function compose(...funcs) {
  // 没传参数
  if (funcs.length === 0) {
    return arg => arg
  }
  // 传了一个
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 传了多个。原理：把前n个函数（一开始是第一第二个函数）封装成一个函数fn，fn再和下一个函数封装成fn1，以此类推
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
