import * as imageRepository from '../repositories/repository';
import * as actions from '../actions';

export const selectSong = (imgId) => ({
  type: actions.SELECT_IMAGE,
  imgId
})

export const closeModal = (imgId) => ({
  type: actions.CLOSE_MODAL
})

export const loadImage = (imageType='animals') => {
    return async (dispatch) => {
        try {
          const response = await imageRepository.getImages(imageType);   
          dispatch({
            images: response,
            imageType,
            type: actions.LOAD_IMAGES
        });
      } catch (error) {
          return null;
      }
  };
        

};


