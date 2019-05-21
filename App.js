import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import PlaceItem from './src/components/Place/PlaceItem'
import AddNewPlace from './src/components/Place/AddNewPlace'
import PlaceDetail from './src/components/Place/PlaceDetails'
import { connect } from 'react-redux'
import { addNewPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/place'


class App extends Component {
  submitHandler = placeName => {
    this.props.onAddPlace(placeName)
    console.log(placeName)
  }
  onItemPressed = placeKey => {
    this.props.onSelectPlace(placeKey)
  }
  modalCloseHandler = () => {
    this.props.onDeSelectPlace()
  }
  placeDeleteHandler = () => {
    this.props.onDeletePlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Our App</Text>
        <AddNewPlace
          submitHandler={this.submitHandler}
        />
        <PlaceDetail
          selectedItem={this.props.selectedPlace}
          onModalClose={this.modalCloseHandler}
          onItemRemove={this.placeDeleteHandler}
        />
        <FlatList
          data={this.props.places}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addNewPlace(placeName)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (placeKey) => dispatch(selectPlace(placeKey)),
    onDeSelectPlace: () => dispatch(deselectPlace())
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

export default connect(mapStateToProps, mapDispatchToProps)(App)