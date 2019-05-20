import React from 'react'
import { Modal, Image, View, Text, StyleSheet, Button } from 'react-native'

const PlaceDetail = props => {
    let modalContent = null
    if (props.selectedItem) {
        modalContent = (
            <View>
                <Image source={props.selectedItem.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedItem.name}</Text>
            </View>
        )
    }
    return (
        <Modal
            visible={props.selectedItem !== null}
            animationType="slide"
            transparent={false}
        >
            <View style={styles.modalContent}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemRemove} />
                    <Button title="Close" onPress={props.onModalClose} />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContent: {
        margin: 10
    },
    placeName: {
        fontWeight: "bold",
        alignItems: "center",
        fontSize: 24,
        color: "black",
        textAlign: "center",
        marginBottom: 10
    },
    placeImage: {
        width: "100%",
        height: 200
    }
})

export default PlaceDetail