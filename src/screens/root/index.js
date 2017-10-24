import React, { Component } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from '@theme';
import AppRouter from '@routers/AppRouter';
import styles from './styles';

class RootContainer extends Component {
	componentWillMount() {
		this.statusBarConfig = {
			...Platform.select({
				android : {
					backgroundColor : Colors.pictonBlue,
					translucent     : true,
				}
			}),
			barStyle : 'light-content',
		};
	}

	render() {
		return (
			<View style={ styles.application }>
				<View style={ styles.statusBar }>
					<StatusBar { ...this.statusBarConfig } />
				</View>
				<AppRouter />
			</View>
		);
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (/*dispatch*/) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
