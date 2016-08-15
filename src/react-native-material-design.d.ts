declare module 'react-native-material-design' {
	import * as React from 'react';

	export interface AvatarProps {
		image?: any;
		type?: any;
		icon?: string;
		size?: number;
		color?: string;
		backgroundColor?: string;
		text?: string;
		borderRadius?: number;
		borderColor?: string;
		borderWidth?: number;
	}

	export class Avatar extends React.Component<AvatarProps, any> {
	}
	

	export interface ButtonProps {
		text: string;
		theme?: any;
		primary?: any;
		overrides?: any;
		textColor?: string;
		backgroundColor?: string;
		rippleColor?: string;
		disabled?: boolean;
		raised?: boolean;
		onPress?: (...args: any[]) => any;
		onLongPress?: (...args: any[]) => any;
	}

	export class Button extends React.Component<ButtonProps, any> {
	}
	

	export interface CardProps {
		theme?: string;
		overrides?: any;
		backgroundColor?: string;
		rippleColor?: string;
		elevation?: number;
		disabled?: boolean;
		onPress?: (...args: any[]) => any;
		children: React.ReactNode;
		style?: any;
	}

	export class Card extends React.Component<CardProps, any> {
	}
	

	export interface MediaProps {
		image: any;
		type?: any;
		height?: number;
		overlay?: boolean;
		children?: React.ReactNode;
	}

	export class Media extends React.Component<MediaProps, any> {
	}
	

	export interface BodyProps {
		children: React.ReactNode;
	}

	export class Body extends React.Component<BodyProps, any> {
	}
	

	export interface ActionsProps {
		position?: any;
		children: React.ReactNode;
	}

	export class Actions extends React.Component<ActionsProps, any> {
	}
	

	export interface CheckboxProps {
		label?: string;
		theme?: any;
		primary?: any;
		value: string|number;
		checked?: boolean;
		disabled?: boolean;
		onCheck?: (...args: any[]) => any;
	}

	export class Checkbox extends React.Component<CheckboxProps, any> {
	}
	

	export interface CheckboxGroupProps {
		theme?: any;
		primary?: any;
		onSelect?: (...args: any[]) => any;
		checked?: any[];
		items?: any[];
		value: string|number;
		label?: string;
		disabled?: boolean;
	}

	export class CheckboxGroup extends React.Component<CheckboxGroupProps, any> {
	}
	

	export interface DrawerProps {
		theme?: any;
		primary?: any;
		overrides?: any;
		backgroundColor?: string;
		children: React.ReactNode;
	}

	export class Drawer extends React.Component<DrawerProps, any> {
	}
	

	export interface HeaderProps {
		image?: any;
		type?: any;
		backgroundColor?: string;
		height?: number;
		children?: React.ReactNode;
	}

	export class Header extends React.Component<HeaderProps, any> {
	}
	

	export interface SectionProps {
		title?: string;
		items?: any[];
		icon?: string;
		value: string;
		label?: string;
		onPress?: (...args: any[]) => any;
		onLongPress?: (...args: any[]) => any;
		active?: boolean;
		disabled?: boolean;
	}

	export class Section extends React.Component<SectionProps, any> {
	}
	

	export interface DividerProps {
		inset?: boolean;
		theme?: any;
		style?: any;
	}

	export class Divider extends React.Component<DividerProps, any> {
	}
	

	export interface IconProps {
		name: string;
		style?: any;
		size?: number;
		color?: string;
		allowFontScaling?: boolean;
	}

	export class Icon extends React.Component<IconProps, any> {
	}
	

	export interface IconToggleProps {
		color: string;
		opacity?: number;
		disabled?: boolean;
		onPress?: (...args: any[]) => any;
		percent?: number;
		children: React.ReactElement<any>;
		badge?: any;
		value?: number;
		animate?: boolean;
		backgroundColor?: string;
		textColor?: string;
	}

	export class IconToggle extends React.Component<IconToggleProps, any> {
	}
	

	export interface ListProps {
		primaryText: string;
		secondaryText?: string;
		captionText?: string;
		secondaryTextMoreLine?: any[];
		text: string;
		style?: Object;
		leftIcon?: React.ReactElement<any>;
		rightIcon?: React.ReactElement<any>;
		leftAvatar?: React.ReactElement<any>;
		rightAvatar?: React.ReactElement<any>;
		lines?: number;
		primaryColor?: string;
		onPress?: (...args: any[]) => any;
		onLeftIconClick?: (...args: any[]) => any;
		onRightIconClick?: (...args: any[]) => any;
	}

	export class List extends React.Component<ListProps, any> {
	}
	

	export interface RadioButtonProps {
		label?: string;
		theme?: any;
		primary?: any;
		value: string|number;
		checked?: boolean;
		disabled?: boolean;
		onSelect?: (...args: any[]) => any;
	}

	export class RadioButton extends React.Component<RadioButtonProps, any> {
	}
	

	export interface RippleProps {
		color?: string;
		onPress?: (...args: any[]) => any;
		onLongPress?: (...args: any[]) => any;
		children: React.ReactNode;
	}

	export class Ripple extends React.Component<RippleProps, any> {
	}
	

	export interface RadioButtonGroupProps {
		theme?: any;
		primary?: any;
		onSelect?: (...args: any[]) => any;
		selected?: string|number;
		items?: any[];
		value: string|number;
		label?: string;
		disabled?: boolean;
	}

	export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, any> {
	}
	

	export interface SubheaderProps {
		text: string;
		color?: string;
		inset?: boolean;
		theme?: any;
		lines?: number;
	}

	export class Subheader extends React.Component<SubheaderProps, any> {
	}
	

	export interface ToolbarProps {
		title?: string;
		theme?: any;
		primary?: any;
		style?: any;
		leftIconStyle?: Object;
		rightIconStyle?: Object;
		elevation?: number;
		overrides?: any;
		backgroundColor?: string;
		titleColor?: string;
		leftIconColor?: string;
		rightIconColor?: string;
		icon: string;
		onIconPress?: (...args: any[]) => any;
		actions?: any[];
		onPress?: (...args: any[]) => any;
		counter?: any;
	}

	export class Toolbar extends React.Component<ToolbarProps, any> {
	}

	export const COLOR: any;
	export const TYPO: any;
	export const PRIMARY: string;
	export const PRIMARY_COLORS: string[];
	export const THEME_NAME: string[];

}
