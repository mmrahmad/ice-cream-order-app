import React from 'react'
import Claases from './Modal.module.css'

function Modal({children}) {
    return (
        <div class>
              <div className={Claases.backdrop}></div>
              <div className={Claases.modalBody}>
                {children}
              </div>
            </div>
    )
}

export default Modal
