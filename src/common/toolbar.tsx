
import * as React from 'react';
import {Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react/native'
import {Text, View} from 'react-native';
import ToolbarExperimental from './../widgets/toolbarexperimental'

var theme = 'paperGreen'; 

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
    onTitlePress?: ()=>void;
    primary?: any,
    searchable?: searchable;
    style?: toolbarStyle;
    theme?: any,
    title?: string;
    translucent?: boolean
};




const Toolbar: React.SFC<IToolbar> = ({title, actions, isSearchActive, searchable}) => {


    return (
            <ToolbarExperimental  
            icon={'menu'} 
            primary={theme} 
            title={title} 
            searchable={searchable}
            isSearchActive={isSearchActive}
            onIconPress={()=>{Actions.refresh({key:'drawer', open:true})}}
        />)
}
            // actions={actions}

                          //actions={[{icon: 'warning'},  {icon: 'help', onPress: ()=>{}}]}  
                          //rightIconContainer={{margin: 10}}

export default observer(Toolbar)