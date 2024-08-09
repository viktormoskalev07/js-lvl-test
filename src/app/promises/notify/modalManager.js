// utils/modalManager.js
import React from 'react';
import {createRoot} from 'react-dom/client';
import Modal from './Modal';

let modalContainer = null;

const showModal = (message) => {
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        document.body.appendChild(modalContainer);
    }

    const root = createRoot(modalContainer);
    return new Promise((resolve, reject) => {
        const onClose =()=>{
            try {
                root.unmount();
                modalContainer.remove();
                modalContainer = null;
            } catch (e) {
                console.log(e)
            }
        }
        const fullReject = () => {
            onClose()
            reject()
        };
        const fullResolve =()=>{
            onClose()
            resolve()
        }

        root.render(<Modal message={message} reject={fullReject} resolve={fullResolve}/>);
    })
};

export { showModal };
