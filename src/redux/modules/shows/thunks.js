import moment from 'moment';
import { NavigationActions } from 'react-navigation';
import { v4 as newUUID } from 'uuid';
import { _SHOW_STATUS_ } from '@constants';
import Actions from './';

/* ------------- Thunks actions ------------- */
export const goToStep2 = () => ((dispatch, getState) => {
	const { name } = getState().shows.tempShow;

	dispatch(Actions.addShow({
		name,
		uuid        : newUUID(),
		status      : _SHOW_STATUS_.active,
		createdDate : moment().format(),
	}));

	dispatch(NavigationActions.navigate({ routName : 'addSeason' }));
});

export default {
	goToStep2,
};
