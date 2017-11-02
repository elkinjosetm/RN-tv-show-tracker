import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { Cell, Section, TableView, } from 'react-native-tableview-simple';
import { connect } from 'react-redux';
import { isEmpty, filter } from 'lodash';
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
		const activeShows = filter(shows, 'active');
		const comingShows = filter(shows, ['active', false]);

		return (
			<ScrollView style={ styles.container }>
				<TableView>
					<If condition={ !isEmpty(activeShows) }>
						<Section header={ screenStrings.active }>
							<For
								each='show'
								index='index'
								of={ activeShows }
							>
								<Cell
									key={ show.uuid }
									cellStyle="Subtitle"
									title={ show.name }
									detail={ Strings.formatString(screenStrings.seasons, show.seasons.length) }
									accessory="DisclosureIndicator"
									onPress={ () => console.log('Heyho!') }
								/>
							</For>
						</Section>
					</If>
					<If condition={ !isEmpty(comingShows) }>
						<Section header={ screenStrings.coming }>
							<For
								each='show'
								index='index'
								of={ comingShows }
							>
								<Cell
									key={ show.uuid }
									cellStyle="Subtitle"
									title={ show.name }
									detail={ Strings.formatString(screenStrings.seasons, show.seasons.length) }
									accessory="DisclosureIndicator"
									onPress={ () => console.log('Heyho!') }
								/>
							</For>
						</Section>
					</If>
				</TableView>
				<If condition={ isEmpty(shows) }>
					<View style={ styles.emptyState }>
						<Icon
							name='television'
							size={ 55 }
							color={ Colors.abbey }
						/>
						<Text style={ styles.emptyTitle }>{ screenStrings.emptyTitle }</Text>
						<Text style={ styles.emptyDescription }>{ screenStrings.emptyDescription }</Text>
					</View>
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
