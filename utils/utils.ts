export const repeatObjectsCircularly = (arr: any, n: any) => {
    const result = []
    for (let i = 0; i < arr.length * n; i++) {
      result.push(arr[i % arr.length])
    }
    return result
  }