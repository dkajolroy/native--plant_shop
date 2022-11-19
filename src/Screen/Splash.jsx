import {  SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({navigation}) {
    useEffect(() => {
            setTimeout(()=>{
                navigation.navigate("Tab")
            },3000)
    }, [])
    
    return (
        <SafeAreaView style={{
            backgroundColor:"#f7f7f7",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      
          }}>
            <Image source={require("../assets/logo.png")} style={{
                width:200,
                height:200
            }}/>
          </SafeAreaView>
    )
}