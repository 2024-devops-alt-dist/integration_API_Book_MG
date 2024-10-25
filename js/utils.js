/**
 *
 * @param {Function} func
 * @param {number} timeout
 * @returns
 */
export const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
