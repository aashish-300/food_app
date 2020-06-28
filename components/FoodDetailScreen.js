import React from 'react'
import { View ,Text , ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container , Content , Button , Icon } from 'native-base'

import HeaderFood from './HeaderFood'
import styles from './styles/FoodDetailScreenStyle'

function FoodDetailScreen({route}) {
    const { image } = route.params;
    const { price } = route.params;
    const { title } = route.params;

    const navigation = useNavigation();
    
    return (
        <Container style={styles.container}>
            <HeaderFood render={() => navigation.goBack()} />
            <ImageBackground source={image} style={styles.backgroundImage}  resizeMode='cover' />
            <View style={styles.foodContent}>
                <View style={styles.foodText}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.text}>{price}$</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button}>
                        <Text style={styles.buttonText}>Add</Text>
                        <Icon name='plus' type='Entypo' />
                    </Button>
                </View>
            </View>
        </Container>
    )
}

export default FoodDetailScreen
