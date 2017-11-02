import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from '@components';
import { Colors } from '@theme';
import Strings from '@i18n';
import styles from './styles';

const screenStrings = Strings.screen.home;

class HomeContainer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title       : screenStrings.title,
		headerLeft  : (
			<TouchableHighlight
				style={ styles.navButton }
				onPress={ () => navigation.showMenu(true) }
				underlayColor={ Colors.fieldShadow }
			>
				<View>
					<Icon
						name="bars"
						size={ 15 }
						color={ Colors.white }
					/>
				</View>
			</TouchableHighlight>
		),
		headerRight : (
			<TouchableHighlight
				style={ styles.navButton }
				onPress={ () => navigation.navigate('newShow') }
				underlayColor={ Colors.fieldShadow }
			>
				<View>
					<Icon
						name="plus"
						size={ 16 }
						color={ Colors.white }
					/>
				</View>
			</TouchableHighlight>
		),
	});

	render() {
		return (
			<View style={ styles.container }>
				<Text>{ screenStrings.emptyList }</Text>
			</View>
		);
	}
}

const mapStateToProps = (/**/) => ({
});

const mapDispatchToProps = (/*dispatch*/) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
