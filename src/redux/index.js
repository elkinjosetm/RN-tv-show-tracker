import { combineReducers } from 'redux';
import { reducer as nav } from '@redux.modules/nav';
import { reducer as app } from '@redux.modules/app';
import { reducer as globals } from '@redux.modules/globals';
import configureStore from './configureStore';

export default () => {
	/* ------------- Assemble The Reducers ------------- */
	const mainReducer = combineReducers({
		nav,
		app,
	});

	const rootReducer = (state, action) => {
		const newState = globals(state, action);
		return mainReducer(newState, action);
	};

	return configureStore(rootReducer);
};
