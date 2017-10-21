import * as React from 'react'; // tslint:disable-line:no-unused-variable
//import {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, /*Picker, Linking, TouchableWithoutFeedback*/ } from 'react-native';
import {Subheader, Divider } from 'react-native-material-design';
import {cefitiStore} from './store';

function Result({store}: any): any { //React.SFC {
  const cefitiStore: cefitiStore = store.cefiti;
      return (
        (cefitiStore.empty ? (
            <View>
              <Text style={styles.title} >Exigências Fitossanitárias para o trânsito de {cefitiStore.dados.prod} de {cefitiStore.dados.hospVul} {cefitiStore.dados.hospSci} do {cefitiStore.dados.orig} para {cefitiStore.dados.dest} </Text> // tslint:disable-line

              <View>
                  <Text  style={styles.title} >SEM EXIGÊNCIAS PARA O TRÂNSITO</Text>
              </View>
            </View>  )
        : (<ScrollView>
          <View>
              <Text style={styles.title} >Exigências Fitossanitárias para o trânsito de {cefitiStore.dados.prod} de {cefitiStore.dados.hospVul} {cefitiStore.dados.hospSci} do {cefitiStore.dados.orig} para {cefitiStore.dados.dest} </Text> // tslint:disable-line

              {cefitiStore.result.map((item, i) => { return (
                  <View key={i}>
                      <Divider />
                      <Subheader lines={2} text={"'" + item.prag + "' - " + item.pragc} /> // tslint:disable-line
                      <Text >{item.desc}</Text>
                      {item.exig.map((exig, ii) => { return (
                        <Text key={ii}>
                            {(ii + 1) + " - " + exig} // tslint:disable-line
                        </Text>
                      );})}
                </View>
              );})}
          </View>

            <View>
              <View>
              <Subheader lines={2} text="TRÂNSITO NACIONAL DE PARTIDA IMPORTADA" />
                <Text>1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:  </Text> // tslint:disable-line
                <Text>- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;</Text>
              </View>
              <View>
                <Text>2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO: </Text> // tslint:disable-line
                <Text>- Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação; </Text>
                <Text>- Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;</Text>
              </View>
              <View>
                <Text>3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF: </Text> // tslint:disable-line
                <Text>- Cumprir os requisitos fitossanitários para o trânsito interestadual.</Text>
              </View>
              <Subheader lines={2} text="TRÂNSITO NACIONAL DE PARTIDA EXPORTADA" />
              <View>
                <Text>1 – SE A PARTIDA JÁ FOI EXPORTADA PELO MAPA EM ÁREA ALFANDEGADA NO INTERIOR DO BRASIL E ESTIVER EM TRÂNSITO A PONTO DE EGRESSO:</Text> // tslint:disable-line
                <Text>- Não se aplicam as exigências para o trânsito interestadual.</Text>
              </View>
              <Subheader lines={2} text="LEGISLAÇÃO GERAL" />
            </View>

        </ScrollView> )
      )
      );
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        padding: 8,
        margin: 8,
        //justifyContent: 'center',
        //alignItems: 'flex-start'
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderWidth: 10,
        fontWeight: 'bold'
        //fontStyle : 'italic' //normal
    }
});

export default Result;
