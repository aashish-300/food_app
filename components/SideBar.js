import React from 'react';
import { View , Text } from 'react-native'
import { Container } from 'native-base';

export default function SideBar(){
    return(
        <Container style={{
            backgroundColor:'orange'
        }}>
            <View>
                <Text>hello world</Text>
            </View>

        </Container>
    )
}