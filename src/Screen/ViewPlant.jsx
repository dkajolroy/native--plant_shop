import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'
import AntD from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR } from './../Helpers/Color';
import FontAW5 from 'react-native-vector-icons/FontAwesome5'

export default function ViewPlant({ navigation, route }) {
  const item = route.params

  let width = Dimensions.get("screen").width / 1.5
  return (
    <SafeAreaView style={{ paddingHorizontal: 20, backgroundColor: COLOR.white }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntD color={COLOR.black} name='arrowleft' size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <FontAW5 color={COLOR.black} name="shopping-cart" size={25} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Image style={{ width: width, resizeMode: "contain", height: width }} source={{ uri: item.image }} />
      </View>
      <View style={{
        marginVertical: 10,
        paddingLeft: 20,
        paddingTop: 20,
        backgroundColor: COLOR.gray,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%'
      }}>
        <Text style={{ color: COLOR.black, fontWeight: "500" }}>___Best Choice</Text>

        <View style={{
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

        }}>
          <Text style={{ color: COLOR.black, fontSize: 25, fontWeight: "500" }}>Succulent Plant</Text>
          <Text style={{
            backgroundColor: COLOR.green,
            fontSize: 20,
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderTopLeftRadius: 20,
            color: COLOR.white,
            borderBottomLeftRadius: 20
          }}>
            ${item.price}
          </Text>
        </View>
        <View >
          <Text style={{ color: COLOR.black, fontSize: 20, fontWeight: "500" }}>
            About
          </Text>
          <Text style={{
            color: COLOR.black500,
            marginVertical: 10,
            lineHeight: 20,
            fontSize: 15
          }}>
            Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.
          </Text>
        </View>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          justifyContent: "space-between"
        }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={{
              borderWidth: 1,
              borderColor: COLOR.gray500,
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 5
            }}>
              <AntD color={COLOR.black} name='minus' size={25} />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, color: COLOR.black, marginHorizontal: 10 }}>1</Text>
            <TouchableOpacity style={{
              borderWidth: 1,
              borderColor: COLOR.gray500,
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 5
            }}>
              <AntD color={COLOR.black} name='plus' size={25} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{
            backgroundColor: COLOR.green,
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 30,
          }}>
            <Text style={{
              fontSize: 20,
              color: COLOR.white
            }}>Buy</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}