import _ from 'lodash'
import { READ_EVENTS, CREATE_EVENT, DELETE_EVENT, GET_EVENT, PUT_EVENT } from '../actions'

export default (events = {}, action) => {
	switch(action.type){
		case READ_EVENTS:
			return _.mapKeys(action.response.data, 'id')
		case DELETE_EVENT:
			delete events[action.id]
			return { ...events }
		case CREATE_EVENT:
		case GET_EVENT:
		case PUT_EVENT:
			const data = action.response.data;
			return { ...events, [data.id]: data }
		default:
			return events
	}
};
