import { AsyncStorage } from 'react-native';

const App = {
	name         : 'RNBoilerplate',
	displayName  : 'React Native Boilerplate',
	fieldTimeout : 300,
};

const Urls = {
	dev : {
		apiUrl : 'https://',
	},
	prod : {
		apiUrl : 'https://',
	}
};

// Active URLs based on the environment
const currentUrls = Urls[__DEV__ ? 'dev' : 'prod'];

const API = {
	baseUrl : currentUrls.apiUrl,
	timeout : 10000,
};

const DebugSettings = {
	reduxLogging     : __DEV__,
	useReduxDevTools : __DEV__,
};

const ReduxPersist = {
	active         : true,
	/**
	 * The reducerVersion should be
	 * the app version with the build
	 * number, where the new changes
	 * will take effect.
	 *
	 * Is not required to update this
	 * value for builds without redux
	 * structure changes.
	 *
	 * Eg.:
	 * App Version: 1.0.0
	 * Build number: 1
	 * reducerVersion: 1.0.0.1
	 */
	reducerVersion : '1.0.0.1',
	storeConfig    : {
		storage   : AsyncStorage,
		blacklist : ['nav', 'app'],
	}
};

const HostSettings = {
	ip : 'localhost',
};

export default {
	App,
	API,
	DebugSettings,
	ReduxPersist,
	HostSettings,
};
