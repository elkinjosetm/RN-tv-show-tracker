import React from 'react';
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { Colors, AppStyles } from '@theme';

// Containers
import Home from '@screens/home';
import NewShow from '@screens/newShow';

/**
 * Base definition of navigation options
 */
const navigationOptions = {
	headerStyle     : {
		...AppStyles.navBar.header,
	},
	headerTintColor : Colors.white,
};

/**
 * Drawer config
 */
const drawerNavigatorConfig = {
	initialRouteName : 'home',
	drawerWidth      : 200,
};

/**
 * App Navigator config
 */
const appNavigatorConfig = {
	navigationOptions : {
		...navigationOptions,
		headerTitleStyle : {
			...AppStyles.navBar.title,
		},
	},
};

/**
 * Drawer definition
 */
const drawerRouterConfig = {
	home : { screen : Home },
};

/**
 * App Router config, main view (tab),
 * and every other internal views.
 *
 * In this case, we define the home screen
 * to be a Drawer screen, so we concatenate
 * the tab Navigator, inside the StackNavigator
 */
const appRouteConfig = {
	index : {
		screen : DrawerNavigator(drawerRouterConfig, drawerNavigatorConfig),
		navigationOptions,
	},
	newShow : { screen : NewShow },
};

export const NavigationRouter = StackNavigator(appRouteConfig, appNavigatorConfig);

const AppWithNavigationState = ({ dispatch, state }) => (
	<NavigationRouter navigation={ addNavigationHelpers({ dispatch, state }) } />
);

const mapStateToProps = ({ nav }) => ({
	state : nav,
});

const mapDispatchToProps = dispatch => ({
	dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
