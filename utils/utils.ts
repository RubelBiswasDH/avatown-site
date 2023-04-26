export const repeatObjectsCircularly = (arr: any, n: any) => {
  const result = []
  let id = 1
  for (let i = 0; i < arr.length * n; i++) {
    result.push({ ...arr[i % arr.length], id: id })
    id++
  }
  return result
}

export const formatString = (str: string) => {
  return str.split('-').map( (word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}