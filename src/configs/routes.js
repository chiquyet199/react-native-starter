import { TabNavigator, StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import Home from 'screens/Home';
import About from 'screens/About';
import Settings from 'screens/Settings';
import { commonStyle } from './common-style-variables';

export const SettingsStack = StackNavigator({
	Settings: {
		screen: Settings,
		navigationOptions: {
			title:
				'Settings',
		},
	},
});

export const Tabs = TabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				title:
					'Home',
			},
		},
		About: {
			screen: About,
			navigationOptions: {
				title:
					'About',
			},
		},
	},
	{
		tabBarPosition:
			'bottom', // So your Android tabs go bottom
		tabBarOptions: {
			activeTintColor:
				commonStyle.$primaryLighter, // Color of tab when pressed
			inactiveTintColor:
				commonStyle.$gray, // Color of tab when not pressed
			showIcon:
				'true', // Shows an icon for both iOS and Android
			showLabel:
				Platform.OS !==
				'android', // No label for Android
			labelStyle: {
				fontSize: 20,
				paddingBottom: 10,
			},
			style: {
				backgroundColor:
					'#fff', // Makes Android tab bar white instead of standard blue
				height:
					Platform.OS ===
					'ios'
						? 48
						: 50, // I didn't use this in my app, so the numbers may be off.
			},
		},
	},
);

export const Root = StackNavigator(
	{
		Tabs: {
			screen: Tabs,
		},
		Settings: {
			screen: SettingsStack,
		},
	},
	{
		mode:
			'modal',
		headerMode:
			'none',
	},
);
