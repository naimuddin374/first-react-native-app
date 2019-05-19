import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const PlaceItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: "#eee",
        width: "100%"
    }
})
export default PlaceItem