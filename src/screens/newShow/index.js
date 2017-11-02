import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from '@components';
import { Colors } from '@theme';
import Strings from '@i18n';
import Actions, { thunks } from '@redux.modules/shows';
import NewShowComponent from './index.component';
import styles from './styles';

class NewShowContainer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title       : Strings.screen.newShow.title,
		headerLeft  : (
			<TouchableHighlight
				style={ styles.navButton }
				onPress={ () => navigation.goBack() }
				underlayColor={ Colors.fieldShadow }
			>
				<View>
					<Icon
						name='chevron-left'
						size={ 15 }
						color={ Colors.white }
					/>
				</View>
			</TouchableHighlight>
		),
		headerRight : (
			<TouchableHighlight
				style={ styles.navButton }
				onPress={ () => navigation.dispatch(thunks.save()) }
				underlayColor={ Colors.fieldShadow }
			>
				<View>
					<Icon
						name='check'
						size={ 15 }
						color={ Colors.white }
					/>
				</View>
			</TouchableHighlight>
		),
	});

	render() {
		const { tempShow, addSeason, removeSeason } = this.props;

		return (
			<View style={ styles.container }>
				<NewShowComponent
					tempShow={ tempShow }
					addSeason={ addSeason }
					removeSeason={ removeSeason }
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ shows }) => ({
	tempShow : shows.tempShow,
});

const mapDispatchToProps = dispatch => ({
	dispatch,
	addSeason : bindActionCreators(Actions, dispatch).addSeason,
	removeSeason : bindActionCreators(Actions, dispatch).removeSeason,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewShowContainer);
