import React from 'react';
import { loadImage } from "../action-creators";
import { connect } from 'react-redux'

const Header=(props)=>{

const isActive=(imgType)=>{
    return props.imageType===imgType;
}
const getClassName=(imgType)=>{
    return isActive(imgType)?'navigation-link--active':'navigation-link';
}

return(
    <nav className='navigation-container'>
        <ul className="navigation">
            <li className="navigation-item">
                <button onClick={()=>props.loadImage('animals') }   className={getClassName('animals')}>ANIMALS</button>
            </li>
            <li className="navigation-item">
                <button onClick={()=>props.loadImage('fruitveg')}   className={getClassName('fruitveg')}>FRUITS & VEG</button>
            </li>
        </ul>
        <h1 className='app-name'>Explore Nature</h1>
    </nav>
)
}
const mapStateToProps = (state)=> {
    const {imageState} = state;
  
    return {
      imageType:imageState.imageType
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        loadImage:(imgId)=>dispatch(loadImage(imgId))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);