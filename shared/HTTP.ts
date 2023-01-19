/**
 * Blend two colors together.
 * @method
 * @param {string} color1 - The first color, in hexadecimal format.
 * @param {string} color2 - The second color, in hexadecimal format.
 * @return {string} The blended color.
 * @example
 * var x = foo("test"); //it will show "test" message
 * const response = await fetch(URL)
 * const data = await response.json()
 * data.map((d)=> {...d, id : d.pk})
 */
export const get = async (url: string, options?: object): Promise<unknown> => {
  return await fetch(url, {
    ...options,
    method: 'GET'
  })
}

export const post = async (
  url: string,
  data?: object,
  options?: object
): Promise<unknown> => {
  return await fetch(url, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
