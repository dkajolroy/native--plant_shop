import React from 'react'
import Home from '../../Screen/Home';
import ViewPlant from './../../Screen/ViewPlant';
import { createStackNavigator } from '@react-navigation/stack';

export default function NavStack() {
  const Nav = createStackNavigator()
  return (
    <Nav.Navigator screenOptions={{headerShown:false}}>
      <Nav.Screen  name='Home' component={Home} />
      <Nav.Screen name='View' component={ViewPlant} />
    </Nav.Navigator>
  )
}