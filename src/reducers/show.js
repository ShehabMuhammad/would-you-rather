import {SHOW} from '../actions/show.js'


export default function show(state = false, action) {

switch(action.type) {
case SHOW:
	return action.value;
default:
return state;
}


}