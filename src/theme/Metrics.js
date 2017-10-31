import { Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const isIOS = Platform.OS === 'ios';
const IOS_NAV_BAR_HEIGHT = 44;
const IOS_STATUS_BAR_HEIGHT = 20;
const ANDROID_NAV_BAR_HEIGHT = 30;
const ANDROID_STATUS_BAR_HEIGHT = 24;
const IPHONE_X_STATUS_BAR_HEIGHT = 44;
const IPHONE_X_HOME_INDICATOR_HEIGHT = 34;

/**
 * Export all of the phone metrics,
 * they are different for Android
 * and iOS, also, for iPhone X,
 * we need to take care of the
 * sensor housing
 */
export default {
	statusBarHeight     : isIphoneX() ? IPHONE_X_STATUS_BAR_HEIGHT : (isIOS ? IOS_STATUS_BAR_HEIGHT : ANDROID_STATUS_BAR_HEIGHT),
	navBarHeight        : isIOS ? IOS_NAV_BAR_HEIGHT : ANDROID_NAV_BAR_HEIGHT,
	navTabHeight        : 49 + (isIphoneX() ? IPHONE_X_HOME_INDICATOR_HEIGHT : 0),
	homeIndicatorHeight : isIphoneX() ? IPHONE_X_HOME_INDICATOR_HEIGHT : 0,
	bottomWithHome      : IPHONE_X_HOME_INDICATOR_HEIGHT - 10,
	borderRadius        : 4,
};
