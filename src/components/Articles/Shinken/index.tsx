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
            Fondée en 2009 par Jean Gabès, cette entreprise a rapidement su s&aposimposer comme un acteur incontournable dans le domaine de la surveillance des infrastructures IT. 
            Située à Artigues-près-Bordeaux entre la sortie 25 et 26 de la rocade bordelaise, Shinken Solutions bénéficie d’un emplacement stratégique dans le Sud-Ouest de la France.

            L&aposobjectif principal de Shinken était de créer une solution de monitoring open source qui éait basée sur des technologies récentes (Python et Javascript) pour l&aposépoque et simple de développement (comparé à Nagios qui est fait en C le langage star de l&aposépoque).
            Shinken se concentre sur la fourniture d&aposune solution de monitoring dite Scalable (qui est capable de fonctionner dans une petite entreprise mais également dans une grosse entreprise disposant de 15000 serveurs) grace à son architecture globale sous forme de démons.
            Chaque démons dispose d&aposun rôle qui lui es attribué, les différents démons sont les suivants : 
            - Synchronizer  (gère interface de configuration et db)
            - Arbiter (chef d&aposorchestre)
            - Receiver (reçoit les ordres via son API et les transmet à l&aposarbiter)
            - Schdeuler (récupère toutes les datas et les retransmet)
            - Puller (exécute les différents tests afin de vérifier que l&aposobjet supervisé fonctionne correctement)
            - Broker (gère l&aposinterface de visualisation, il lit la db et affiche les infos)
            - Reactionner (sert à envoyer les notifications lors d&aposune changement d&aposétat, lors de la perte de résultat d&aposun test)

            Cette architecure est Scalable car chaque démon peut-être dupliqué afin de décupler les performances de la solution, cela permet également de gérer plus d&aposobjets et donc de s&aposadapter à l&aposorganisation de chaque client.


            Les journées de travail s&aposeffectue dans un open space organisé en fonction de la spécialité de chacun (front ou back). Chacun est sur une problématique à résoudre qui sont recensées sur des tickets afin de permettre de suivre l&aposévolution et de résoudre les problèmes/bugs rencontrés.
            Chaque développeur dispose d&aposun pc fix sous Windows, la solution est localement installée sur un machine virtuelle afin de pourvoir effectuer les différents développement sur la version adéquat.
            Chaque machine virtuelle est accessible depuis n&aposimporte quel poste du réseau afin que les tech leads ou autre puissent nous dépanner depuis leur place.



            <h1>Icones entreprise, carte avec l&aposemplcament ainsi que icones des logiciels et des langages</h1>
        </ArticleLayout >
    )
}

export default ShinkenArticle