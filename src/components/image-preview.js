import React from 'react'
import { connect } from 'react-redux'
import {selectSong } from '../action-creators';

const ImagePreview=(props)=>{
    const {imageDetails}=props;
    return(
            <div className="image-block" onClick={()=>props.selectImage(imageDetails.Id)}>
                <div className="thumbnail" >
                        <img src={imageDetails.ImageURLs.Thumb} className='thumnail-image' alt='not available'/>
                    <div className="image-header" >
                        <div className="image-title" >
                            {imageDetails.Title}
                        </div>
                        <div className="image-details">  
                            {imageDetails.Description}
                        </div>
                    </div>
                </div>
                
            </div>
      )

}
const mapStateToProps = (state, ownProps)=> {  
    return {
      imageDetails:ownProps.imageDetails
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        selectImage:(imgId)=>dispatch(selectSong(imgId))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ImagePreview);