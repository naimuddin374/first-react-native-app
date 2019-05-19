import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaceItem from './src/components/Place/PlaceItem'
import AddNewPlace from './src/components/Place/AddNewPlace'


export default class App extends Component {
  state = {
    placeName: "",
    places: []
  }
  changeHandler = value => {
    this.setState({
      placeName: value
    })
  }
  submitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
    this.setState({
      placeName: ""
    })
  }
  removePlaceItem = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return index !== i
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddNewPlace
          placeName={this.state.placeName}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        <ScrollView style={styles.listContainer}>
          {
            this.state.places.map((place, i) => (<PlaceItem
              key={i}
              placeName={place}
              onItemPressed={() => this.removePlaceItem(i)}
            />))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
  },
  listContainer: {
    width: "100%"
  }
});
