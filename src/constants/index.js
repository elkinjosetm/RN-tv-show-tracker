import { reduce } from 'lodash';

export const _SHOW_STATUS_ = reduce([
	'active',
	'completed'
], (result, value) => {
	const _result = result;
	_result[value] = value;
	return _result;
}, {});

export default {
	_SHOW_STATUS_,
};
