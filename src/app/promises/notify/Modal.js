// components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ message, reject , resolve }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <div style={{padding: 40}} className="modal-content">
                    <div style={{marginLeft: 5}}>
                        {message}
                    </div>
                    <br/>
                    <button style={{marginRight: 20}}  onClick={resolve}>да</button>
                    <button style={{marginRight: 20}} onClick={reject}>нет</button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
