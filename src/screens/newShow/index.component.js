import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Colors } from '@theme';
import { TextField, Icon } from '@components';
import Strings from '@i18n';
import styles from './styles';

const viewStrings = Strings.screen.newShow;

export default class NewShowComponent extends Component {
	render() {
		const { tempShow, addSeason, removeSeason } = this.props;

		return (
			<ScrollView>
				<View style={ styles.formGroup }>
					<Text style={ styles.controlLabel }>{ viewStrings.name }</Text>
					<TextField
						module='shows'
						property='tempShow.name'
						value={ tempShow.name }
						placeholder={ viewStrings.name }
					/>
				</View>
				<View style={ styles.seasonsTitleContainer }>
					<Text style={ styles.seasonsTitle }>{ viewStrings.seasons }</Text>
					<TouchableHighlight
						style={ [styles.button, styles.addButton] }
						onPress={ addSeason }
						underlayColor={ Colors.fieldShadow }
					>
						<View>
							<Icon
								name='plus'
								size={ 15 }
								color={ Colors.primary }
							/>
						</View>
					</TouchableHighlight>
				</View>
				<For
					each='season'
					index='index'
					of={ tempShow.seasons }
				>
					<View
						key={ `season_${index}` }
						style={ styles.formGroup }
					>
						<Text style={ styles.controlLabel }>{ Strings.formatString(viewStrings.seasonName, index + 1) }</Text>
						<TextField
							module='shows'
							property={ `tempShow.seasons[${index}].name` }
							value={ tempShow.seasons[index].name }
							placeholder={ viewStrings.name }
						/>
						<TouchableHighlight
							style={ [styles.button, styles.minusButton] }
							onPress={ removeSeason.bind(null, index) }
							underlayColor={ Colors.fieldShadow }
						>
							<View>
								<Icon
									name='minus'
									size={ 15 }
									color={ Colors.primary }
								/>
							</View>
						</TouchableHighlight>
					</View>
				</For>
			</ScrollView>
		);
	}
}
