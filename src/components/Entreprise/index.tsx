import { EntrepriseInfos } from '@/types/Entreprise'
import React, { useCallback, useState } from 'react'
import styles from '../ArticleHome/ArticleHome.module.scss'
import Badge from '../Badge'
import { Emoji } from 'emoji-picker-react'
import Image from 'next/image'
import Modal from '../Modal'

const Entreprise = ({
    dates,
    name,
    side,
    tags,
    emoji,
    description,
    logo,
    template
}: EntrepriseInfos) => {

    const [showModal, setShowModal] = useState<boolean>(false)

    const openModal = useCallback(() => {
        setShowModal(true);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);

    const closeModal = useCallback((event: React.MouseEvent) => {
        if (event) {
            event.stopPropagation()
        }
        setShowModal(false);
    }, []);

    return (
        <button className={styles.articleHome} onClick={openModal}>
            <div className={styles.badge}>
                <Badge variant={side as 'default' | 'light' | 'dark' | 'primary' | 'red' | 'green' | 'front' | 'back'} style={{ padding: ".5rem" }}>
                    <Emoji unified={emoji} size={15} />
                    {side.charAt(0).toUpperCase() + side.slice(1).toLowerCase()}
                </Badge>
            </div>
            <h3 className={styles.name}>
                {name}
            </h3>
            {description && <p className={styles.description}>
                {description}
            </p>}
            <p className={styles.dates}>
                {dates}
            </p>
            <div className={styles.tags}>
                {tags.map(tag => (
                    <div className={styles.tag} key={tag}>
                        {tag}
                    </div>
                ))}
            </div>

            {/* Position absolue pour le mettre sur la droite de la div */}
            <Image
                src={logo}
                alt={name}
                className={styles.entrepriseLogo}
            />

            {showModal &&
                <Modal
                    closeModal={closeModal}
                >
                    {template}
                </Modal>}
        </button>
    )
}

export default Entreprise