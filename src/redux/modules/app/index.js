import { createActions, createReducer } from 'reduxsauce';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	initialized : false,
};

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
	init : null,
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
	[Types.INIT]: state => ({
		...state,
		initialized : true,
	}),
});

/* ------------- Export thunks ------------- */
export { default as thunks } from './thunks.js';

export default Creators;
