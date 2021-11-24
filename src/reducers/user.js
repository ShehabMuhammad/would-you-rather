import { CHANGE_USER, LOG_OUT } from '../actions/user.js';

export default function user(state = null, action) {

switch(action.type) {
case LOG_OUT:
	return null;
case CHANGE_USER:
	return action.currentUser
default:
	return state;
}

}