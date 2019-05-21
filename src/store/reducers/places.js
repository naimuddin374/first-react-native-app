import * as Types from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.payload.placeName,
                    image: {
                        uri: "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
                    }
                })
            }
        case Types.DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return state.selectedPlace.key !== place.key
                }),
                selectedPlace: null
            }
        case Types.SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.payload.placeKey
                })
            }
        case Types.DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }

        default: return state
    }
}
export default reducer