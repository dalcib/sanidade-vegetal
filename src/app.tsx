
import * as React from 'react';
import { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, BackAndroid, Image, ToolbarAndroid} from 'react-native';
import {Scene, Router, Actions, DefaultRenderer} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import {Toolbar, Drawer as MaterialDrawer, Divider, Avatar, COLOR, TYPO} from 'react-native-material-design';
import ToolbarExperimental from './widgets/toolbar'
//import Navigation from './scenes/Navigation' 
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

const Bar: React.SFC<{title:string}> = ({title}) => <ToolbarExperimental title={title} icon={'menu'} primary={theme}
                          actions={[{icon: 'warning'},  {icon: 'help', onPress: ()=>{}}]}  
                          rightIconStyle={{margin: 10}}
                          onIconPress={()=>{Actions.refresh({key:'drawer', open:true})}} />

export default class App extends React.Component <{},{}> {
  render() {
    return <Router navBar={Bar}  > 
    <Scene key="root" >  
        <Scene key="drawer" component={NavDrawer} sceneStyle={{flex:1}} > 
          <Scene key='main' > 
            <Scene key="home" component={Home} title={'Home'}  sceneStyle={styles.scene}  />
            <Scene key="alp" component={Alp} title={"Áreas Livre de Praga"} sceneStyle={styles.scene} />
            <Scene key="cefitiForm" component={CefitiForm} title={"CEFiTI"} sceneStyle={styles.scene} initial={true} />
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

class Menu extends React.Component <{closeDrawer:any},{}>{
  
   changeScene(path:string, name?:string):void{
      Actions[path]()
      this.props.closeDrawer()
   } 

   render() {
        const closeDrawer = this.props.closeDrawer
        const route = 'welcome' 
        return (
            <MaterialDrawer theme='light'>
                <MaterialDrawer.Header height={100} image={<Image source={require('./../assets/drawer.jpg')} resizeMode={'cover'} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('./../assets/logo.png')}/>}/>
                        <View>
                            <Text style={[styles.text, COLOR.paperGreen50, TYPO.paperFontTitle]} >Sanidade</Text>
                            <Text style={[styles.text, COLOR.paperGreen50, TYPO.paperFontTitle]} >Vegetal</Text>
                        </View>
                    </View>
                </MaterialDrawer.Header>
                <MaterialDrawer.Section
                    items={[{
                        icon: 'home',
                        value: 'Início',
                        active: !route || route === 'home',
                        onPress: () => this.changeScene('home'),
                        onLongPress: () => this.changeScene('home')
                    }]}
                />
                <MaterialDrawer.Section style={{ marginTop: 4 }}
                    title="Requisitos Fitossanitários"
                    items={[{
                        icon: 'label',
                        value: 'CEFiTI - Trânsito Interestadual',
                        //label: '12',
                        active: route === 'cefitiForm',
                        onPress: () => this.changeScene('cefitiForm'),
                        onLongPress: () => this.changeScene('cefitiForm')
                    }, {
                        icon: 'label',
                        value: 'PVIA - Importação',
                        active: route === 'pvia',
                        //label: 'x',
                        onPress: () => this.changeScene('pvia'),
                        onLongPress: () => this.changeScene('pvia')
                    }, {
                        icon: 'label',
                        value: 'T-REX - Exportação',
                        //label: '10',
                        active: route === 'exportacao',
                        onPress: () => this.changeScene('exportacao'),
                        onLongPress: () => this.changeScene('exportacao')
                    }]}
                />
                <MaterialDrawer.Section style={{ marginTop: 4 }}
                    title="Pragas"
                    items={[{
                       icon: 'list',
                       value: 'Quarentenárias Regulamentadas',
                       //label: 'NEW',
                       active: route === 'quarentenarias',
                       onPress: () => this.changeScene('quarentenarias'),
                       onLongPress: () => this.changeScene('quarentenarias')
                     },{
                       icon: 'list',
                       value: 'Alertas Fitossanitários',
                       //label: 'NEW',
                       active: route === 'alertas',
                       onPress: () => this.changeScene('alertas'),
                       onLongPress: () => this.changeScene('alertas')
                     },{
                        icon: 'list',
                        value: 'Áreas Livres',
                        //label: '8',
                        active: route === 'alp',
                        onPress: () => this.changeScene('alp'),
                        onLongPress: () => this.changeScene('alp')
                    },{
                       icon: 'list',
                       value: 'Planos de Contigência',
                       //label: 'NEW',
                       active: route === 'contingencia',
                       onPress: () => this.changeScene('contingencia'),
                       onLongPress: () => this.changeScene('contingencia')
                     }]}
                />
                <Divider style={{ marginTop: 8 }} />
                <MaterialDrawer.Section
                    title="Informações"
                    items={[{
                        icon: 'label',
                        value: 'Serviços do DSV',  
                        active: route === 'informacoes',
                        onPress: () => this.changeScene('informacoes'),
                        onLongPress: () => this.changeScene('informacoes')
                    },{
                        icon: 'label',
                        value: 'Contato',
                        //label: '24',
                        active: route === 'contato',
                        onPress: () => this.changeScene('contato'),
                        onLongPress: () => this.changeScene('contato')
                    }]}
                />         
            </MaterialDrawer>
        );
    }
}

const styles = StyleSheet.create<any>({
  /*toolbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    flex: 1,
    marginLeft: 16
  },*/
  header: {
    paddingTop: 16,
    flexDirection:'row'  
  },
  text: {
    marginTop: 6,
    marginLeft: 15,
  },
  scene: {
	flex: 1,
	marginTop: 56
	}
});


