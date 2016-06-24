import * as React from 'react';
import { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Scene, Router, Actions, DefaultRenderer} from 'react-native-router-flux';
import {Toolbar, Drawer as MaterialDrawer, Divider, Avatar, COLOR, TYPO} from 'react-native-material-design';


export default class Menu extends React.Component <{closeDrawer:any},{}>{
  
   changeScene(path:string, name?:string):void{
      Actions[path]()
      this.props.closeDrawer()
   } 

   render() {
        const closeDrawer = this.props.closeDrawer
        const route = 'welcome' 
        return (
            <MaterialDrawer theme='light'>
                <MaterialDrawer.Header height={100} image={<Image source={require('./../../assets/drawer.jpg')} resizeMode={'cover'} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('./../../assets/logo.png')}/>}/>
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
                        active: route === 'search',
                        onPress: () => this.changeScene('search'),
                        onLongPress: () => this.changeScene('search')
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
});