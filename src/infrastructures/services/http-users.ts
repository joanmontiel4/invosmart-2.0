import { iUser } from '../interfaces/iuser';

const url = 'http://localhost:3542/users/';

export function getUser(id: number): Promise<iUser> {
    return fetch(url + id).then((resp) => resp.json());
}

export function getAllUsers(): Promise<Array<iUser>> {
    return fetch(url).then((resp) => resp.json());
}
export function addUser(user: iUser): Promise<iUser> {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function updateUser(user: iUser): Promise<iUser> {
    return fetch(url + user.id, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
    }).then((resp) => resp.json());
}
export function deleteUser(id: iUser['id']) {
    return fetch(url + id, {
        method: 'DELETE',
    });
}
