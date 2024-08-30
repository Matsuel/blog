"use client"

import React from 'react'
import styles from '../Article.module.scss'
import { ArticleProps } from '../Shinken'
import ArticleLayout from '@/components/ArticleLayout'
import CustomLink from '@/components/CustomLink'
import Image from 'next/image'
import Python from '@/assets/python.svg'
import Pandas from '@/assets/pandas.svg'
import ReactLogo from '@/assets/react.svg'
import MongoDB from '@/assets/mongodb.svg'

const Connaissances = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>

            <div className={styles.paragraphe}>Lors de mon stage chez <CustomLink title='Shinken Solutions' href='https://www.shinken-enterprise.com/' is_underline />, j'ai eu l'opportunité de mobiliser un ensemble de compétences techniques que j'avais acquises au cours de ma formation, mais également à travers mon travail personnel. Bien que le sujet du stage, axé sur le développement de nouvelles fonctionnalités pour l'interface utilisateur et la gestion des notifications, m'était initialement inconnu, mes compétences en Python et en développement web m'ont permis de m'adapter rapidement et de contribuer efficacement aux projets en cours.</div>
            
            <div className={[styles.paragraphe, styles.title].join(" ")}>1. Apprentissage académique en Python : Le chatroom, une grande aide pour les options de notification</div>
            <div className={styles.paragraphe}>Mon expérience avec Python<span><Image src={Python} className={styles.TechLogo} alt='Python'/></span> remonte à mes études, où j'ai réalisé plusieurs projets marquants, notamment la création d'une chatroom et d'un RPG en ligne de commande (CLI). Ces projets m'ont permis de comprendre les bases du développement backend, la gestion des connexions, et la manipulation des données en temps réel. À travers la chatroom, j'ai appris à gérer des sockets, structurer un serveur capable de prendre en charge plusieurs utilisateurs simultanément, et manipuler efficacement des données textuelles. Le développement du RPG en CLI, quant à lui, m'a renforcé dans la gestion des flux d'information et des interactions utilisateur dans un environnement minimaliste.</div>
            <div className={styles.paragraphe}>Ces compétences se sont révélées particulièrement utiles lors de mon stage. En travaillant sur les nouvelles fonctionnalités de notification, j'ai été confronté à des défis similaires, tels que la gestion des états et des événements en temps réel (comme la notification de l'état d'un hôte surveillé). Le projet de la chatroom m'a donné une solide compréhension des principes de la communication en réseau et des interactions en temps réel, ce qui m'a permis de me familiariser plus facilement avec le code existant de <CustomLink title='Shinken' href='https://www.shinken-enterprise.com/' is_underline /> et de contribuer à son amélioration.</div>
            
            
            <div className={[styles.paragraphe, styles.title].join(" ")}>2. Manipulation des données : De l'école à l'entreprise</div>
            <div className={styles.paragraphe}>La manipulation de données est une autre compétence clé que j'ai développée au cours de mes études et qui a été cruciale durant mon stage. Que ce soit dans le cadre de projets académiques ou personnels, j'ai appris à traiter des données sous diverses formes : structures JSON, bases de données relationnelles, etc. Ces compétences m'ont été très utiles lorsque j'ai travaillé sur le développement de nouvelles propriétés de notifications et la migration des anciennes valeurs vers les nouvelles configurations via MongoDB <span><Image src={MongoDB} className={styles.TechLogo} alt='MongoDB'/></span>.</div>
            <div className={styles.paragraphe}>Par exemple, lors de la création d'un script de migration, j'ai dû manipuler des données à grande échelle, tout en veillant à la cohérence et à l'intégrité des informations. Les compétences acquises en cours, notamment la gestion des collections de données et l'utilisation de bibliothèques Python comme Pandas<span><Image src={Pandas} className={styles.TechLogo} alt='Pandas'/></span> pour traiter des données complexes, m'ont permis de réaliser ces tâches avec confiance et efficacité.</div>
            
            
            <div className={[styles.paragraphe, styles.title].join(" ")}>3. Travail personnel en React : Une passerelle entre le front-end et <CustomLink title='Shinken' href='https://www.shinken-enterprise.com/' is_underline /></div>
            <div className={styles.paragraphe}>En dehors de mes études, j'ai consacré beaucoup de temps à l'apprentissage de React <span><Image src={ReactLogo} className={styles.TechLogo} alt='React'/></span> que ce soit React JS <span><Image src={ReactLogo} className={styles.TechLogo} alt='React'/></span> pour le développement d'interfaces utilisateurs dynamiques et interactives ou plus récemment React Native <span><Image src={ReactLogo} className={styles.TechLogo} alt='React'/></span> pour la création d'applications mobiles. Cette expertise en React s'est avérée extrêmement précieuse lors de mon stage, surtout pour la partie JavaScript de <CustomLink title='Shinken' href='https://www.shinken-enterprise.com/' is_underline />. Bien que le contexte et les outils soient différents, la logique sous-jacente du développement front-end est restée la même.. L'utilisation intensive de React dans mes projets personnels m'a permis de maîtriser la création de composants réutilisables, mais également l'interaction avec des API backend.Ces compétences se sont directement appliquées au travail que j'ai effectué chez <CustomLink title='Shinken' href='https://www.shinken-enterprise.com/' is_underline />, où j'ai dû adapter mon savoir-faire à leur stack technologique spécifique. Par exemple, le développement du tableau réutilisable pour la gestion des notifications m'a permis d'exploiter les concepts de composants modulaires que j'avais appris avec React, même si l'implémentation se faisait dans un environnement différent.</div>
            
            
            <div className={styles.paragraphe}>Mon stage chez <CustomLink title='Shinken Solutions' href='https://www.shinken-enterprise.com/' is_underline /> m'a offert l'occasion de mettre en pratique et de renforcer les compétences acquises tant à l'école que dans mes projets personnels. La combinaison de mon expérience en Python<span><Image src={Python} className={styles.TechLogo} alt='Python'/></span>, acquise lors de la création de projets comme une chatroom, et de mes compétences en React<span><Image src={ReactLogo} className={styles.TechLogo} alt='React'/></span>, m'a permis de m'adapter rapidement à un environnement professionnel complexe. Cette expérience m'a non seulement permis de développer des fonctionnalités critiques pour l'entreprise, mais aussi de réaliser à quel point les compétences acquises dans un contexte académique ou personnel peuvent se compléter et se renforcer mutuellement dans un cadre professionnel.</div>
        </ArticleLayout>
    )
}

export default Connaissances