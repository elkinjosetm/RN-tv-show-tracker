import { StyleSheet, Platform } from 'react-native';
import { AppStyles, Metrics } from '@theme';

export default StyleSheet.create({
	...AppStyles.screen,

	statusBar: {
		...Platform.select({
			android : {
				height : Metrics.statusBarHeight,
			},
		}),
	},
});
