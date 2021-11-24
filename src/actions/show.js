export const SHOW = 'SHOW';


export function Show(value) {
return {
type: SHOW,
value
}
}

export function handleShow(bool) {

return (dispatch) => { 

 dispatch(Show(bool));
}

}