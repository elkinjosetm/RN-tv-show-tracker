import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconWrapper extends Component {
	static propTypes = {
		name    : PropTypes.string.isRequired,
		size    : PropTypes.number,
		color   : PropTypes.string,
		onPress : PropTypes.func,
	};

	static defaultProps = {
		size    : 12,
		color   : null,
		onPress : undefined,
	};

	shouldComponentUpdate = ({ name, color }) => (
		name !== this.props.name ||
		color !== this.props.color
	)

	render() {
		const { name, size, color, onPress } = this.props;

		return (
			<Icon
				name={ name }
				size={ size }
				color={ color }
				onPress={ onPress }
			/>
		);
	}
}
