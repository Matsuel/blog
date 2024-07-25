import React, { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import CloseButton from '../CloseButton';

interface ModalProps {
    closeModal: MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({
    closeModal
}: ModalProps) => {
    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <div className={styles.closeButtonWrapper}>
                    <CloseButton closeFunction={closeModal} />
                </div>
            </div>
        </div>,
        document.body
    )
}

export default React.memo(Modal)