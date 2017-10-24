import Actions from './';

/* ------------- Thunks actions ------------- */
export const init = () => (dispatch => {
	dispatch(Actions.init());
});

export default {
	init,
};
