"use client"

import React from 'react'
import styles from '../Article.module.scss'
import ArticleLayout from '@/components/ArticleLayout'
import { ArticleProps } from '../Shinken'

const BilanShinken = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>

            <div className={styles.paragraphe}>Cette expérience m&apos;a offert une immersion approfondie dans le développement logiciel au sein d&apos;un environnement professionnel, où j&apos;ai pu contribuer directement à l&apos;amélioration des outils de surveillance proposés par l&apos;entreprise. L&apos;objectif principal de ce stage était de participer à l&apos;élaboration de nouvelles fonctionnalités pour l&apos;interface utilisateur, notamment en ce qui concerne la gestion des notifications.</div>
            <div className={styles.paragraphe}>Durant ce stage, j&apos;ai eu l&apos;opportunité de développer et de renforcer un large éventail de compétences techniques.</div>
            <div className={styles.paragraphe}>J&apos;ai travaillé sur des tâches spécifiques en Python, que l&apos;entreprise utilise pour son back-end, telles que :</div>
            <div className={styles.paragraphe}>- Le développement de nouvelles propriétés de notifications ainsi que leurs nouvelles valeurs <span className={styles.bold}>Voir article: </span> <span className={styles.underline}>Ajout options de notification</span></div>
            <div className={styles.paragraphe}>- La création d&apos;un script permettant de migrer les anciennes valeurs dans les nouvelles pour les installations déjà en place <span className={styles.bold}>Voir article: </span> <span className={styles.underline}>Ajout options de notification</span></div>
            <div className={styles.paragraphe}>- Le développement d&apos;un tableau réutilisable afin de pouvoir intégrer des nouvelles valeurs dans le futur <span className={styles.bold}>Voir article: </span> <span className={styles.underline}>Développement et design d&apos;un nouveau tableau de notification</span></div>
           
            <div className={styles.paragraphe}>Ces expériences m&apos;ont permis de consolider ma maîtrise de Python tout en découvrant des aspects plus avancés du langage, comme la gestion des migrations entre les versions 2 et 3. En parallèle, j&apos;ai également découvert l&apos;importance du design d&apos;interface utilisateur grâce à l&apos;utilisation de Figma. Cet outil m&apos;a été particulièrement précieux pour créer des maquettes et visualiser les concepts avant leur implémentation.</div>
            
            <div className={styles.paragraphe}>L&apos;une des principales leçons que j&apos;ai tirées de ce stage est l&apos;importance de l&apos;adaptabilité. Intégrer une entreprise avec une base de code déjà bien établie a été un véritable défi. Il m&apos;a fallu un temps d&apos;adaptation pour comprendre l&apos;architecture existante, m&apos;approprier les conventions de codage, et surtout naviguer dans un environnement en pleine transition de Python 2 à Python 3. La gestion des priorités entre l&apos;apprentissage de nouveaux outils et la production de code fonctionnel s&apos;est révélée être une compétence cruciale que j&apos;ai progressivement développée.</div>
            
            <div className={styles.paragraphe}>Cependant, tout n&apos;a pas été sans difficulté. Un des défis majeurs que j&apos;ai rencontrés a été la prise en main du CSS et la gestion des classes pour styliser les composants de manière cohérente. Bien que le CSS puisse sembler simple au premier abord, j&apos;ai rapidement découvert que sa maîtrise, notamment en termes de compatibilité avec différents navigateurs tels qu&apos;Internet Explorer, pose des problèmes complexes. Ce fut une source de frustration, car les différences de rendu d&apos;un navigateur à l&apos;autre ont parfois ralenti mon travail et compliqué la mise en place d&apos;un design uniforme. De plus, la nécessité de créer des composants réutilisables tout en respectant les conventions de nommage de l&apos;entreprise s&apos;est avérée être un exercice rigoureux, mais formateur. Ces aspects m&apos;ont permis de comprendre l&apos;importance de la rigueur et de la patience dans le développement.</div>

            <div className={styles.paragraphe}>Un autre aspect plus difficile a été la gestion des délais. En tant que stagiaire, j&apos;ai parfois eu du mal à estimer correctement le temps nécessaire pour accomplir certaines tâches, surtout celles impliquant des technologies ou des pratiques que je ne maîtrisais pas entièrement.</div>

            <div className={styles.paragraphe}>Malgré ces défis, ce stage a marqué un tournant dans mon parcours professionnel. Non seulement, il m&apos;a permis de renforcer mes compétences techniques, mais il m&apos;a aussi donné une vision plus claire de mon avenir en tant que développeur. Je me sens désormais plus confiant dans ma capacité à m&apos;adapter à un code existant, à gérer des projets complexes et à collaborer au sein d&apos;une équipe. À l&apos;avenir, j&apos;aimerais approfondir mes connaissances en design d&apos;interfaces et en optimisation de l&apos;expérience utilisateur, bien que ces domaines ne soient pas mes favoris dans le développement.</div>

            
        </ArticleLayout>
    )
}

export default BilanShinken