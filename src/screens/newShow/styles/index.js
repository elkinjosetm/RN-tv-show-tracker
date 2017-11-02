import { StyleSheet } from 'react-native';
import { AppStyles, Colors } from '@theme';

export default StyleSheet.create({
	...AppStyles.navBar,
	...AppStyles.form,

	container : {
		...AppStyles.screen.container,
	},

	seasonsTitleContainer : {
		position       : 'relative',
		paddingTop     : 15,
		marginBottom   : 30,
		borderTopWidth : 1,
		borderTopColor : Colors.fieldShadow,
	},

	seasonsTitle : {
		...AppStyles.form.controlLabel,
		marginBottom : null,
	},

	button : {
		position : 'absolute',
		padding  : 10,
		right    : 0,
	},

	addButton : {
		top : 10,
	},

	minusButton : {
		top : -3,
	},
});
