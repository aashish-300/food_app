import React from 'react'
import { View } from 'react-native'
import { Text , Content } from  'native-base'

import HeaderFood from './HeaderFood'
import  styles from './styles/CartStyle'
import CartItem from './CartItem'

function Cart({navigation}) {
    return (
        <View>
                <HeaderFood render={() => navigation.goBack()} />
            <View style={styles.ParentView}>
                <Content>
                    <CartItem text='BBQ Burger' price='10' />     
                    <CartItem text='Spicy Burger' price='12'/>     
                    <CartItem text='large Burger' price='15'/>     
                </Content>
                <View style={styles.FooterContainer}>
                    <Text style={styles.FooterText}>
                        Total:
                    </Text>
                </View>
            </View>
        </View>        
    )
}

export default Cart
