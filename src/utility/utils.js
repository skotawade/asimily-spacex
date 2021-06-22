// Here maintain commonly used methods
export const isObject = (val) => {
  return val && val instanceof Object
}

export function isArray(arrayElement) {
  return arrayElement && Array.isArray(arrayElement) && arrayElement.length > 0
}

export const isObjectEmpty = (obj) => obj.constructor === Object && (!obj || Object.keys(obj).length === 0)

export const getClonedObj = obj => JSON.parse(JSON.stringify(obj))

export const isString = obj => typeof (obj) === 'string'
