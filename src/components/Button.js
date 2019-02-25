import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native'

export default props => {
    const stylesButtom = [styles.button]
    if(props.double) stylesButtom.push(styles.buttonDouble)
    if(props.ac) stylesButtom.push(styles.buttonAC)
    if(props.operation) stylesButtom.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButtom}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width : Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width : Dimensions.get('window').width / 2,
    },
    buttonAC: {
        width : Dimensions.get('window').width * 3/4,
    }
})