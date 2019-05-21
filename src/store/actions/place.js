import * as Types from './actionTypes'

export const addNewPlace = (placeName) => {
    return {
        type: Types.ADD_PLACE,
        payload: {
            placeName
        }
    }
}
export const deletePlace = () => {
    return {
        type: Types.DELETE_PLACE
    }
}
export const selectPlace = (placeKey) => {
    return {
        type: Types.SELECT_PLACE,
        payload: {
            placeKey
        }
    }
}
export const deselectPlace = () => {
    return {
        type: Types.DESELECT_PLACE
    }
}