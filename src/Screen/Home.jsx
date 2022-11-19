import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import FontAW5 from 'react-native-vector-icons/FontAwesome5'
import AntD from 'react-native-vector-icons/AntDesign'
import { COLOR } from './../Helpers/Color';
import { wishlistData } from './../Helpers/data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { addToWishlist } from './../Redux/Actions/WishlistAction';
import { useSelector } from 'react-redux';
import { addCart } from '../Redux/Actions/CartAction';

const cartWidth = Dimensions.get("screen").width / 2 - 30

export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const { product } = useSelector(x => x.products)
    const [database, setDatabase] = useState(product)
    const searchedData = (e) => {
        var search = product.filter(x => x.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()))
        setDatabase(search)
    }

    const PlatItem = ({ item }) => {
        const findWishlist = wishlistData.find(x => x.id === item.id)

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
                    backgroundColor: `${findWishlist ? COLOR.red500 : COLOR.gray500}`,
                }}>
                    <TouchableOpacity onPress={() => dispatch(addToWishlist(item))}>
                        <AntD name='heart' color={findWishlist ? COLOR.red : COLOR.black500} size={18} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("View", item)}>
                    <View style={styles.plantCart}>
                        <Image
                            style={{
                                minWidth: cartWidth,
                                flex: 1,
                                resizeMode: "contain",
                                height: 120,
                            }}
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



    //Return Component
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "700", color: COLOR.black }}>Welcome to</Text>
                    <Text style={{ fontSize: 38, fontWeight: "700", color: COLOR.green }}>Plant Shop</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <FontAW5 color={COLOR.black} name="shopping-cart" size={25} />
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 5 }}>
                <View style={styles.searchBox}>
                    <FontAW5 style={{ marginHorizontal: 10, color: COLOR.gray500 }} name='search' size={20} />
                    <TextInput placeholderTextColor={COLOR.gray500} onChangeText={searchedData} placeholder='Search...' style={styles.searchInput} />
                </View>
            </View>
            <View >
                <FlatList key={"_"}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: 250
                    }}
                    data={database}
                    renderItem={(item) => PlatItem(item, navigation)} />
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.white,
        paddingHorizontal: 20,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: "space-between"
    },
    searchBox: {
        width: "100%",
        borderRadius: 10,
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
        backgroundColor: COLOR.gray
    },
    searchInput: {
        width: "100%",
        fontSize: 16,
        color: COLOR.black500
    },
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