import { createActions, createReducer } from 'reduxsauce';
import { set, cloneDeep, isUndefined } from 'lodash';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {};

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
	setFieldValue : ['module', 'property', 'value'],
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
	[Types.SET_FIELD_VALUE]: (state, { module, property, value }) => (
		changeState({
			state,
			module,
			property,
			value,
		})
	),
});

const changeState = ({ state, module, property, value }) => {
	const newState = cloneDeep(state);

	// Only update the state if it's the same Module
	if (
		!isUndefined(module) &&
		!isUndefined(newState[module])
	)
		set(newState[module], property, value); // Update value

	return newState;
};

export default Creators;
