import BilanShinken from "@/components/Articles/BilanShinken";
import Connaissances from "@/components/Articles/Connaissances";
import Evolutivite from "@/components/Articles/Evolutivite";
import OptionArticle from "@/components/Articles/Options";
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
        template: <OptionArticle title="Ajout options de notification" />
    },
    {
        title: "Développement et design d'un nouveau tableau de notification",
        description: "Pourquoi est-ce difficile d'intégrer un nouveau design concordant avec nos idées au sein d'idées déjà en place ?",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [
            "Javascript"
        ],
        template: <Evolutivite title="Développement et design d'un nouveau tableau de notification" />
    },
    {
        title: "Connaissances mobilisées",
        description: "En quoi mes compétences techniques en développement web m'ont permis de travailler et de m'adapter plus facilement malgré le fait que le sujet m'était parfaitement inconnu ?",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <Connaissances title="Connaissances mobilisées" />
    },
    {
        title: "Bilan Stage 2024",
        description: "Bilan de l'expérience au sein de shinken solutions après 8 semaines",
        date: "29/07/2024",
        emoji: "",
        side: "",
        tags: [
            "Debrief"
        ],
        template: <BilanShinken title="Bilan Stage 2024" />
    },
]