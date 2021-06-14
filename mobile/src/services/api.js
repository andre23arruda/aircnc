const ROTA_API = `192.168.0.20`
const baseUrl = `http://${ ROTA_API }:8000/api/omnistack9/`

function postApi(route, formData, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        }
    )
    .then(response => response.json())
}


function getApi(route, auth='') {
    // console.log(baseUrl + route)
    return fetch(
        baseUrl + route,
        {
            headers: new Headers({
                Authorization: auth,
            })
        }
    )
    .then(response => response.json())
}


function deleteApi(route, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'DELETE',
            headers: new Headers({
                'Authorization': auth,
            })
        }
    )
    .then(response => response.json())
}


function putApi(route, formData, auth='') {
    return fetch(
        baseUrl + route,
        {
            credentials: 'same-origin',
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Authorization': auth,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        }
    )
    .then(response => response.json())
}

export { getApi, postApi, deleteApi, putApi }