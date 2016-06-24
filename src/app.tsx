
import * as React from 'react';
import { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, BackAndroid, Image} from 'react-native';
import {Scene, Router, Actions, DefaultRenderer} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import {Drawer as MaterialDrawer,  COLOR, TYPO} from 'react-native-material-design';
import SearchPage from './widgets/search'
import ToolbarExperimental from './widgets/toolbarexperimental'
import Menu from './common/menu'
import Toolbar from './common/toolbar'
import Alp from './scenes/alp'
import CefitiForm from './cefiti/form'
// import Mapa from './scenes/mapa'
// import Mapa from './scenes/mapa'
// import Mapa from './scenes/mapa'
// import Mapa from './scenes/mapa'
// import Mapa from './scenes/mapa'


import Home  from './scenes/home'
 
var theme = 'paperGreen'; 

//import { typography } from 'react-native-material-design-styles';
//const TYPO = StyleSheet.create(typography);

/*interface actions {icon: string, onPress?: ()=>void}


const Bar: React.SFC<{title?:string, actions?:actions[]}> = ({title, actions}) => <ToolbarExperimental  
                        icon={'menu'} primary={theme} title={title} actions={actions}
                        onIconPress={()=>{Actions.refresh({key:'drawer', open:true})}}
                     />*/

                          //actions={[{icon: 'warning'},  {icon: 'help', onPress: ()=>{}}]}  
                          //rightIconContainer={{margin: 10}}

export default class App extends React.Component <{},{}> {
  render() {
    return <Router navBar={Toolbar}  > 
    <Scene key="root" >  
        <Scene key="drawer" component={NavDrawer} sceneStyle={{flex:1}} > 
          <Scene key='main' > 
            <Scene key="home" component={Home} title={'Home'}  sceneStyle={styles.scene}  />
            <Scene key="alp" component={Alp} title={"Áreas Livre de Praga"} sceneStyle={styles.scene}  />
            <Scene key="cefitiForm" component={CefitiForm} title={"CEFiTI"} sceneStyle={styles.scene} initial={true}/>
            <Scene 
                navBar={()=><Toolbar isSearchActive={true} searchable={{placeholder: 'Busca'}} actions={[{icon: 'warning'}]}  />}
                key="search" 
                component={SearchPage}  
                sceneStyle={styles.scene} 
                
                 />
          </Scene>
        </Scene>
      </Scene> 
    </Router>
  }  
}

class NavDrawer extends Component <{drawer:any, navigationState:any, onNavigate:any},{}>  {
    
    drawer: any;
    closeControlPanel () {
      this.drawer.close()
    };

    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="overlay"
                content={<Menu closeDrawer={this.closeControlPanel.bind(this)} />}
                captureGestures={true}
                tapToClose={true}
                acceptTap={true}
                elevation={8}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

//if (Platform.OS === 'android') {
BackAndroid.addEventListener('hardwareBackPress', function() {
    Actions.pop(); 
    return true
})


const styles = StyleSheet.create<any>({
  scene: {
	flex: 1,
	marginTop: 56
	}
});


