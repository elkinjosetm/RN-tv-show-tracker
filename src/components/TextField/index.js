import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { isUndefined, isFunction } from 'lodash';
import GlobalsActions from '@redux.modules/globals';
import config from '@config';
import { Colors } from '@theme';
import styles from './styles';

class TextField extends Component {
	static propTypes = {
		module                : PropTypes.string.isRequired,
		property              : PropTypes.string.isRequired,
		value                 : PropTypes.string,
		secureTextEntry       : PropTypes.bool,
		autoCorrect           : PropTypes.bool,
		autoFocus             : PropTypes.bool,
		blurOnSubmit          : PropTypes.bool,
		placeholder           : PropTypes.string,
		underlineColorAndroid : PropTypes.string,
		autoCapitalize        : PropTypes.oneOf([
			'none',
			'sentences',
			'words',
			'characters',
		]),
		keyboardType          : PropTypes.oneOf([
			'default',
			'email-address',
			'numeric',
			'phone-pad',
			'ascii-capable',
			'numbers-and-punctuation',
			'url',
			'number-pad',
			'name-phone-pad',
			'decimal-pad',
			'twitter',
			'web-search',
		]),
		returnKeyType         : PropTypes.oneOf([
			'done',
			'go',
			'next',
			'search',
			'send',
			'none', // Android Only
			'previous', // Android Only
			'default', // iOS Only
			'emergency-call', // iOS Only
			'google', // iOS Only
			'join', // iOS Only
			'route', // iOS Only
			'yahoo', // iOS Only
		]),
		onFocus               : PropTypes.func,
		onEndEditing          : PropTypes.func,
		onSubmitEditing       : PropTypes.func,
		hasErrors             : PropTypes.bool,
	};

	static defaultProps = {
		value                 : '',
		secureTextEntry       : false,
		autoFocus             : false,
		blurOnSubmit          : false,
		autoCapitalize        : 'sentences',
		autoCorrect           : true,
		keyboardType          : 'default',
		placeholder           : '',
		underlineColorAndroid : 'transparent',
		returnKeyType         : undefined,
		onFocus               : undefined,
		onEndEditing          : undefined,
		onSubmitEditing       : undefined,
		hasErrors             : false
	};

	state = {
		value : this.props.value,
	};

	debounceTimeout = null;

	debounceCallback = null;

	componentWillReceiveProps = ({ value }) => {
		if (this.state.value !== value)
			this.setState({ value });
	}

	shouldComponentUpdate = ({ hasErrors }, { value }) => (
		hasErrors !== this.props.hasErrors ||
		value !== this.state.value
	)

	changeHandler = value => {
		this.setState({ value });

		/**
		 * Clear debounceTimeout to prevent updating the Store
		 * multiple times using the JS native function
		 * clearTimeout
		 */
		if (this.debounceTimeout !== null)
			clearTimeout(this.debounceTimeout);

		this.debounceCallback = this.updateStore.bind(null, value);

		// Define a timeout to update save the field into Store
		this.debounceTimeout = setTimeout(this.debounceCallback, config.App.fieldTimeout);
	}

	updateStore = value => {
		const {
			module,
			property,
			setFieldValue,
		} = this.props;

		setFieldValue(module, property, value);
	}

	onSubmitEditing = () => {
		const { onSubmitEditing } = this.props;

		/**
		 * Manually execute the debounceCallback
		 * and clear the timeout right away
		 */
		if (this.debounceTimeout !== null) {
			clearTimeout(this.debounceTimeout);
			this.debounceCallback();
		}

		/**
		 * Execute onSubmitEditing
		 * when JS thread is empty
		 */
		if (!isUndefined(onSubmitEditing) && isFunction(onSubmitEditing))
			setTimeout(onSubmitEditing, 0);
	}

	focus = () => this.toggleFocus()

	blur = () => this.toggleFocus(false)

	toggleFocus = (focus = true) => {
		const ref = this.field;

		if (focus)
			ref.focus();
		else
			ref.blur();
	}

	render() {
		const { hasErrors } = this.props;
		const { value } = this.state;
		const props = {
			...this.props,
			value,
			ref                  : ref => { this.field = ref; },
			style                : [styles.formControl, hasErrors ? styles.formControlError : undefined],
			onChangeText         : this.changeHandler,
			onSubmitEditing      : this.onSubmitEditing,
			placeholderTextColor : Colors.placeholder,
		};

		return (
			<TextInput { ...props } />
		);
	}
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
	setFieldValue : bindActionCreators(GlobalsActions, dispatch).setFieldValue,
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef : true })(TextField);
