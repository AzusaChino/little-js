const arr = ['es5', "es6"]

arr[Symbol.iterator] =  () => {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < arr.length ? {
        value: arr[nextIndex++],
        done: false
      } : {
        value: undefined,
        done: true
      }
    }
  }
}
