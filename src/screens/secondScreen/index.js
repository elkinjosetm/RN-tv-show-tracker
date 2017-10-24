import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import Strings from '@i18n';

class SecondScreenContainer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title      : Strings.screen.secondScreen.title,
		// tabBarIcon : ({ focused, tintColor }) => (
		// 	<Icon
		// 		name={ `job-search-${focused ? 'fill' : 'line'}` }
		// 		size={ 25 }
		// 		color={ tintColor }
		// 	/>
		// ),
		headerLeft : (
			<TouchableHighlight onPress={ () => navigation.navigate('DrawerOpen') }>
				<Text>Menu!</Text>
			</TouchableHighlight>
		),
		headerRight  : <View />, // Android fix
	});

	render() {
		return (
			<View>
				<Text>I'm the second screen!</Text>
			</View>
		);
	}
}

const mapStateToProps = (/**/) => ({
});

const mapDispatchToProps = (/*dispatch*/) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreenContainer);
