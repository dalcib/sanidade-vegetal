import React, { Component, PropTypes, View, Text, Image, IntentAndroid } from 'react-native';
import { Card, Button, COLOR, TYPO } from 'react-native-material-design';


export default class Home extends Component {

    render() {
        const { navigator } = this.context;
        const theme = AppStore.getState().theme;

        return (
            <View>
                <Card>
                    <Card.Media
                        image={<Image source={require('./../img/nav.jpg')} />}
                        overlay
                    >
                        <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Sanidade Vegetal</Text>
                        <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>Dapartamento de Sanidade Vegetal - DSV/MAPA</Text>
                    </Card.Media>
                    <Card.Body>
                        <Text>Consulta de dados sobre a Defesa Sanitária Vegetal do Brasil</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary={theme} text="DSV" onPress={() => IntentAndroid.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} />
                    </Card.Actions>
                </Card>
                <Card>
                    <Card.Body>
                        <Text>Testo texto texto.</Text>
                    </Card.Body>
                </Card>
                <Button text="Início" primary={theme} onPress={() => { navigator.forward() }} />
                <Image source={require('./../img/logo.png')} resizeMode={'cover'} />

            </View>
        );
    }

}