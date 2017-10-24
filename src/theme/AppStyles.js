import { ifIphoneX } from 'react-native-iphone-x-helper';
import Metrics from './Metrics';
import Colors from './Colors';
import Helpers from './Helpers';

export default {
	screen : {
		application               : {
			flex            : 1,
			backgroundColor : Colors.polar,
		},

		container                 : {
			flex            : 1,
			backgroundColor : Colors.polar,
		},
	},

	navBar : {
		header : {
			backgroundColor : Colors.pictonBlue,
			paddingLeft     : 16,
			paddingRight    : 16,
			...ifIphoneX({
				height     : Metrics.navBarHeight + Metrics.statusBarHeight,
				paddingTop : Metrics.statusBarHeight,
			}),
		},

		title : {
			...Helpers.fontHelpers.ff_regular,
			color            : Colors.white,
			fontWeight       : 'normal',
			textAlign        : 'center',
			alignSelf        : 'center',
			fontSize         : 24,
			marginHorizontal : 16,
		},
	},
};
