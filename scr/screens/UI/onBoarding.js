/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const onBoarding = ({navigation}) => {
    return (
        <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../Images/Books.png')} />,
            title: 'Buy or sell used books',
            subtitle: 'Now it is easier to buy or sell your used book directly from your fingertips',
          },
          
        ]}
      />
    )
}

export default onBoarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

