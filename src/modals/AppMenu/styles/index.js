import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '@theme';

export default StyleSheet.create({
	...AppStyles.form,

	container : {
		...AppStyles.screen.container,
		backgroundColor : Colors.overlayShadow,
	},

	closeButton : {
		position : 'absolute',
		top      : 35,
		left     : 25,
	},
});
