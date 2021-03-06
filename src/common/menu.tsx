import * as React from 'react';
import { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Drawer, Avatar, COLOR, TYPO} from 'react-native-material-design';

export default class Menu extends React.Component <{closeDrawer: any}, {}> {

   changeScene(path: string, name?: string): void {
      Actions[path]();
      this.props.closeDrawer();
   }

   render(): any {
        //const closeDrawer: any = this.props.closeDrawer
        const route = 'home';
        return (
            <Drawer theme="light">
                <Drawer.Header image={<Image source={require('./../../assets/drawer.jpg')}  />}> // tslint:disable-line
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('./../../assets/logo.png')}/>}/> // tslint:disable-line
                        <View>
                            <Text style={[styles.text, COLOR.paperGreen50, TYPO.paperFontTitle]} >Sanidade</Text>
                            <Text style={[styles.text, COLOR.paperGreen50, TYPO.paperFontTitle]} >Vegetal</Text>
                        </View>
                    </View>
                </Drawer.Header>
                <Drawer.Section style={{ marginTop: 4 }}
                    title="Requisitos Fitossanitários"
                    items={[{
                        icon: 'list',
                        value: 'CEFiTI - Trânsito Interestadual',
                        active: route === 'cefitiForm',
                        onPress: () => this.changeScene('cefitiForm'),
                        onLongPress: () => this.changeScene('cefitiForm')
                    }, {
                        icon: 'list',
                        value: 'PVIA - Importação',
                        active: route === 'pviaForm',
                        onPress: () => this.changeScene('pviaForm'),
                        onLongPress: () => this.changeScene('pviaForm')
                    }, {
                        icon: 'list',
                        value: 'T-REX - Exportação',
                        active: route === 'trexForm',
                        onPress: () => this.changeScene('trexForm'),
                        onLongPress: () => this.changeScene('trexForm')
                    }]}
                />
                <Drawer.Section style={{ marginTop: 4 }}
                    title="Pragas"
                    items={[{
                       icon: 'label',
                       value: 'Quarentenárias Regulamentadas',
                       active: route === 'quarentenarias',
                       onPress: () => this.changeScene('quarentenarias'),
                       onLongPress: () => this.changeScene('quarentenarias')
                     },{
                       icon: 'label',
                       value: 'Alertas Fitossanitários',
                       active: route === 'alertas',
                       onPress: () => this.changeScene('alertas'),
                       onLongPress: () => this.changeScene('alertas')
                     },{
                        icon: 'label',
                        value: 'Áreas Livres',
                        active: route === 'alp',
                        onPress: () => this.changeScene('alp'),
                        onLongPress: () => this.changeScene('alp')
                    },{
                       icon: 'label',
                       value: 'Planos de Contigência',
                       active: route === 'contingencia',
                       onPress: () => this.changeScene('contingencia'),
                       onLongPress: () => this.changeScene('contingencia')
                     }]}
                />
                <Drawer.Section style={{ marginTop: 4 }}
                    title="Informações"
                    items={[{
                        icon: 'home',
                        value: 'Início',
                        active: !route || route === 'home',
                        onPress: () => this.changeScene('home'),
                        onLongPress: () => this.changeScene('home')
                    },{
                        icon: 'layers',
                        value: 'Serviços do DSV',
                        active: route === 'servicos',
                        onPress: () => this.changeScene('servicos'),
                        onLongPress: () => this.changeScene('servicos')
                    },{
                        icon: 'email',
                        value: 'Contato',
                        active: false, //route === 'contato',
                        onPress: () => this.changeScene('contato'),
                        onLongPress: () => this.changeScene('contato')
                    }]}
                />
            </Drawer>
        );
    }
}

//style={{ marginTop: 4 }}

const styles = StyleSheet.create<any>({
  /*toolbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center'
    },*/
  /*container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    flex: 1,
    marginLeft: 16
  },*/
  header: {
    paddingTop: 16,
    flexDirection: 'row'
  },
  text: {
    marginTop: 6,
    marginLeft: 15,
  },
});

/*
                <Drawer.Section style={{ marginTop: 4 }}
                    items={[{
                        icon: 'home',
                        value: 'Início',
                        active: !route || route === 'home',
                        onPress: () => this.changeScene('home'),
                        onLongPress: () => this.changeScene('home')
                    }]}
                />
                */
