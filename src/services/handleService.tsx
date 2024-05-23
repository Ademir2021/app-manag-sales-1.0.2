import api from './api/api';

export async function postRegister(object: any, route: string) {
    await api.post<any[]>(`${route}`, object)
        .then(response => {
            alert(JSON.stringify(response.data))
            return response.data;
        })
        .catch(error => alert(error));
}

export async function putUpdate( object: any, route: string) {
    await api.put<any[]>(`${route}`, object)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => alert(error));
}


