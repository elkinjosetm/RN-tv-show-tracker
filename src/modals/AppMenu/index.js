import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppActions from '@redux.modules/app';
import { Icon } from '@components';
import { Colors } from '@theme';
import styles from './styles';

class AppMenuContainer extends Component {
	closeModal = () => this.props.showMenu(false)

	render() {
		const { show } = this.props;

		return (
			<Modal
				visible={ show }
				animationType='fade'
				transparent
				onRequestClose={ this.closeModal }
			>
				<View style={ styles.container }>
					<View style={ styles.closeButton }>
						<Icon
							name='times'
							size={ 30 }
							color={ Colors.white }
							onPress={ this.closeModal }
						/>
					</View>
				</View>
			</Modal>
		);
	}
}

const mapStateToProps = ({ app }) => ({
	show : app.menu,
});

const mapDispatchToProps = dispatch => ({
	showMenu : bindActionCreators(AppActions, dispatch).showMenu,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMenuContainer);
