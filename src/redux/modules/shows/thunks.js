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
	const { name, seasons } = getState().shows.tempShow;

	if (isEmpty(name) || isEmpty(seasons)) {
		Toast.show(Strings.error.nameRequired);
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

export default {
	save,
};
