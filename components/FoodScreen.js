import React from 'react';
import { View , Text  } from 'react-native';
import {Container , Content } from 'native-base'

import HeaderFood from './HeaderFood';
import styles from './styles/FoodItemStyle';
import FoodDetails from './FoodDetails';

function FoodScreen({ route, navigation }) {
    const { text } = route.params;
    const {image} = route.params;
    const {foodSize} = route.params;
    const {price} = route.params;
    const {foodTitle} = route.params;
    const {foodDescription} = route.params;

    var foodDetail = [];
    for(let i=0;i<foodSize;i++){
        foodDetail.push(
        <View>
            <FoodDetails 
                image={image[i]}
                prices={price[i]}
                foodTitle={foodTitle[i]}
                foodDescription={foodDescription[i]}
            />
        </View>
        )
    }
    return(
        <Container style={{ flex:1 }}>
                <HeaderFood render={ () => navigation.goBack()} cart={() => navigation.navigate('Cart')} />
                <Content style={{backgroundColor:'whitesmoke'}}>
                     <Text style={styles.titleText}>{text}</Text>
                        {foodDetail}
                </Content>        
        </Container>
            )
}

export default FoodScreen;