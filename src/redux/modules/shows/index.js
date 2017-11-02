import { createActions, createReducer } from 'reduxsauce';
import { cloneDeep } from 'lodash';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
	data     : [],
	tempShow : {
		name    : '',
		seasons : [],
	},
};

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
	addShow       : ['show'],
	addSeason     : null,
	removeSeason  : ['index'],
	resetTempShow : null,
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

	[Types.ADD_SEASON]: state => {
		const newState = cloneDeep(state);

		newState.tempShow.seasons.push({ name : '' });

		return newState;
	},

	[Types.REMOVE_SEASON]: (state, { index }) => {
		const newState = cloneDeep(state);

		newState.tempShow.seasons.splice(index, 1);

		return newState;
	},

	[Types.RESET_TEMP_SHOW]: state => ({
		...state,
		tempShow : INITIAL_STATE.tempShow,
	}),
});

/* ------------- Export thunks ------------- */
export { default as thunks } from './thunks.js';

export default Creators;
