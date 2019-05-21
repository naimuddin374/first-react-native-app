import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

class AddNewPlace extends React.Component {
    state = {
        placeName: ""
    }
    onChangeHandler = val => {
        this.setState({
            placeName: val
        })
    }
    placeAddHandler = () => {
        if (this.state.placeName.trim() === "") {
            return
        }
        this.props.submitHandler(this.state.placeName)
        this.setState({
            placeName: ""
        })
    }
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    name="placeName"
                    placeholder="Enter Place Name"
                    value={this.state.placeName}
                    onChangeText={this.onChangeHandler}
                    style={styles.placeInput}
                />
                <Button title="Add" style={styles.placeButton} onPress={this.placeAddHandler} />
            </View>
        )
    }
}

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