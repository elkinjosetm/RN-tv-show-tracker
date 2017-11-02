import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Strings from '@i18n';
import { TextField } from '@components';
import styles from './styles';

const viewStrings = Strings.screen.newShow;

export default class NewShowComponent extends Component {
	render() {
		const { show } = this.props;

		return (
			<ScrollView>
				<View style={ styles.formGroup }>
					<Text style={ styles.controlLabel }>{ viewStrings.name }</Text>
					<TextField
						module='shows'
						property='tempShow.name'
						value={ show.name }
						placeholder={ viewStrings.name }
					/>
				</View>
			</ScrollView>
		);
	}
}
