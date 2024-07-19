import { EntrepriseInfos } from '@/types/Entreprise'
import React from 'react'
import styles from './Entreprise.module.scss'
import Badge from '../Badge'
import { Emoji } from 'emoji-picker-react'
import Title from '../Title/Title'

const Entreprise = ({
    dates,
    name,
    side,
    tags,
    emoji,
    href,
    description
}: EntrepriseInfos) => {
    return (
        <div className={styles.entreprise}>
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
        </div>
    )
}

export default Entreprise