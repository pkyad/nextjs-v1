

export const get = (url:string , options?: object) => {
    return fetch(url , {
        ...options,
        method : 'GET',
    })
}


export const post = (url: string , data?: object, options?: object) => {
    return fetch(url , {
        ...options,
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
}

