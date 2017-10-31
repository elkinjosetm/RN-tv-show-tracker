import { createActions, createReducer } from 'reduxsauce';
import moment from 'moment';
import { v4 as newUUID } from 'uuid';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	data    : [],
	newShow : {
		uuid        : '',
		name        : '',
		createdDate : null,
	},
};

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
	addShow : ['name'],
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
	[Types.ADD_SHOW]: (state, { name }) => ({
		...state,
		data : [
			...state.data,
			{
				name,
				uuid        : newUUID(),
				createdDate : moment().format(),
			}
		],
	}),
});

export default Creators;
