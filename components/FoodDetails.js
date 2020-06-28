import React from 'react'
import { View , Text , Image , TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles/FoodDetailsStyle'


function FoodDetails(props) {
const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('FoodDetailScreen',{
            image:props.image,
            price:props.prices,
            title:props.foodTitle

        }) }>
            <View style={styles.FoodItemView}>
                <View style={styles.priceView} >
                    <Text style={styles.priceText}> {props.prices}$ </Text>
                </View>
                <View style={styles.foodImageView}>
                    <Image style={styles.foodImage} source={props.image} resizeMode='contain' />
                </View>
                <View style={styles.foodDescriptionView}>
                    <View style={styles.foodTextView}>
                        <Text style={styles.textTitle}>{props.foodTitle}</Text>
                        <Text style={styles.textBody}>{props.foodDescription}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodDetails
