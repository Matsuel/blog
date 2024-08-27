import ArticleLayout from '@/components/ArticleLayout'
import React from 'react'
import styles from '../Article.module.scss'
import TableauMigration from '@/assets/tableau migration options.png'
import Image from 'next/image';
import CustomLink from '@/components/CustomLink';
import CentOS from '@/assets/centos.svg'

interface ArticleProps {
    title: string;
}


const OptionArticle = ({
    title
}: ArticleProps) => {
    return (
        <ArticleLayout title={title}>

            <div className={styles.paragraphe}>Afin d&apos;appréhender au mieux l&apos;environnement et avant de commencer à rajouter les nouvelles options de notifications dans le code et dans la solution, j&apos;ai d&apos;abord passé ma première semaine à explorer de fond en comble la solution. J&apos;ai pu tester différents scénarios sur des objets ainsi qu&apos;observer l&apos;architecture du code:</div>

            <div className={styles.paragraphe}>- Comment et quand les notifications sont-elles envoyées en fonction des différents états (<span className={styles.bold}>OK</span>, <span className={styles.bold}>Attention</span>, <span className={styles.bold}>Critique</span>, <span className={styles.bold}>Inconnu</span>, <span className={styles.bold}>Prise en compte</span> lors d&apos;un événement, <span className={styles.bold}>Flapping</span> - oscillation entre plusieurs états, <span className={styles.bold}>Maintenance</span> - lors de la modification de l&apos;objet) ?</div>
            <div className={styles.paragraphe}>- Que se passe-t-il réellement lorsque l&apos;état d&apos;un objet change ? (Qui est alerté, qui doit intervenir ?)</div>
            <div className={styles.paragraphe}>- Comment le code est-il organisé, et comment doit-il être structuré ?</div>
            <div className={styles.paragraphe}>- Dois-je me limiter à modifier la partie du code qui m&apos;est assignée ou corriger également les erreurs rencontrées ?</div>


            <div className={styles.paragraphe}>Comme mentionné précédemment, ma première semaine a été dédiée à l&apos;installation et à l&apos;utilisation de la solution sur une machine virtuelle sur mon PC. Durant les deux premiers jours, j&apos;ai suivi la documentation de l&apos;entreprise étape par étape pour installer la solution. Cela m&apos;a permis de découvrir les outils utilisés, tels que Confluence pour la documentation, ainsi qu&apos;un serveur où est stockée la dernière version du build que je devais installer. Voici les grandes étapes que j&apos;ai suivies pour installer la solution :</div>
            <div className={styles.paragraphe}>- Installation d&apos;une machine virtuelle sous <span><Image src={CentOS}  width={25} alt="Windows"/></span> <CustomLink title="CentOS" href="https://www.centos.org/"/> </div>
            <div className={styles.paragraphe}>- Connexion de ma machine aux serveurs de l&apos;entreprise pour accéder à toutes les ressources, y compris le build</div>
            <div className={styles.paragraphe}>- Installation de la solution et premier démarrage</div>
            <div className={styles.paragraphe}>- Installation d&apos;un serveur de mail pour m&apos;envoyer des mails de test lors des différents scénarios</div>

            <div className={styles.paragraphe}>Ensuite, pendant deux jours supplémentaires, j&apos;ai exploré toutes les interfaces de Shinken. Deux interfaces principales sont disponibles :</div>
            <div className={styles.paragraphe}>- L&apos;interface de configuration : permet de configurer, créer, et récupérer des objets à superviser. On peut personnaliser le nom de l&apos;objet, sa description, les options de notification (quand je souhaite être averti), et le modèle de configuration dont l&apos;hôte peut hériter, notamment pour les options de notification. Des utilisateurs à notifier lors de certains états peuvent également être créés via cette interface, ainsi que des méthodes de notification (SMS, mail, etc.), offrant une grande flexibilité et personnalisation.</div>
            <div className={styles.paragraphe}>- L&apos;interface de visualisation : permet de consulter la liste de tous les éléments supervisés, l&apos;état actuel de chacun (pour chaque hôte, les tests hérités des modèles possèdent chacun un état consultable via cette interface), et d&apos;ajouter une période de prise en compte (acknowledge) pour chaque hôte. D&apos;autres pages sont disponibles, mais je n&apos;ai pas encore eu l&apos;occasion de les explorer en profondeur, comme :</div>
            <div className={styles.paragraphe}>- La météo des services, qui offre une vue d&apos;ensemble sur l&apos;état du parc informatique</div>
            <div className={styles.paragraphe}>- Une page de widgets permettant d&apos;organiser et de ranger chaque type d&apos;objet</div>
            <div className={styles.paragraphe}>Une fois la solution maîtrisée, j&apos;ai commencé à investiguer dans le code pour comprendre son organisation et déterminer où je devrais intervenir pour ajouter et renommer les anciennes options de notification.</div>
            <div className={styles.paragraphe}>Ces nouvelles options seront migrées en suivant le tableau ci-dessous:</div>

            <Image src={TableauMigration} alt="Tableau de migration des options de notification" className={styles.image} />

            <div className={styles.paragraphe}>En arrivant, l&apos;entreprise était en phase finale de migration de Python 2 à Python 3, ce qui rendait l&apos;architecture encore un peu mélangée. Une fois le nouveau code trouvé, j&apos;ai commencé à lire et à modifier les propriétés de chaque type d&apos;objet : les valeurs par défaut, les noms, et les valeurs possibles des propriétés. J&apos;ai dû réécrire un grand nombre de conditions utilisant d&apos;anciennes valeurs. Pour éviter la duplication de code, j&apos;ai créé un nouveau dossier contenant toutes les constantes que j&apos;allais utiliser, car elles étaient présentes trop souvent en clair dans le code.</div>
            <div className={styles.paragraphe}>Le code que j&apos;ai écrit devait rester clair et concis, en particulier pour les noms de fonctions et de variables, afin que lors des prochaines phases de modifications, que ce soit par moi-même ou par un collègue, le code reste facilement compréhensible. Une fois toutes les modifications effectuées, certains morceaux de code devenaient inutilisés. Comme l&apos;entreprise est l&apos;éditeur de son propre code, j&apos;ai dû les supprimer. De plus, lorsque je tombais sur du code obsolète ou écrit selon les anciennes conventions de Python, j&apos;étais également invité à les réécrire dans un format plus simple et plus récent.</div>
            <div className={styles.paragraphe}></div>
            <div className={styles.paragraphe}></div>

        </ArticleLayout >
    )
}

export default OptionArticle