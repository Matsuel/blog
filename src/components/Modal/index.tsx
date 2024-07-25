import React, { LegacyRef, MouseEventHandler } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import CloseButton from '../CloseButton';
import { useClickAway } from '@uidotdev/usehooks';

interface ModalProps {
    closeModal: Function;
}

// Hook useDocumentTitle pour définir le titre de la page à celui de l'article

const Modal = ({
    closeModal
}: ModalProps) => {

    const clickAwayRef = useClickAway(() => {
        closeModal()
    })

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.modalContainer} ref={clickAwayRef as LegacyRef<HTMLDivElement>}>
                <div className={styles.closeButtonWrapper}>
                    <CloseButton closeFunction={closeModal as MouseEventHandler<HTMLButtonElement>} />
                </div>
            </div>
        </div>,
        document.body
    )
}

export default React.memo(Modal)