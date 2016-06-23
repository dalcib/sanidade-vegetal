import * as React from 'react';
//import DropDown, {Select, Option, OptionList,} from 'react-native-selectme';

interface Props { }
interface State { }



declare module 'react-native-selectme' {

export class DropDown extends React.Component<Props, State> { }
export class Select extends React.Component<Props, State> { }
export class Option extends React.Component<Props, State> { }
export class OptionList extends React.Component<Props, State> { }


export default DropDown
}
