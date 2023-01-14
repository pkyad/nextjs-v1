
const _ = (path: string): string => {
  const { BACKEND_RESOURCES_BASE_URL } = process.env
  return `${BACKEND_RESOURCES_BASE_URL as string}${path}`
}

export const get = async (url: string, options?: object): Promise<unknown> => {
  return await fetch(_(url), {
    ...options,
    method: 'GET'
  })
}

export const post = async (url: string, data?: object, options?: object): Promise<unknown> => {
  return await fetch(_(url), {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export const put = async (url: string, data?: object, options?: object): Promise<unknown> => {
  return await fetch(_(url), {
    ...options,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export const _delete = async (url: string, data?: object, options?: object): Promise<unknown> => {
  return await fetch(_(url), {
    ...options,
    method: 'DELETE'
  })
}
