import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { loadImage } from "../action-creators";

class AppContainer extends React.Component {
    componentDidMount() {
       this.props.loadImage();
    }
    render() {
        return (
            <div className='app-container'>
                {this.props.children}
            </div>
        );
    }
}
AppContainer.displayName = 'AppContaner';
AppContainer.propTypes = {
  loadImage: PropTypes.func.isRequired,

};

const actionCreators={
  loadImage
}
export default connect(undefined, actionCreators)(AppContainer);