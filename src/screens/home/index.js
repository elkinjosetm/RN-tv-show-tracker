import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
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
		const { shows } = this.props;

		return (
			<ScrollView style={ styles.container }>
				<For
					each='show'
					index='index'
					of={ shows }
				>
					<View
						key={ show.uuid }
					>
						<Text>{ show.name }</Text>
						<Text>{ Strings.formatString(screenStrings.seasons, show.seasons.length) }</Text>
					</View>
				</For>
				<If condition={ isEmpty(shows) }>
					<Text>{ screenStrings.emptyList }</Text>
				</If>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ shows }) => ({
	shows : shows.data,
});

const mapDispatchToProps = (/*dispatch*/) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
