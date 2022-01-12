export default `const cleanFront = (str) => {
    let index = 0
    for (let i = 0; i < str.length; ++i) {
      if (str.charAt(i) === ' ') {
        index = i + 1
      } else {
        break
      }
    }
    let res = str.substring(index)
    console.log(res)
    return res
  }

  const cleanBack = (str) => {
    let index = str.length
    for (let i = str.length - 1; i >= 0; --i) {
      if (str.charAt(i) === ' ') {
        index = i
      } else {
        break
      }
    }
    let res = str.substring(0, index)
    console.log(res)
    return res
  }

  const clean = (str) => {
    return cleanBack(cleanFront(str))
  }`