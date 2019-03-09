import React from 'react';

import '../modal.css';

const modal = (props) => {
    return (
        <div>{props.show?<div className={props.className}>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h3>{props.header}</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                        {props.children}
                </div>
            </div>
        </div>:null}
        </div>
    )
}

export default modal;