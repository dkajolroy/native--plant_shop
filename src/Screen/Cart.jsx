import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import { COLOR } from './../Helpers/Color';
import AntD from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cart({ navigation }) {
  const { product } = useSelector(x => x.cart)

  var totalPrice = 0;
  for (var i = 0; i < product.length; i++) {
    totalPrice = totalPrice + product[i].price * product[i].quantity
  }


  const PlatItem = ({ item }) => {
    return (
      <View View style={{
        flexDirection: "row",
        backgroundColor: COLOR.gray,
        marginVertical: 5,
        justifyContent: "space-between",
        borderRadius: 10,
        alignItems: "center",
        padding: 5,
      }
      }>
        <View style={{ flexDirection: "row", alignItems: 'center' }}>
          <Image style={{ minWidth: 80, resizeMode: "contain", maxWidth: 100, minHeight: 80, maxHeight: 100 }} source={{ uri: item.image }} />
          <Text style={{ fontSize: 18, color: COLOR.black500 }}>
            {item.name.substring(0, 16)}
            {item.name.length > 16 ? "..." : null}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: COLOR.black500 }}>${item.price} x {item.quantity} = ${item.price * item.quantity}</Text>
        </View>

      </View>
    )
  }

  return (
    <SafeAreaView style={{
      backgroundColor: COLOR.white,
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 120
    }}>
      <View style={{
        width: "100%",
        flexDirection: "row",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntD color={COLOR.black} name='arrowleft' size={25} />
        </TouchableOpacity>
        <Text style={{ color: COLOR.black500, fontSize: 22 }}>Cart</Text>
      </View>
      {
        product.length < 1 ?
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Text style={{ fontSize: 30, color: COLOR.gray500 }}>Empty Cart</Text>
          </View>
          :
          <View>
            <FlatList key={"_"}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 10,
              }}
              data={product}
              renderItem={(item) => PlatItem(item)} />
          </View>
      }
      {
        product.length > 0 ?
          <View style={{
            borderTopWidth: 2,
            borderColor: COLOR.gray,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: '100%',
          }}>
            <Text style={{ fontSize: 20, color: COLOR.black500 }}>Total: ${totalPrice}</Text>
            <View>
              <TouchableOpacity>
                <Text style={{
                  fontSize: 20,
                  marginVertical: 5,
                  backgroundColor: COLOR.green,
                  paddingHorizontal: 40,
                  paddingVertical: 10,
                  borderRadius: 30,
                  color: COLOR.white
                }}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View> : null
      }
    </SafeAreaView>
  )
}