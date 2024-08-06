import ArticleLayout from '@/components/ArticleLayout'
import React from 'react'
import styles from './Shinken.module.scss'
import Logo from '@/assets/shinken.png'
import Image from 'next/image';
import CustomLink from '@/components/CustomLink';

interface ArticleProps {
    title: string;
}


const ShinkenArticle = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>
            <Image src={Logo} className={styles.entrepriseLogo} alt='Shinken' />


            <div className={styles.paragraphe}> <CustomLink title='Shinken Solutions' href='https://www.shinken-enterprise.com/' is_underline /> est une entreprise dynamique spécialisée dans la supervision informatique. </div>
            <div className={styles.paragraphe}>Fondée en <span className={styles.bold}>2009</span> par <span className={styles.bold}>Jean Gabès</span>, cette entreprise a rapidement su s&apos;imposer comme un acteur incontournable dans le domaine de la <span className={styles.underline}>surveillance des infrastructures IT.</span> </div>
            <div className={styles.paragraphe}>Située à <CustomLink href='https://maps.app.goo.gl/PvEGLWPDAdmFCTqKA' title='Artigues-près-Bordeaux' is_underline /> entre la sortie 25 et 26 de la rocade bordelaise, Shinken Solutions bénéficie d’un emplacement stratégique dans le Sud-Ouest de la France.</div>

            <div className={styles.paragraphe}>L&apos;objectif principal de Shinken était de créer une solution de monitoring open source qui éait basée sur des technologies récentes (Python et Javascript) pour l&apos;époque et simple de développement (comparé à Nagios qui est fait en C le langage star de l&apos;époque).</div>
            <div className={styles.paragraphe}>Shinken se concentre sur la fourniture d&apos;une solution de monitoring dite Scalable (qui est capable de fonctionner dans une petite entreprise mais également dans une grosse entreprise disposant de 15000 serveurs) grace à son architecture globale sous forme de démons.</div>
            <div className={styles.paragraphe}>Chaque démons dispose d&apos;un rôle qui lui es attribué, les différents démons sont les suivants : </div>
            <div className={styles.paragraphe}> - Synchronizer: Permet de gérer l&apos;interface de configuration ainsi que les échanges avec la base de données </div>
            <div className={styles.paragraphe}> - Arbiter: Gère l&apos;ensemble de l&apos;architecture, il sert de "chef d&apos;orchestre"</div>
            <div className={styles.paragraphe}> - Receiver: Démon qui reçoit les requêtes effectuées via son API</div>
            <div className={styles.paragraphe}> - Scheduler: Récupère toutes les données venant du Poller, Reactionner ainsi que du Broker afin de les transmettre à l&apos;arbiter qui les enverra au Synchronizer</div>
            <div className={styles.paragraphe}> - Puller: Effectue tous les tests "checks" sur tous les éléments supervisées comme par exemple vérifier son accès à internet via un ping</div>
            <div className={styles.paragraphe}> - Broker: Gère l&apos;interface de visualisation (interface sur laquelle un utilisateur peut effectuer des actions et vérifier le bon fonctionnement des objets)</div>
            <div className={styles.paragraphe}> - Reactionner: Envoie les notifications si elles sont activées aux personnes à prévenir en cas de mauvais résultats de tests effectués par le Poller</div>

            <div className={styles.paragraphe}>Cette architecure est Scalable car chaque démon peut-être dupliqué afin de décupler les performances de la solution, cela permet également de gérer plus d&apos;objets et donc de s&apos;adapter à l&apos;organisation de chaque client.</div>


            <div className={styles.paragraphe}>Les journées de travail s&apos;effectue dans un open space organisé en fonction de la spécialité de chacun (front ou back). Chacun est sur une problématique à résoudre qui sont recensées sur des tickets afin de permettre de suivre l&apos;évolution et de résoudre les problèmes/bugs rencontrés.</div>
            <div className={styles.paragraphe}>Chaque développeur dispose d&apos;un pc fix sous Windows, la solution est localement installée sur un machine virtuelle afin de pourvoir effectuer les différents développement sur la version adéquat.</div>
            <div className={styles.paragraphe}>Chaque machine virtuelle est accessible depuis n&apos;importe quel poste du réseau afin que les tech leads ou autre puissent nous dépanner depuis leur place.</div>



            <h1>carte avec l&apos;emplcament ainsi que icones des logiciels et des langages</h1>
            <h1>Ajouter classes important pour souligner, mettre en gras etc</h1>
        </ArticleLayout >
    )
}

export default ShinkenArticle