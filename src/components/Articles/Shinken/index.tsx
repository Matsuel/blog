import ArticleLayout from '@/components/ArticleLayout'
import React from 'react'

interface ArticleProps {
    title: string;
}


const ShinkenArticle = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>
            Shinken Solutions est une entreprise dynamique spécialisée dans la supervision informatique. 
            Fondée en 2009 par Jean Gabès, cette entreprise a rapidement su s&apos;imposer comme un acteur incontournable dans le domaine de la surveillance des infrastructures IT. 
            Située à Artigues-près-Bordeaux entre la sortie 25 et 26 de la rocade bordelaise, Shinken Solutions bénéficie d’un emplacement stratégique dans le Sud-Ouest de la France.

            L&apos;objectif principal de Shinken était de créer une solution de monitoring open source qui éait basée sur des technologies récentes (Python et Javascript) pour l&apos;époque et simple de développement (comparé à Nagios qui est fait en C le langage star de l&apos;époque).
            Shinken se concentre sur la fourniture d&apos;une solution de monitoring dite Scalable (qui est capable de fonctionner dans une petite entreprise mais également dans une grosse entreprise disposant de 15000 serveurs) grace à son architecture globale sous forme de démons.
            Chaque démons dispose d&apos;un rôle qui lui es attribué, les différents démons sont les suivants : 
            - Synchronizer  (gère interface de configuration et db)
            - Arbiter (chef d&apos;orchestre)
            - Receiver (reçoit les ordres via son API et les transmet à l&apos;arbiter)
            - Schdeuler (récupère toutes les datas et les retransmet)
            - Puller (exécute les différents tests afin de vérifier que l&apos;objet supervisé fonctionne correctement)
            - Broker (gère l&apos;interface de visualisation, il lit la db et affiche les infos)
            - Reactionner (sert à envoyer les notifications lors d&apos;une changement d&apos;état, lors de la perte de résultat d&apos;un test)

            Cette architecure est Scalable car chaque démon peut-être dupliqué afin de décupler les performances de la solution, cela permet également de gérer plus d&apos;objets et donc de s&apos;adapter à l&apos;organisation de chaque client.


            Les journées de travail s&apos;effectue dans un open space organisé en fonction de la spécialité de chacun (front ou back). Chacun est sur une problématique à résoudre qui sont recensées sur des tickets afin de permettre de suivre l&apos;évolution et de résoudre les problèmes/bugs rencontrés.
            Chaque développeur dispose d&apos;un pc fix sous Windows, la solution est localement installée sur un machine virtuelle afin de pourvoir effectuer les différents développement sur la version adéquat.
            Chaque machine virtuelle est accessible depuis n&apos;importe quel poste du réseau afin que les tech leads ou autre puissent nous dépanner depuis leur place.



            <h1>Icones entreprise, carte avec l&apos;emplcament ainsi que icones des logiciels et des langages</h1>
        </ArticleLayout >
    )
}

export default ShinkenArticle