"use client"

import React from 'react'
import styles from '../Article.module.scss'
import ArticleLayout from '@/components/ArticleLayout'
import { ArticleProps } from '../Shinken'
import Avant from '@/assets/affichage actuel options de notification customs.png'
import Maintenant from '@/assets/tableau fini avec tooltip.png'
import Image from 'next/image'

const Evolutivite = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>

            <div className={styles.paragraphe}>Après avoir finalisé le développement des nouvelles options et propriétés, et à la suite de discussions au sein de l'équipe, nous avons décidé de remplacer les champs de texte par des tableaux de cases à cocher pour configurer les options de notification. Ces discussions ont fait émerger plusieurs problématiques importantes :</div>
            <div className={styles.paragraphe}>- Pourquoi remplacer les champs de texte par des tableaux de cases à cocher ?</div>
            <div className={styles.paragraphe}>- Comment l'utilisation et l'apprentissage de Figma m'ont permis de créer des maquettes réussies, en alignant mes idées avec les besoins de l'entreprise ?</div>
            <div className={styles.paragraphe}>- Comment créer un composant réutilisable et personnalisable pour éviter de devoir redévelopper les mêmes éléments ?</div>
            <div className={styles.paragraphe}>- Comment un développeur débutant dans la mise en forme de sites web peut-il rapidement maîtriser les concepts fondamentaux du CSS et la gestion des classes, malgré la complexité et la multitude d'options disponibles ?</div>
            
            <div className={styles.paragraphe}>Lors des tests des nouvelles options de notification, nous avons constaté que la configuration de ces options via l'interface de configuration était trop complexe, notamment en raison de la nomenclature des options. L'introduction d'un tableau avec des cases à cocher a permis de simplifier considérablement cette étape, en évitant aux utilisateurs de perdre du temps à saisir chaque option manuellement et en réduisant les erreurs de saisie. Une fois ce problème identifié, j'ai été chargé de réaliser plusieurs maquettes pour concrétiser les idées partagées par les différentes parties prenantes, y compris le directeur général et les tech leads.</div>
            <div className={styles.paragraphe}>Voici un exemple de l'affichage actuel des options de notification customs :</div>
            <Image src={Avant} alt="Affichage actuel des options de notification customs" className={styles.image} />
            
            <div className={styles.paragraphe}>Pour concevoir ces prototypes, j'ai consacré trois jours à me former à l'utilisation de Figma. Durant cette période, j'ai suivi les conseils de mon chef et échangé avec mes collègues, qui avaient déjà commencé à travailler sur certains prototypes, afin d'éviter de dupliquer les efforts. Pour m'inspirer, j'ai utilisé divers outils en ligne permettant de trouver des idées sur des thématiques spécifiques :</div>
            <div className={styles.paragraphe}>-Pinterest</div>
            <div className={styles.paragraphe}>-Dribbble</div>
            <div className={styles.paragraphe}>-Heroicons</div>
            
            <div className={styles.paragraphe}>Pendant le développement de ces tableaux, j'ai dû relever de nouvelles problématiques liées à la réutilisabilité et à l'évolutivité du code, afin que les composants puissent être utilisés dans d'autres contextes. Toutes les fonctions créées devaient être nommées de manière explicite, sans faire référence directement aux options de notification, et la structure de chaque tableau devait respecter la sémantique HTML déjà en place dans les autres composants, assurant ainsi une cohérence globale.            </div>
            
            <div className={styles.paragraphe}>Enfin, une fois le composant réutilisable mis en place et sa structure validée, il a fallu le styliser pour éviter tout problème d'affichage dans l'interface de configuration. Pour cela, j'ai utilisé le langage CSS. Bien que CSS puisse sembler simple à première vue, son utilisation s'est révélée bien plus complexe, car un même style peut être appliqué de différentes manières. J'avais initialement prévu d'utiliser Flexbox pour gérer l'alignement de mes éléments, mais l'entreprise maintenait encore une version pour Internet Explorer, qui ne supportait pas Flexbox.</div>
            
            <div className={styles.paragraphe}>Chaque option de notification était associée à une icône, certaines devant être affichées via des SVG, et d'autres via des polices d'écriture, gérées elles-mêmes par des classes CSS. Nous avons donc mis en place un système de "mapping" ou de correspondance entre chaque icône et la classe qui permettait de l'afficher. Cela a permis de rendre l'affichage des icônes dynamique : en donnant simplement le nom de l'icône, nous pouvions récupérer la liste des classes CSS associées. Cette approche a grandement simplifié la création du composant réutilisable.</div>

            <div className={styles.paragraphe}>Voici un exemple de l'affichage des nouvelles options de notification :</div>
            <Image src={Maintenant} alt="Affichage des nouvelles options de notification" className={styles.image} />
            
            <div className={styles.paragraphe}>Ce projet de développement d'un nouveau tableau de notification a été un véritable défi, tant sur le plan technique que sur le plan de l'interface utilisateur. En remplaçant les champs de texte par des tableaux de cases à cocher, nous avons réussi à simplifier l'expérience utilisateur tout en augmentant l'efficacité de la configuration des notifications. L'apprentissage et l'utilisation de Figma ont été essentiels pour aligner mes propositions avec les besoins de l'entreprise, tandis que le souci de créer des composants réutilisables et personnalisables a permis d'assurer la pérennité et la modularité du code. Malgré les défis rencontrés avec CSS, notamment en ce qui concerne la compatibilité des navigateurs, cette expérience a enrichi ma compréhension du design web et m'a préparé à relever de futurs défis dans le développement d'interfaces utilisateur.</div>
            
        </ArticleLayout>
    )
}

export default Evolutivite