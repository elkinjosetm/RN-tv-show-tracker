import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from '@components';
import Strings from '@i18n';
import { Colors } from '@theme';

class HomeContainer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title      : Strings.screen.home.title,
		headerLeft : (
			<Icon
				name="bars"
				size={ 15 }
				color={ Colors.white }
				onPress={ () => navigation.navigate('DrawerOpen') }
			/>
		),
		headerRight  : <View />, // Android fix
	});

	render() {
		return (
			<View>
				<Text>Hello world</Text>
			</View>
		);
	}
}

const mapStateToProps = (/**/) => ({
});

const mapDispatchToProps = (/*dispatch*/) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
