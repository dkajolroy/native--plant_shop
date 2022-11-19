import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLOR } from './../Helpers/Color';
import { useSelector, useDispatch } from "react-redux"
import AntD from 'react-native-vector-icons/AntDesign'
import { addCart } from './../Redux/Actions/CartAction';

const cartWidth = Dimensions.get("screen").width / 2 - 30
export default function Wishlist({ navigation }) {
  const dispatch = useDispatch()
  const { product } = useSelector(x => x.wishlist)

  const PlatItem = ({ item }) => {
    return (
      <View style={{
        position: "relative"
      }} key={item.id}>
        <View style={{
          position: "absolute",
          right: 8,
          top: 10,
          borderRadius: 15,
          height: 30,
          width: 30,
          zIndex: 22,
          justifyContent: 'center',
          alignItems: "center",
          backgroundColor: `${COLOR.red500}`,
        }}>
          <TouchableOpacity>
            <AntD name='heart' color={COLOR.red} size={18} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("View", item)}>
          <View style={styles.plantCart}>
            <Image
              style={{ width: cartWidth, resizeMode: "contain", height: 120, }}
              source={{ uri: item.image }} />
            <View style={{ width: "100%", marginTop: 10 }}>
              <Text style={{
                fontSize: 15,
                fontWeight: "500",
                color: COLOR.black
              }}>{item.name.substring(0, 16)}</Text>
              <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLOR.black,
                  fontWeight: "500"
                }}>${item.price}</Text>

              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{
          position: "absolute",
          right: 8,
          zIndex: 21,
          bottom: 15
        }}>
          <TouchableOpacity onPress={() => dispatch(addCart(item))}>
            <AntD style={{
              backgroundColor: COLOR.gray500,
              padding: 4,
              borderRadius: 5
            }} name='plus' size={18} />
          </TouchableOpacity>
        </View>
      </View>
    )
  };



  return (
    <SafeAreaView style={{
      backgroundColor: COLOR.white,
      flex: 1,
      paddingHorizontal: 20,
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
        <Text style={{ color: COLOR.black500, fontSize: 22 }}>Wishlist</Text>
      </View>
      {
        product.length < 1 ?
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Text style={{ fontSize: 30 }}>Empty Wishlist</Text>
          </View>
          :
          <View>
            <FlatList key={"_"}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 100
              }}
              data={product}
              renderItem={(item) => PlatItem(item, navigation)} />
          </View>
      }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  plantCart: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: cartWidth,
    marginVertical: 5,
    position: 'relative',
    backgroundColor: COLOR.gray,
    borderRadius: 10,
    alignItems: "center",
  }
})