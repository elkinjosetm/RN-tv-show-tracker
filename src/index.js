import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Root from '@screens/root';
import createStore from '@redux';

const store = createStore();

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={ store }>
				<Root />
			</Provider>
		);
	}
}
