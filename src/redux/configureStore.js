import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { includes } from 'lodash';
import { rehydrationService } from '@services';
import config from '@config';

export default function configureStore(rootReducer) {
	let appropriateCompose = compose;
	const middleware = [];
	const enhancers = [];

	/* ------------- Logger Middleware ------------- */
	const LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];
	const USE_LOGGING = config.DebugSettings.reduxLogging;
	const USE_DEV_TOOLS = config.DebugSettings.useReduxDevTools;
	const IS_REDUX_PERSIST_ACTIVE = config.ReduxPersist.active;

	if (USE_DEV_TOOLS)
		appropriateCompose = composeWithDevTools({ realtime : true, name : config.App.displayName });

	/**
	 * Thunk needs to be settled before the logger,
	 * logger needs to be the last one
	 */
	middleware.push(thunk);

	if (USE_LOGGING) {
		const logger = createLogger({
			predicate : (getState, { type }) => USE_LOGGING && !includes(LOGGING_BLACKLIST, type),
			collapsed : true,
		});
		middleware.push(logger);
	}

	enhancers.push(applyMiddleware(...middleware));

	// add the autoRehydrate enhancer
	if (IS_REDUX_PERSIST_ACTIVE)
		enhancers.push(autoRehydrate());

	/* ------------- Store Middleware ------------- */

	const store = createStore(rootReducer, appropriateCompose(...enhancers));

	if (IS_REDUX_PERSIST_ACTIVE)
		rehydrationService(store);

	return store;
}
