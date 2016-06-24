import {
    Animated,
    findNodeHandle,
    NativeModules,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, { Component, PropTypes } from 'react';

import {Icon, IconToggle, COLOR, TYPO, PRIMARY, THEME_NAME, PRIMARY_COLORS} from 'react-native-material-design';

/***
 */
function getColor(string) {
    if (string) {
        if (string.indexOf('#') > -1 || string.indexOf('rgba') > -1) {  return string; }
        if (COLOR[string]) { return COLOR[string].color; }
        if (COLOR[`${string}500`]) { return COLOR[`${string}500`].color; }
    }
    return COLOR[`${PRIMARY}500`].color;
}

function isFunction(obj) { return !!(obj && obj.constructor && obj.call && obj.apply);}
 /* 
 */

const UIManager = NativeModules.UIManager;

interface actions {
        icon: string,
        onPress?: ()=>void
}

interface menuActions {
        onPress?: ()=>void;
        labels?: string[];
}

interface searchable {
        onChangeText?: ()=>void;
        onSearchClosed?: ()=>void;
        placeholder?: string;
        onSearchPressed?: ()=>void;
        onSubmitEditing?: ()=>void;
        autoFocus?: boolean;
    }

interface toolbarStyle{
        toolbarContainer?: any;
        titleContainer?: any;
        leftIconContainer?: any;
        rightIconContainer?: any;
    }

interface IToolbar  {
    actions?: actions[];
    icon?: string;
    iconProps?: any;
    isSearchActive?: boolean;
    menuActions?: menuActions;
    onIconPress?: ()=>void;
    onTitlePress?: ()=>{};
    primary?: any,
    searchable?: searchable;
    style?: toolbarStyle;
    theme?: any,
    title?: string;
    translucent?: boolean
};


const propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        onPress: PropTypes.func,
    })),
    icon: PropTypes.string,
    iconProps: PropTypes.shape({
        size: PropTypes.number,
        color: PropTypes.string,
    }),
    isSearchActive: PropTypes.bool,
    menuActions: PropTypes.shape({
        onPress: PropTypes.func,
        labels: PropTypes.array
    }),
    onIconPress: PropTypes.func,
    onTitlePress: PropTypes.func,
    primary: PropTypes.oneOf(PRIMARY_COLORS),
    searchable: PropTypes.shape({
        onChangeText: PropTypes.func,
        onSearchClosed: PropTypes.func,
        placeholder: PropTypes.string,
        onSearchPressed: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        autoFocus: PropTypes.bool
    }),
    style: PropTypes.shape({
        toolbarContainer: PropTypes.object,
        titleContainer: PropTypes.object,
        leftIconContainer: PropTypes.object,
        rightIconContainer: PropTypes.object,
    }),
    theme: PropTypes.oneOf(THEME_NAME),
    title: PropTypes.string,
    translucent: PropTypes.bool,
};

const defaultProps = {
    elevation: 4,
    iconProps: {
        size: 24,
        color: 'rgba(255,255,255,.87)',
    },
    primary: PRIMARY,
    style: {},
    theme: 'dark',
};

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        position: 'absolute',
        left:     0,
        right:     0,
        top:      0,
    },
    titleContainer: {
        flex: 1,
    },
    searchInput: TYPO.paperFontTitle,
    leftIconContainer: {
        margin: 16,
    },
    rightIconContainer: {
        margin: 16,
    },
    leftIcon: {
        margin: 16,
    },
    rightIcon: {
        margin: 16,
    }
});

class Toolbar extends Component <IToolbar,{isSearchActive:boolean, searchvalue:string}> {
    constructor(props) {
        super(props);
console.log(props)
        this.state = {
            isSearchActive: props.isSearchActive,
            searchValue: ''
        };
    }
    onMenuPressed = () => {
        const { menuActions } = this.props;

        UIManager.showPopupMenu(
            findNodeHandle(this.refs.menu),
            menuActions.labels,
            () => {},
            menuActions.onPress
        );
    };
    onSearchTextChanged = (value) => {
        const { searchable } = this.props;

        if (isFunction(searchable.onChangeText)) {
            searchable.onChangeText(value);
        }

        this.setState({ searchValue: value });
    };
    onSearchPressed = () => {
        const { searchable } = this.props;

        if (isFunction(searchable.onSearchPressed)) {
            searchable.onSearchPressed();
        }

        this.setState({
            isSearchActive: true,
            searchValue: ''
        });
    };
    onSearchClosePressed = () => {
        const { searchable } = this.props;

        if (isFunction(searchable.onSearchClosed)) {
            searchable.onSearchClosed();
        }

        this.setState({
            isSearchActive: false,
            searchValue: ''
        });
    };
    getStyle = () => {
        const { style, primary, theme, translucent, iconProps } = this.props;

        let selectedTheme = {};

        if (this.state.isSearchActive || theme === 'light') {
            selectedTheme = {
                backgroundColor: '#ffffff',
                color: 'rgba(0,0,0,.87)',
                leftIconColor: 'rgba(0,0,0,.54)',
                rightIconColor: 'rgba(0,0,0,.54)'
            };
        } else {
            selectedTheme = {
                backgroundColor: getColor(primary),
                color: 'rgba(255,255,255,.87)',
                leftIconColor: 'rgba(255,255,255,.87)',
                rightIconColor: 'rgba(255,255,255,.87)'
            };
        }

        const result = {};
        let searchStyle = {};

        if (this.state.isSearchActive) {
            searchStyle = {
                toolbarContainer: { backgroundColor: getColor('paperGrey100') },
                titleText: {
                    color: 'rgba(0,0,0,.87)',
                    fontSize: 16,
                    fontWeight: 'normal',
                },
                leftIcon: { color: 'rgba(0,0,0,.54)' },
                rightIcon: { color: 'rgba(0,0,0,.54)' },
            };
        }

        result.toolbarContainer = [
            styles.toolbarContainer,
            { backgroundColor: selectedTheme.backgroundColor },
            searchStyle.toolbarContainer,
            translucent ? {
                elevation: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
            } : null,
            style.toolbarContainer,
        ];
        result.titleContainer = [
            styles.titleContainer,
            searchStyle.titleContainer,
            style.titleContainer
        ];
        result.titleText = [
            styles.titleText,
            TYPO.paperFontTitle,
            { color: selectedTheme.color },
            searchStyle.titleText,
            style.titleText
        ];
        result.leftIconContainer = [
            styles.leftIconContainer,
            searchStyle.leftIconContainer,
            style.leftIconContainer
        ];
        result.rightIconContainer = [
            styles.rightIconContainer,
            searchStyle.rightIconContainer,
            style.rightIconContainer
        ];
        result.leftIcon = [
            styles.leftIcon,
            searchStyle.leftIcon,
            style.leftIcon
        ];
        result.rightIcon = [
            styles.rightIcon,
            searchStyle.rightIcon,
            style.rightIcon
        ];
        result.iconProps = {
            size: iconProps.size,
            color: selectedTheme.leftIconColor,
        };

        return result;
    }
    focusSearchField() {
        this._searchFieldRef.focus();
    }
    renderLeftSide = (style) => {
        const { icon, onIconPress } = this.props;

        let iconName = icon;
        let onPress = onIconPress;

        if (this.state.isSearchActive) {
            iconName = 'arrow-back';
            onPress = this.onSearchClosePressed;
        }

        return (
            <View style={style.leftIconContainer}>
                <IconToggle color={style.iconProps.color} onPress={onPress}>
                    <Icon
                      name={iconName}
                      size={style.iconProps.size}
                      color={style.iconProps.color}
                    />
                </IconToggle>
            </View>
        );
    }
    renderCenter = (style) => {
        console.log('afsadfsdafsdafsdaf',this.state.isSearchActive, this.props.title);
        
        if (!this.state.isSearchActive) {
            const { title, onTitlePress } = this.props;

            return (
                <TouchableWithoutFeedback key="center" onPress={onTitlePress}>
                    <Animated.View style={style.titleContainer}>
                        <Text numberOfLines={1} style={style.titleText}>
                            {title}
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            );
        }

        const { searchable } = this.props;

        return (
            <View style={style.titleContainer}>
                <TextInput
                  ref={(ref) => { this._searchFieldRef = ref; }}
                  autoFocus={searchable.autoFocus}
                  onChangeText={this.onSearchTextChanged}
                  onSubmitEditing={searchable.onSubmitEditing}
                  placeholder={searchable.placeholder}
                  style={style.titleText}
                  underlineColorAndroid="transparent"
                  value={this.state.searchValue}
                />
            </View>
        );
    }
    renderRightSide = (style) => {
        const { actions, menuActions, searchable } = this.props;

        let actionsMap = actions;

        if (this.state.isSearchActive) {
            actionsMap = [{
                icon: 'clear',
                onPress: () => this.onSearchTextChanged('')
            }];
        }

        let result = [];

        if (actionsMap) {
            result = actionsMap.map((action, i) => (
                <IconToggle
                  key={i}
                  color={style.iconProps.color}
                  badge={action.badge}
                  onPress={action.onPress}
                  disabled={action.disabled}
                >
                    <Icon
                      name={action.icon}
                      size={style.iconProps.size}
                      color={style.iconProps.color}
                      style={style.rightIcon}
                    />
                </IconToggle>
            ));
        }

        if (searchable && !this.state.isSearchActive) {
            result.push(
                <IconToggle
                  key="searchIcon"
                  color={style.iconProps.color}
                  onPress={this.onSearchPressed}
                >
                    <Icon name="search"
                      size={style.iconProps.size}
                      color={style.iconProps.color}
                      style={style.rightIcon}
                    />
                </IconToggle>
            );
        }
        if (menuActions && !this.state.isSearchActive) {
            result.push(
                <IconToggle
                  key="menuIcon"
                  color={style.iconProps.color}
                  onPress={this.onMenuPressed}
                >
                    <Icon
                      ref="menu"
                      name="more-vert"
                      size={style.iconProps.size}
                      color={style.iconProps.color}
                      style={style.rightIcon}
                    />
                </IconToggle>
            );
        }

        return result;
    }
    render() {
        const style = this.getStyle();

        return (
            <Animated.View style={style.toolbarContainer}>
                { this.renderLeftSide(style) }
                { this.renderCenter(style) }
                { this.renderRightSide(style) }
            </Animated.View>
        );
    }

}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;