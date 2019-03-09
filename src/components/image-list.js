import React from 'react'
import { connect } from 'react-redux'

import ImagepreView from './image-preview';

const ImageList=(props)=>{
    const {imageList}=props;
    return(
          <div className='image-list'>
              {
                  imageList.map((image, index)=>{
                      return(
                        <ImagepreView
                            imageDetails={image}
                            key={index}
                        />
                      )
                  })
              }
          </div>
      )

}
const mapStateToProps = state => {
  const { imageState} = state;
  return {
    imageList: imageState.imageList
  }
}
export default connect(mapStateToProps) (ImageList);