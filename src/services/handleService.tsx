import api from './api/api';

export async function postList(object: Object, route: string) { // create in 26-08-24
    let resp:Object[] = []
    await api.post<Object[]>(`${route}`, object) // Em teste
        .then(response => {
            resp = response.data
        })
        .catch(error => resp = error);
        return resp
}

export async function postRegister(object: any, route: string) {
    await api.post<any[]>(`${route}`, object)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => alert(error));
}

export async function putUpdate( object: any, route: string) {
    let resp:any[] = [] //retorno
    await api.put<any[]>(`${route}`, object)
        .then(response => { resp = response.data})
        .catch(error => resp = error);
        return resp
}


