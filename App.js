import React from 'react';
import 'react-native-gesture-handler';
import Wishlist from './src/Screen/Wishlist';
import Cart from './src/Screen/Cart';
import Profile from './src/Screen/Profile';
import NavStack from './src/Components/Navigation/NavStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AntD from 'react-native-vector-icons/AntDesign';
import Splash from './src/Screen/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';

const Tab = createBottomTabNavigator();
const NavNew = createStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <NavNew.Navigator screenOptions={{headerShown: false}}>
          <NavNew.Screen name="Splash" component={Splash} />
          <NavNew.Screen name="Tab" component={NavNext} />
        </NavNew.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const NavNext = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntD name="home" size={size} color={color} />
          ),
        }}
        name="Nav"
        component={NavStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntD name="hearto" size={size} color={color} />
          ),
        }}
        name="Wishlist"
        component={Wishlist}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntD name="shoppingcart" size={size} color={color} />
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntD name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
