import { NavigationRouter } from '@routers/AppRouter';

const { router } = NavigationRouter;

const firstAction = router.getActionForPathAndParams('index');
const tempNavState = router.getStateForAction(firstAction);

/* ------------- Initial State ------------- */
export const INITIAL_STATE = router.getStateForAction(tempNavState);

export const reducer = (state = INITIAL_STATE, action) => {
	const nextState = router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default reducer;
