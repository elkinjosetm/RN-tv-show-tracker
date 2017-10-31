import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from '@components';
import { Colors } from '@theme';
import Strings from '@i18n';
import NewShowComponent from './index.component';
import styles from './styles';

class NewShowContainer extends Component {
	static navigationOptions = ({ navigation }) => ({
		title       : Strings.screen.newShow.title,
		headerLeft  : (
			<Icon
				name='chevron-left'
				size={ 15 }
				color={ Colors.white }
				onPress={ () => navigation.goBack() }
			/>
		),
		headerRight : <View /> // Android fix
	});

	render() {
		const { show } = this.props;

		return (
			<View style={ styles.container }>
				<NewShowComponent
					show={ show }
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ shows }) => ({
	show : shows.newShow,
});

const mapDispatchToProps = (/*dispatch*/) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NewShowContainer);
