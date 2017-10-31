import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppActions from '@redux.modules/app';
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
 * App Router config, main view (tab),
 * and every other internal views.
 *
 * In this case, we define the home screen
 * to be a Drawer screen, so we concatenate
 * the tab Navigator, inside the StackNavigator
 */
const appRouteConfig = {
	index   : { screen : Home },
	newShow : { screen : NewShow },
};

export const NavigationRouter = StackNavigator(appRouteConfig, appNavigatorConfig);

const AppWithNavigationState = ({ dispatch, state, showMenu }) => (
	<NavigationRouter navigation={ addNavigationHelpers({ dispatch, state, showMenu }) } />
);

const mapStateToProps = ({ nav }) => ({
	state : nav,
});

const mapDispatchToProps = dispatch => ({
	dispatch,
	showMenu : bindActionCreators(AppActions, dispatch).showMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);
