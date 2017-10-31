import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from '@components';
import { Colors } from '@theme';
import Strings from '@i18n';
import styles from './styles';

class HomeContainer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title       : Strings.screen.home.title,
		headerLeft  : (
			<Icon
				name="bars"
				size={ 15 }
				color={ Colors.white }
				onPress={ () => navigation.navigate('DrawerOpen') }
			/>
		),
		headerRight : (
			<Icon
				name="plus"
				size={ 16 }
				color={ Colors.white }
				onPress={ () => navigation.navigate('newShow') }
			/>
		),
	});

	render() {
		return (
			<View style={ styles.container }>
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
