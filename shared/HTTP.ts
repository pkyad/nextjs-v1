
export const get = async (url: string, options?: object): Promise<unknown> => {
  return await fetch(url, {
    ...options,
    method: 'GET'
  })
}

export const post = async (url: string, data?: object, options?: object): Promise<unknown> => {
  return await fetch(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
