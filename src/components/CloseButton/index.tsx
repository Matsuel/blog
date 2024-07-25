import React, { MouseEventHandler } from 'react'
import styles from './CloseButton.module.scss'
import CloseCross from '@/assets/CloseCross.svg'
import Image from 'next/image'

interface CloseProps {
    closeFunction: MouseEventHandler<HTMLButtonElement>
}


const CloseButton = ({
    closeFunction
}: CloseProps) => {
    return (
        <button className={styles.closeButton} onClick={closeFunction}>
            <Image src={CloseCross} className={styles.closeButtonImg} alt='close button' />
        </button>
    )
}

export default React.memo(CloseButton)