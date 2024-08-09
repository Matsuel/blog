import Agile from "@/components/Articles/Agile";
import BilanShinken from "@/components/Articles/BilanShinken";
import Connaissances from "@/components/Articles/Connaissances";
import Evolutivite from "@/components/Articles/Evolutivite";
import Notifs from "@/components/Articles/Notifs";
import TableauNotifs from "@/components/Articles/TableauNotifs";
import { Article } from "@/types/Article";
import React from "react";

export const Articles: Article[] = [
    {
        title: "Ajout options de notification",
        description: "Comment s'adapter et comprendre un code lorsque l'on vient d'arriver au sein d'une entreprise ?",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <Notifs title="Ajout options de notification" />
    },
    // Exploration des défis techniques rencontrés lors de la prise en main d'un codebase existant et les stratégies utilisées pour s'y adapter efficacement.
    {
        title: "Développement et design d'un nouveau tableau de notification",
        description: "Pourquoi est-ce difficile d'intégrer un nouveau design concordant avec nos idées au sein d'idées déjà en place ?",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <TableauNotifs title="Développement et design d'un nouveau tableau de notification" />
    },
    // Discussion sur les défis techniques et de collaboration, y compris les compétences de communication pour faire accepter une nouvelle approche design
    {
        title: "Connaissances mobilisées",
        description: "En quoi mes compétences techniques en développement web m'ont permis de travailler et de m'adapter plus facilement malgré le fait que le sujet m'était parfaitement inconnu ?",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <Connaissances title="Connaissances mobilisées" />
    },
    // Analyse de l'application des connaissances existantes et des nouvelles compétences acquises au cours du projet. Défauts rencontrées dans le code ainsi que défauts personnels
    {
        title: "Gestion de projet agile : les points journaliers pour une collaboration efficace",
        description: "Comment les points journaliers (stand-ups) ont contribué à une meilleure communication et à l'avancement rapide des tâches dans le cadre d'un projet agile?",
        date: "09/08/2024",
        emoji: "1f4c8",
        side: "back",
        tags: [],
        template: <Agile title="Gestion de projet agile : les points journaliers pour une collaboration efficace" />
    },
    {
        // parler des constantes, nom de varibles et fonctions, réutilisation des anciennes fonctions
        title: "Concevoir pour l’évolutivité : anticiper les besoins futurs dans le développement logiciel",
        description: "Comment les décisions architecturales peuvent garantir que les systèmes développés puissent évoluer avec l'augmentation des besoins futurs tout en minimisant les refontes majeures ?.",
        date: "09/08/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <Evolutivite title="Concevoir pour l’évolutivité : anticiper les besoins futurs dans le développement logiciel" />
    },
    {
        title: "Bilan Stage 2024",
        description: "Bilan de l'expérience au sein de shinken solutions après 8 semaines",
        date: "29/07/2024",
        emoji: "1f4bc",
        side: "front",
        tags: [],
        template: <BilanShinken title="Bilan Stage 2024" />
    },
]