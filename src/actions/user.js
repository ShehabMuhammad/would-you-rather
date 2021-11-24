export const CHANGE_USER = 'CHANGE_USER';
export const LOG_OUT = 'LOG_OUT';


export function changeUser(currentUser) {

return {
type:CHANGE_USER,
currentUser
}
}

export function logOut() {

return {
type: LOG_OUT
}
}