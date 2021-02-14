import React from 'react'
import { StyleSheet, View,StatusBar, Image } from 'react-native'
import { Button,Text, TextInput,Modal, Portal, Provider  } from 'react-native-paper';
import Constants from 'expo-constants'
import ButtonExample from '../../components/customButton'
import LottieView from 'lottie-react-native'
export default function signup({ navigation }) {
    const [num, setNum] = React.useState('');
    const [name, setName] = React.useState('');

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', height: '50%'};

    return (
        <View style={{backgroundColor:'#fff', flex:1}}>
            <View style={{flex:1, marginTop: Constants.statusBarHeight,}}>
            <Image
                style={styles.tinyLogo}
                source={require('../../Images/dummy-logo.png')}
                style={styles.image}
            />
            </View>
        <View style={styles.container}>
            <Text style={{fontSize: 40, marginBottom:20}}>Sign up</Text>
        <TextInput 
            label="Full Name"
            mode="outlined"
            value={name}
            onChangeText={text => setName(text)}
            style={{paddingBottom:20}}
        />
        <TextInput
            label="Phone number"
            mode="outlined"
            type="number"
            keyboardType='numeric'
            maxLength={10}
            value={num}
            onChangeText={text => setNum(text)}
            style={{paddingBottom:20}}
            />
             <Button 
                raised mode="contained" 
                style={styles.button}
                dark= {true}
                onPress={showModal}>
                    Sign up
            </Button>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <View>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </View>
            
                </Modal>
            </Portal>
            <Button 
                 uppercase={false}
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
                >
               already have an account? Login here
            </Button>
      
        </View>
      </View>
      );
}

const styles = StyleSheet.create({
 container:{
    marginHorizontal: 9,
    justifyContent: 'flex-end',
    marginBottom: 36
    
 },
 image:{
     alignSelf:'center',
     
 },
    button: {
      paddingVertical: 5,
      marginVertical:10
      }

})
