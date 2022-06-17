import React from "react"
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const UrlSukiimage = 'https://br.pinterest.com/pin/616430267738443931/';
const imagepinterest = 'https://i.pinimg.com/originals/31/77/78/31777856088677912ccf409e16eebf9e.jpg';
const colorDio = '#1a1a1a';

const App = () => {
    const handlePressGoTosukiImage = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(UrlSukiimage);
         if (res) {
             console.log('Link aprovado');
             console.log('Abrindo Link...');
             await Linking.openURL(UrlSukiimage);
            }
        }
            
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorDio} barStyle='light-content'/>
            <View style={style.content}>
                <Image style={style.suki} source={{uri: imagepinterest}} />
                <Text style={[style.Text , style.name]}>Suki Aoki</Text>
                <Text style={[style.Text, style.nick]}>Actress</Text>
                <Text style={[style.Text, style.bio]}>When US Customs Agents arrive at the scene in an attempt to apprehend Brian, Suki flees the scene in the crippled S2000. </Text>
                
                <Pressable onPress={handlePressGoTosukiImage}>
                    <View style={style.button}>
                      <Text style={style.buttontText}> Open GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>


    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        flex: 1, //expandir para a tela inteira 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,


    },
content: {
    alignItems: 'center',

},
    
   suki: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 2,
    
   },
   
   Text: {
    color: 'white'

   },
   name: {
    fontSize: 25,
    fontStyle:'italic',
    fontWeight:'bold',
    marginTop: 15,
    
   },
   nick: {
    fontSize: 18,
   },
   bio: {
    fontSize: 15,
    textAlign:'center',
    fontWeight:'bold',
   },
   button: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10, 
    padding: 20,

   },
   buttontText: {
    color: 'black',
    fontSize: 15,
    fontStyle:'italic',
    fontWeight:'bold'
   }

})