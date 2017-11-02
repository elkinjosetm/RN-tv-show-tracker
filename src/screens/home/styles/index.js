import { StyleSheet } from 'react-native';
import { AppStyles, Colors, Helpers } from '@theme';

export default StyleSheet.create({
	...AppStyles.navBar,

	container : {
		...AppStyles.screen.container,
		padding         : 0,
		backgroundColor : Colors.athensGray,
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

	emptyState : {
		marginTop      : 50,
		width          : 200,
		alignSelf      : 'center',
		alignItems     : 'center',
		justifyContent : 'center',
	},

	emptyTitle : {
		fontSize     : 20,
		marginTop    : 10,
		marginBottom : 10,
		color        : Colors.abbey,
	},

	emptyDescription : {
		textAlign : 'center',
		fontSize  : 14,
		color     : Colors.osloGray,
	},
});
