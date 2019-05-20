import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

const PlaceItem = (props) => (
    <TouchableWithoutFeedback onPress={props.onItemSelected}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage} />
            <Text style={styles.placeName}>{props.placeName}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        backgroundColor: "#eee",
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    placeName: {
        color: "black",
        fontSize: 24
    }
})
export default PlaceItem