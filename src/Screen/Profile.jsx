import { View, Text, SafeAreaView, Image, Linking } from 'react-native'
import React from 'react'
import { COLOR } from './../Helpers/Color';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Profile() {
  return (
    <SafeAreaView style={{
      backgroundColor:COLOR.white,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    }}>
    <View style={{
      backgroundColor:"#23253a",
      paddingVertical:30,
      paddingHorizontal:10,
      width:"85%",
      alignItems:"center",
      borderRadius:20
    }}>
      <Image source={require("../assets/dev.png")}style={{
              width:300, 
              height:300,
              resizeMode:"contain"  }}/>
        <Text style={{
          fontSize:35,
          width:"100%",
          textAlign:"center",
          color:COLOR.white, 
          fontFamily:"disco_paradisco"}}>
            Kajol ROY   
        </Text>
        <Text style={{
            fontSize:18,
            marginTop:10,
            width:"100%",
            textAlign:"center",
            color:COLOR.white,
        }}>
          MERN Stack Software Developer
        </Text>
        <Text style={{
          fontSize:12,
          width:"100%",
          color:COLOR.white}}>
          Skill: Javascript, React js, Redux js, Next js, Node js, Express js, React Native, HTML5, CSS3, MongoDB and much much more.
        </Text>
        <Text style={{
          fontSize:15, 
          textAlign:"center",
          fontFamily:"solaimanlipi",
          marginTop:10,
          color:COLOR.green}}>
          Hi I am a full stack developer with MERN. Currently I work Mobile application, web application, Server Side Development etc.
        </Text>
        <Text style={{
          fontSize:15, 
          fontStyle:"italic",
          textAlign:"center",
          color:COLOR.gray500
        }}>
          Help:: Shrikajol@gmail.com
        </Text>
        <View style={{
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          marginTop:5,
        }}>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.facebook.com/iKajolroy/")}>
              <Image style={{width:30,height:30,marginHorizontal:2}} source={require("../assets/social/facebook.png")}/>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.linkedin.com/in/kajolroy")}>
              <Image style={{width:30,height:30,marginHorizontal:2}} source={require("../assets/social/linkedin.png")}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>Linking.openURL("https://www.instagram.com/ikajolroy/")}>
              <Image style={{width:30,height:30,marginHorizontal:2}} source={require("../assets/social/instagram.png")}/>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>Linking.openURL("https://twitter.com/ikajolroy")}>
              <Image style={{width:30,height:30,marginHorizontal:2}} source={require("../assets/social/twitter.png")}/>
           </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  )
}