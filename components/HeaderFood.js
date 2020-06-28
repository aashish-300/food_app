import React from 'react';
import { StatusBar, Text, View , Alert  } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Icon,
  Right
}from 'native-base';

import styles from './styles/HeaderStyle';

export default function HeaderFood(props) {
  return (
   <Container style={styles.headerContainer}>
     <Header style={styles.header}>

       <Left style={styles.headerLeft}>
         <Button transparent onPress={props.render}>
            <Icon type='AntDesign' name='arrowleft' style={styles.icon} />
         </Button>
       </Left>

       <Body style={styles.headerBody}>
         <Text style={styles.headerText}>Foodstagram</Text>
       </Body>

       <Right style={styles.headerRight}>
          <Button transparent onPress={props.cart} >
          <Icon type='AntDesign' name='shoppingcart' style={styles.icon} />

          </Button>
       </Right> 

     </Header>
   </Container>
  );
}

