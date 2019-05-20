import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PlaceItem from './src/components/Place/PlaceItem'
import AddNewPlace from './src/components/Place/AddNewPlace'
import PlaceDetail from './src/components/Place/PlaceDetails'


export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
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
          name: prevState.placeName,
          image: {
            uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        }),
        placeName: ""
      }
    })
  }
  onItemPressed = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return key === place.key
        })
      }
    })
  }
  modalCloseHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }
  placeDeleteHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return prevState.selectedPlace.key !== place.key
        }),
        selectedPlace: null
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
        <PlaceDetail
          selectedItem={this.state.selectedPlace}
          onModalClose={this.modalCloseHandler}
          onItemRemove={this.placeDeleteHandler}
        />
        <FlatList
          data={this.state.places}
          style={styles.listContainer}
          renderItem={(info) => (
            <PlaceItem
              key={info.item.key}
              placeName={info.item.name}
              placeImage={info.item.image}
              onItemSelected={() => this.onItemPressed(info.item.key)}
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
