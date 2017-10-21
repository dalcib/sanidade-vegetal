
import * as React from 'react';
//import {Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native';
//import {Text, View} from 'react-native';
import ToolbarExperimental from './../widgets/toolbarexperimental';

let theme = 'paperGreen';

interface Actions {
        icon: string;
        onPress?: () => void;
}

interface MenuActions {
        onPress?: () => void;
        labels?: string[];
}

interface Searchable {
        onChangeText?: () => void;
        onSearchClosed?: () => void;
        placeholder?: string;
        onSearchPressed?: () => void;
        onSubmitEditing?: () => void;
        autoFocus?: boolean;
    }

interface ToolbarStyle {
        toolbarContainer?: any;
        titleContainer?: any;
        leftIconContainer?: any;
        rightIconContainer?: any;
    }

interface IToolbar  {
    actions?: Actions[];
    icon?: string;
    iconProps?: any;
    isSearchActive?: boolean;
    menuActions?: MenuActions;
    onIconPress?: () => void;
    onTitlePress?: () => void;
    primary?: any;
    searchable?: Searchable;
    style?: ToolbarStyle;
    theme?: any;
    title?: string;
    translucent?: boolean;
};

const Toolbar: React.SFC<IToolbar> = ({title, isSearchActive, searchable}) => {

    return (
            <ToolbarExperimental
            icon={'menu'}
            primary={theme}
            title={title}
            searchable={searchable}
            isSearchActive={isSearchActive}
            onIconPress={() => {Actions.refresh({key:'drawer', open:true});}}
        />);
};
            // actions={actions}

                          //actions={[{icon: 'warning'},  {icon: 'help', onPress: ()=>{}}]}  
                          //rightIconContainer={{margin: 10}}

export default observer(Toolbar);
