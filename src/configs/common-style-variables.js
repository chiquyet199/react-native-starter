import Color from 'color';

const MODIFIER = 0.1;

export const commonStyle = {
	$primary: '#C12127',
	$primaryDarker: Color('#C12127').darken(MODIFIER),
	$primaryLighter: Color('#C12127').lighten(MODIFIER),
	$gray: '#c3c3c3',
};
