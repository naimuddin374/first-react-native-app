import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const AddNewPlace = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            name="placeName"
            placeholder="Enter Place Name"
            value={props.placeName}
            onChangeText={props.changeHandler}
            style={styles.placeInput}
        />
        <Button title="Add" style={styles.placeButton} onPress={props.submitHandler} />
    </View>
)


const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    placeInput: {
        width: "80%"
    },
    placeButton: {
        width: "20%"
    }
});

export default AddNewPlace