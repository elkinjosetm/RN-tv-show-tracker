import { createActions, createReducer } from 'reduxsauce';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	data     : [],
	tempShow : {
		name : '',
	},
};

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
	addShow : ['show'],
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
	[Types.ADD_SHOW]: (state, { show }) => ({
		...state,
		data : [
			...state.data,
			show,
		],
	}),
});

/* ------------- Export thunks ------------- */
export { default as thunks } from './thunks.js';

export default Creators;
