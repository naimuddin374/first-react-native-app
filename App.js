import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
        places: prevState.places.concat({
          key: Math.random().toString(),
          value: prevState.placeName
        })
      }
    })
    this.setState({
      placeName: ""
    })
  }
  removePlaceItem = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return key !== place.key
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
        <FlatList
          data={this.state.places}
          style={styles.listContainer}
          renderItem={(info) => (
            <PlaceItem
              key={info.item.key}
              placeName={info.item.value}
              onItemPressed={() => this.removePlaceItem(info.item.key)}
            />
          )}
        />
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
