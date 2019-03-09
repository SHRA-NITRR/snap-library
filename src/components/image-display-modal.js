import { connect } from 'react-redux'
import {closeModal } from '../action-creators';
import Modal from './modal';
import React from 'react';

const ImageDisplyModal=(props)=>{

  const {imageDetails}=props;

  return(
    <Modal
          className="modal"
          show={props.isModalOpen}
          close={props.close}
          header={props.imageDetails.Title}
    >
      <div className="thumbnail" >
              <div className="image-placeholder" >
                  <img src={imageDetails.ImageURLs.FullSize}  height= "500" width="650" alt='not available'/>
              </div>
              <div className="image-header" >
                  <div className="image-title" >
                      {imageDetails.Title}
                  </div>
                  <div className='image-details-container'>
                    <div className="image-details">  
                        <div className='attribute'>Family</div>
                        <div className='value'>{imageDetails.Family}</div>
                    </div>
                    <div className="image-details"> 
                        <div className='attribute'>CollectiveNoun</div>
                        <div className='value'>{imageDetails.CollectiveNoun || '-'}</div>
                    </div>
                    <div className="image-details"> 
                        <div className='attribute'>Genus</div>
                        <div className='value'>{imageDetails.Genus|| '-'}</div>
                    </div>
                    <div className="image-details">  
                        <div className='attribute'>Description</div>
                        <div className='value'>{imageDetails.Description}</div> 
                    </div>
                  </div>
              </div>
        </div>
    </Modal>
  );
};
const mapStateToProps = (state)=> {
    const { imageState, selectedImg, modal} = state;
    const electedImage= imageState.imageList.find( (obj)=> { return obj.Id === selectedImg.imgId; });
    return {
      isModalOpen:modal.isModalOpen,
      imageDetails: electedImage
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      close:()=>dispatch(closeModal())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplyModal);