import { ifIphoneX } from 'react-native-iphone-x-helper';
import Metrics from './Metrics';
import Colors from './Colors';
import Helpers from './Helpers';

export default {
	screen : {
		application : {
			flex : 1,
		},

		container   : {
			flex            : 1,
			backgroundColor : Colors.athensGray,
		},
	},

	navBar : {
		header : {
			backgroundColor : Colors.primary,
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

		navButton : {
			padding : 10,
		},
	},

	form   : {
		formGroup : {
			marginBottom : 15,
		},

		controlLabel : {
			...Helpers.fontHelpers.ff_regular,
			color        : Colors.shark,
			marginBottom : 7,
			fontSize     : 16,
			lineHeight   : 24,
		},

		formControl : {
			...Helpers.fontHelpers.ff_regular,
			borderRadius      : Metrics.borderRadius,
			borderColor       : Colors.mischka,
			backgroundColor   : Colors.white,
			shadowColor       : Colors.fieldShadow,
			height            : 48,
			borderWidth       : 1,
			paddingVertical   : 6,
			paddingHorizontal : 12,
			shadowOpacity     : 1,
			shadowRadius      : 1,
			shadowOffset      : {
				width  : 0,
				height : 0,
			},
		},
	},
};
