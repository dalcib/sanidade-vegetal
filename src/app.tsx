
import * as React from 'react';
import { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, BackAndroid, Image} from 'react-native';
import {Scene, Router, Actions, DefaultRenderer} from 'react-native-mobx';
import Drawer from 'react-native-drawer';
import {Drawer as MaterialDrawer,  COLOR, TYPO} from 'react-native-material-design';
import SearchPage from './widgets/search'
import ToolbarExperimental from './widgets/toolbarexperimental'
//import {ToolbarExperimental} from 'react-native-material-ui'

import store from './store'
import Menu from './common/menu'
import Toolbar from './common/toolbar'
import CefitiForm from './cefiti/form'
import CefitiResults from './cefiti/results'
import CefitiStore from './cefiti/store'
import TrexForm from './scenes/trex'
import PviaForm from './pvia/form'
import PviaResults from './pvia/results'
import Quarentenarias from './quarent/form'
import Alertas from './scenes/alertas'
import Alp from './scenes/alp'
import Contingencia from './scenes/contingencia'
import Servicos from './scenes/servicos'
import Contato from './scenes/contato'


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
    return <Router 
              store={store}
              navBar={ToolbarExperimental}    
              icon={'menu'} 
              primary={theme}
              actions={[{icon: 'help', onPress: ()=>{}}]}  
              rightIconStyle={{margin: 10}}
              onIconPress={()=>{Actions.refresh({key:'drawer', open:true})}}
            > 
    <Scene key="root"  >  
        <Scene key="drawer" component={NavDrawer}  > 
          <Scene key='main' > 
            <Scene key="home" component={Home} title={''} initial={true} sceneStyle={styles.scene}  />
            <Scene key="cefitiForm" component={CefitiForm} title={"CEFiTI"}   sceneStyle={styles.scene} />
            <Scene key="cefitiResults" component={CefitiResults} title={"CEFiTI"}  sceneStyle={styles.scene} />
            <Scene key="pviaForm" component={PviaForm} title={"PVIA"} sceneStyle={styles.scene}  />
            <Scene key="pviaResults" component={PviaResults} title={"PVIA"} sceneStyle={styles.scene}  />
            <Scene key="trexForm" component={TrexForm} title={"T-REX"} sceneStyle={styles.scene} />
            <Scene key="search" component={SearchPage} isSearchActive={true} sceneStyle={styles.scene}
                searchable={{autoFocus: true, placeholder: 'Busca', onChangeText:store.ui.changeSearchValue}} />
            <Scene key="quarentenarias" component={Quarentenarias} title={"Pragas Quarentenárias"} sceneStyle={styles.scene}  />
            <Scene key="alertas" component={Alertas} title={"Alertas Fitossanitárias"}  sceneStyle={styles.scene}  />
            <Scene key="alp" component={Alp} title={"Áreas Livre de Praga"} sceneStyle={styles.scene}  />
            <Scene key="contingencia" component={Contingencia} title={"Planos de Contingência"} sceneStyle={styles.scene} />
            <Scene key="servicos" component={Servicos} title={"Serviços do DSV"} sceneStyle={styles.scene}  />
            <Scene key="contato" component={Contato} title={"Contato"} sceneStyle={styles.scene} />
          </Scene>
        </Scene>
      </Scene> 
    </Router>
  }  
}
/*                navBar={()=><Toolbar 
                      isSearchActive={true}    this.props.store.ui.changeSearchValue(text)
                      searchable={{placeholder: 'Busca'}}
                 />}*/

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
                tweenEasing='easeOutQuad'
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => {
                      var drawerShadow = ratio < .2 ? ratio*5*5 : 5
                      return {
                        drawer: { shadowRadius: drawerShadow },
                        main: {opacity:(2-ratio)/2},
                      }
                    }
                }>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
                    //main: { opacity:Math.max(0.54,1-ratio) }

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


