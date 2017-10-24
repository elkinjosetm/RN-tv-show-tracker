import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { thunks } from '@redux.modules/app';
import config from '@config';

export default store => {
	const reducerVersion = config.ReduxPersist.reducerVersion;
	const storeConfig = config.ReduxPersist.storeConfig;
	const persistCallback = () => store.dispatch(thunks.init());

	// Check to ensure latest reducer version
	AsyncStorage.getItem('reducerVersion')
	.then(localVersion => {
		/**
		 * Purge the redux store when the
		 * reducerVersion change
		 */
		if (localVersion !== reducerVersion) {
			// Purge store
			persistStore(store, storeConfig, persistCallback).purge();

			// Set new reducerVersion
			AsyncStorage.setItem('reducerVersion', reducerVersion);
			return;
		}

		persistStore(store, storeConfig, persistCallback);
	})
	.catch(() => {
		persistStore(store, storeConfig, persistCallback);
		AsyncStorage.setItem('reducerVersion', reducerVersion);
	});
};
