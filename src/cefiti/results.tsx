import * as React from 'react'
import {Component} from 'react'
import {ScrollView, View, Text, StyleSheet, Picker, Linking, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import {Button, TYPO, Subheader, List, Divider } from 'react-native-material-design'
import {cefitiStore} from './store'

var onPressText = (e)=>{console.log(e)}

function Result({store}) {
  const cefitiStore:cefitiStore = store.cefiti
      return (
     (cefitiStore.empty ? (
        <View>
          <Text style={styles.title} >Exigências Fitossanitárias para o trânsito de {cefitiStore.dados.prod} de {cefitiStore.dados.hospVul} {cefitiStore.dados.hospSci} do {cefitiStore.dados.orig} para {cefitiStore.dados.dest} </Text>

          <View>
              <Text  style={styles.title} >SEM EXIGÊNCIAS PARA O TRÂNSITO</Text>
          </View>
        </View>  )
   : (<ScrollView>
      <View>
      <TouchableHighlight onPress={(e)=>console.log(e)} underlayColor="gray">
             <Text  >Exigências Fitossanitárias para o trânXXXXXXXXXXXXXXXXXXXXXXXXX</Text>
      </TouchableHighlight> 
          <Text style={styles.title} >Exigências Fitossanitárias para o trânsito de {cefitiStore.dados.prod} de {cefitiStore.dados.hospVul} {cefitiStore.dados.hospSci} do {cefitiStore.dados.orig} para {cefitiStore.dados.dest} </Text>

          {cefitiStore.result.map((item, i)=>{ return (
              <View key={i}> 
                  <Divider />
                  <Subheader lines={2} text={"'"+item.prag+"' - "+item.pragc} /> 
                  <Text >{item.desc}</Text>
                  {item.exig.map((exig, ii)=>{ return (
                    <Text key={ii}>
                        {(ii+1)+" - "+exig}
                    </Text>
                  )})}
             </View>
          )})}
      </View>
      
    

        <View>
          <View>
          <Subheader lines={2} text="TRÂNSITO NACIONAL DE PARTIDA IMPORTADA" />
            <Text>1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:  </Text>
            <Text>- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;</Text> 
          </View>
          <View>
            <Text>2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO: </Text> 
            <Text>- Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação; </Text>
            <Text>- Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;</Text>
          </View>
          <View>
            <Text>3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF: </Text> 
            <Text>- Cumprir os requisitos fitossanitários para o trânsito interestadual.</Text>
          </View>
          <Subheader lines={2} text="TRÂNSITO NACIONAL DE PARTIDA EXPORTADA" />
          <View>
            <Text>1 – SE A PARTIDA JÁ FOI EXPORTADA PELO MAPA EM ÁREA ALFANDEGADA NO INTERIOR DO BRASIL E ESTIVER EM TRÂNSITO A PONTO DE EGRESSO:</Text> 
            <Text>- Não se aplicam as exigências para o trânsito interestadual.</Text> 
          </View>
          <Subheader lines={2} text="LEGISLAÇÃO GERAL" />
        </View>

    </ScrollView>)
   )
  )
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        padding: 8,
        margin: 8,
        backgroundColor: 'white'
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


export default Result


         /* 


         
           <a target="_blank" href={item.link}>{item.leg}</a> 
            <a className="small" target="_blank" href={"https://www.google.com.br/search?site=imghp&tbm=isch&q="+item.prag}>[FOTOS DA PRAGA]</a>
            <a target="_blank" href="leg/IN54-2007.pdf">Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007</a>
            <a target="_blank" href="leg/IN59-2013.pdf">Instrução Normativa MAPA Nº 59, de 18 de dezembro de 2013</a>
            <Button text="Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007" onPress={() => Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />

            */