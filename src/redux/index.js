import { combineReducers } from 'redux';
import configureStore from '@redux/configureStore';
import { reducer as globals } from '@redux.modules/globals';
import { reducer as nav } from '@redux.modules/nav';
import { reducer as app } from '@redux.modules/app';
import { reducer as shows } from '@redux.modules/shows';

export default () => {
	/* ------------- Assemble The Reducers ------------- */
	const mainReducer = combineReducers({
		nav,
		app,
		shows,
	});

	const rootReducer = (state, action) => {
		const newState = globals(state, action);
		return mainReducer(newState, action);
	};

	return configureStore(rootReducer);
};
