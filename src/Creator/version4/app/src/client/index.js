import mapKeys from 'lodash/fp/mapKeys'

const common = {
    baseUrl: process.env.REACT_APP_BACKEND_BASE_PATH,
    path: process.env.REACT_APP_BACKEND_EXTENSION
}

export const DISPATCHER_BASE_URL = `${common.baseUrl}${common.path}/scripts/dispatcher.php`
export const REST_BASE_URL = `${common.baseUrl}${common.path}/rest`

export const DISPATCHER_DEFAULT_HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}
export const REST_DEFAULT_HEADERS = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}

export const dispatch = (body, getCre = true) =>
    fetch(DISPATCHER_BASE_URL, {
        method: 'POST',
        headers: DISPATCHER_DEFAULT_HEADERS,
        credentials: 'include',
        body: createFormData(body, getCre)
    })
        .then(r => r.json())
        .then(r => {
            console.debug(r)
            return r
        })
        .catch(console.error)

const createFormData = (data, getCre) => {
    const formData = new FormData()
    // eslint-disable-next-line lodash-fp/no-unused-result
    mapKeys(k => formData.append(k, data[k]))(data)
    if (getCre) {
        formData.append('getCrePoint', 'get')
    }
    return new URLSearchParams(formData)
}

export const rest = endpoint =>
    fetch(`${REST_BASE_URL}/${endpoint}.php`, {
        method: 'GET',
        headers: REST_DEFAULT_HEADERS,
        credentials: 'include'
    })
        .then(r => r.json())
        .then(r => {
            console.debug(r)
            return r
        })
        .catch(console.error)

export default {
    dispatch,
    rest
}
