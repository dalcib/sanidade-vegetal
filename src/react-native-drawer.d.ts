declare module 'react-native-drawer' {
	import * as React from 'react';

	export interface DrawerProps {
		acceptDoubleTap?: boolean;
		acceptPan?: boolean;
		acceptTap?: boolean;
		captureGestures?: any;
		children?: React.ReactNode;
		closedDrawerOffset?: ((...args: any[]) => any) | number;
		content?: React.ReactNode;
		disabled?: boolean;
		elevation?: number;
		initializeOpen?: boolean;
		open?: boolean;
		negotiatePan?: boolean;
		onClose?: (...args: any[]) => any;
		onCloseStart?: (...args: any[]) => any;
		onOpen?: (...args: any[]) => any;
		onOpenStart?: (...args: any[]) => any;
		openDrawerOffset?: ((...args: any[]) => any )| number;
		panThreshold?: number;
		panCloseMask?: number;
		panOpenMask?: number;
		side?: any;
		styles?: any;
		tapToClose?: boolean;
		tweenDuration?: number;
		tweenEasing?: string;
		tweenHandler?: (...args: any[]) => any;
		type?: any;
		useInteractionManager?: boolean;
		panStartCompensation?: boolean;
		openDrawerThreshold?: any;
	}

	export default class Drawer extends React.Component<DrawerProps, any> {
	}
}
