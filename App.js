import React , { useRef } from 'react';
import { View , ScrollView, Text , Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HeaderLanding from './components/HeaderLanding';
import FoodItems from './components/FoodItems';
import FoodScreen from './components/FoodScreen';
import Cart from './components/Cart';
import FoodDetailScreen from './components/FoodDetailScreen';
import FoodDetails from './components/FoodDetails';
import SplashScreen from './components/SplashScreen';

let burger = require('./assets/burger.jpg');
let pizza = require('./assets/pizza.jpg');
let momo = require('./assets/momo.jpeg'); 


function MyStack({navigation}) {
  return (
      <View>
        <HeaderLanding render={() => navigation.toggleDrawer()} cart={() => navigation.navigate('Cart')} />
        <ScrollView>
          <FoodItems render={() => navigation.navigate('FoodScreen',{
            text:'BURGER' ,
            image:[burger,pizza,momo],
            foodTitle:["BBQ Burger" , "Spicy Burger" , "Big  Burger"],
            foodDescription:["An awasome BBQ Burger" , "A very spicy burger for those who like spicy things", "A big burger who is really hungry"],
            price:["10", "14" , "15"],
            foodSize:3,  
          })} image={burger} text='BURGER' 
          />

          <FoodItems render={() => navigation.navigate('FoodScreen',{
            text:'PIZZA',
            image:[pizza,burger,momo],
            foodTitle:["BBQ pizza", "cheese pizza" , "Large pizza"],
            foodDescription:["An awasome BBQ pizza" , "A very spicy pizza for those who like spicy things", "A big pizza who is really hungry"],
            price:["10", "14" , "15"],
            foodSize:3,
            })}
            image={pizza} 
            text='PIZZA' 
            />

          <FoodItems render={() => navigation.navigate('FoodScreen',{
            text:'MOMO',
            image:[momo,burger,pizza],
            foodTitle:["BBQ pizza", "cheese pizza" , "Large pizza"],
            foodDescription:["An awasome BBQ momo" , "A very spicy momo for those who like spicy things", "A big momo who is really hungry"],
            price:["10", "14" , "15"],
            foodSize:3,
            
            })} 
            image={momo} 
            text='MOMO' 
            />
        </ScrollView>
      </View>
  );
}

const cart  = createStackNavigator();

const CartScreen  = () => {
  return(
    <cart.Navigator headerMode='none'>
        <cart.Screen name='MyStack' component={MyStack}/>
        <cart.Screen name='FoodScreen' component={FoodScreen} /> 
        <cart.Screen name='Cart' component={Cart} /> 
        <cart.Screen name='FoodDetails' component={FoodDetails} />
        <cart.Screen name='FoodDetailScreen' component={FoodDetailScreen} />
    </cart.Navigator>
  )
}
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return(
    // <SplashScreen />
       <Drawer.Navigator 
         initialRouteName="cart" 
         drawerPosition='left' 
         drawerType='front' 
         drawerStyle={{backgroundColor:'orange',width:250}}
         edgeWidth={70}
         >
         <stack.Screen name='Home' component={CartScreen} />
       </Drawer.Navigator>
    )
}

const stack = createStackNavigator();

export default function App( ){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Drawer' headerMode='none'>
        <stack.Screen name='Drawer' component={DrawerScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

