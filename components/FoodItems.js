import React from 'react'
import { Image , View , Text , Dimensions , TouchableOpacity } from 'react-native';
import styles from './styles/FoodItemStyle';


function FoodItems(props) {
    const  item = props.text;
    return (
        <TouchableOpacity onPress={props.render }>
            <View style={styles.foodCard}>
                <View >
                    <Image style={styles.item} source={props.image} resizeMode='contain'  blurRadius={2} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.foodTitle}>{props.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodItems
