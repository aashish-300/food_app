import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

export default function HeaderLanding(props) {
  return (
   <Container style={styles.headerContainer}>
     <Header style={styles.header}>

       <Left style={styles.headerLeft}>
         <Button transparent onPress={props.render}>
            <Icon name='menu' style={styles.icon} />
         </Button>
       </Left>

       <Body style={styles.headerBody}>
         <Text style={styles.headerText}>Foodstagram</Text>
       </Body>

       <Right style={styles.headerRight}>
          <Button transparent onPress={props.cart}>
            <Icon type='AntDesign' name='shoppingcart' />
          </Button>
       </Right>

     </Header>
   </Container>
  );
}

