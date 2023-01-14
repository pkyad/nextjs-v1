

const _ = (path: string) => {
    return `${process.env.BACKEND_RESOURCES_BASE_URL}${path}`
}


export const get = (url:string , options?: object) => {
    return fetch(_(url) , {
        ...options,
        method : 'GET',
    })
}


export const post = (url: string , data?: object, options?: object) => {
    return fetch(_(url) , {
        ...options,
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
}

export const put = (url: string , data?: object, options?: object) => {
    return fetch(_(url) , {
        ...options,
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
}

export const _delete = (url: string , data?: object, options?: object) => {
    return fetch(_(url) , {
        ...options,
        method : 'DELETE',
    })
}

