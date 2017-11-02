/*
	Style helpers like:
	fontHelpers : {
		ff_regular  : { fontFamily : 'Font-Name-Regular' },
		ff_semiBold : { fontFamily : 'Font-Name-SemiBold' },
		ff_bold     : { fontFamily : 'Font-Name-Bold' },
	},

	So later in the app, we will just use it like:

	...Helpers.fontHelpers.ff_regular

	That way you can change the font later in the app
	for regular/semiBold/bold or whatever other fount
	you may need/want to use.
*/
export default {
	marginHelpers : {
		mb_16 : { marginBottom : 16 },
	},

	fontHelpers : {
		ff_regular  : {},
		ff_semiBold : {},
		ff_bold     : {},
	},
};
