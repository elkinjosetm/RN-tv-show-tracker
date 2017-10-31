import { createActions, createReducer } from 'reduxsauce';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	initialized : false,
	menu        : false,
};

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
	init     : null,
	showMenu : ['menu'],
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
	[Types.INIT]: state => ({
		...state,
		initialized : true,
	}),

	[Types.SHOW_MENU]: (state, { menu }) => ({
		...state,
		menu,
	}),
});

/* ------------- Export thunks ------------- */
export { default as thunks } from './thunks.js';

export default Creators;
