import moment from 'moment';
import { NavigationActions } from 'react-navigation';
import { isEmpty } from 'lodash';
import Toast from 'react-native-simple-toast';
import { v4 as newUUID } from 'uuid';
import { _SHOW_STATUS_ } from '@constants';
import Strings from '@i18n';
import Actions from './';

/* ------------- Thunks actions ------------- */
export const save = () => ((dispatch, getState) => {
	const { tempShow } = getState().shows;
	const { name, seasons } = tempShow;

	if (!isValidShow(tempShow)) {
		Toast.show(Strings.error.requiredData);
		return;
	}

	const uuid = newUUID();
	const createdDate = moment().format();

	dispatch(Actions.addShow({
		name,
		uuid,
		createdDate,
		seasons,
		status : _SHOW_STATUS_.active,
	}));

	dispatch(Actions.resetTempShow());
	dispatch(NavigationActions.back());
});

const isValidShow = ({ name, seasons }) => {
	let valid = true;

	valid = valid ? !isEmpty(name) : valid;
	valid = valid ? !isEmpty(seasons) : valid;

	return valid;
};

export default {
	save,
};
