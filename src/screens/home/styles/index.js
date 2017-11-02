import { StyleSheet } from 'react-native';
import { AppStyles, Colors, Helpers } from '@theme';

export default StyleSheet.create({
	...AppStyles.navBar,

	container : {
		...AppStyles.screen.container,
	},

	show : {
		padding           : 10,
		borderBottomWidth : 1,
		borderBottomColor : Colors.fieldShadow,
	},

	lastShow : {
		borderBottomWidth : 0,
	},

	showName : {
		...Helpers.fontHelpers.ff_semiBold,
		fontSize : 20,
	},

	seasons : {
		...Helpers.fontHelpers.ff_regular,
		fontSize : 12,
	},
});
