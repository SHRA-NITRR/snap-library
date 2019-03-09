import { combineReducers } from 'redux'
import {
  SELECT_IMAGE,
  SELECT_PLAYLIST,
  LOAD_IMAGES,
  CLOSE_MODAL
} from '../actions'

const selectedImg = (state = {imgId:0}, action) => {
  switch (action.type) {

    case SELECT_IMAGE:
      return {
        imgId:action.imgId  
    }
 
    default:
      return state
  }
}

const imageState = (state = {imageList:[], imageType:'animals'}, action) => {
  switch (action.type) {

    case LOAD_IMAGES:
      return {
        imageList:action.images,
        imageType:action.imageType
      }
    default:
      return state
  }
}

const modal = (state = {isModalOpen:false}, action) => {
  switch (action.type) {

    case SELECT_IMAGE:
      return {
        isModalOpen:true
      }
    
    case CLOSE_MODAL:
      return {
        isModalOpen:false
      }
    
    default:
      return state
  }
}
const rootReducer = combineReducers({
  selectedImg,
  imageState,
  modal
})

export default rootReducer
