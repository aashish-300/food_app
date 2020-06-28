import React from 'react';
import { View , Text , Image} from 'react-native'
import { Icon , Button } from 'native-base'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import styles from './styles/CartItemStyle'



const rightAction = () => {
    return(
        <View style={styles.ButtonView}>
            <Button onPress={() => alert('i am deleted')} style={styles.trashButton}>
                <Icon name='trash' type="EvilIcons" style={styles.trash}/>
            </Button>
        </View>
    )
}
export default function CartItem(props){
return (
    <Swipeable renderRightActions={rightAction}>
        <View style={styles.itemContainer}>
            <View style={styles.bodyContainer}>
                <Image source={require('../assets/burger.jpg')} resizeMode='contain' style={styles.imageView} />
                <View style={styles.textView}>
                    <Text style={styles.text}>{props.text}</Text>
                    <Text style={styles.price}>{props.price}$</Text>
                </View>
                <View style={styles.arrowView}>
                <Button transparent>
                        <Icon name='up' type='AntDesign' />
                    </Button>
                    <Text style={styles.arrowText}>2</Text>
                    <Button transparent>
                        <Icon name='down' type='AntDesign' />
                    </Button>
                </View>
            </View>
        </View>
    </Swipeable>
)

}