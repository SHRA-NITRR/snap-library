import { combineReducers } from 'redux'
import * as actions from '../actions';

const selectedImg = (state = {imgId:0}, action) => {
  switch (action.type) {

    case actions.SELECT_IMAGE:
      return {
        imgId:action.imgId  
    }
 
    default:
      return state
  }
}

const imageState = (state = {imageList:[], imageType:'animals'}, action) => {
  switch (action.type) {

    case actions.LOAD_IMAGES:
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

    case actions.SELECT_IMAGE:
      return {
        isModalOpen:true
      }
    
    case actions.CLOSE_MODAL:
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
