import OptionArticle from "@/components/Articles/Options";
import Test from "@/components/Articles/Test";
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
        description: "Pourquoi est-ce difficile d'intégrer un nouveau design concordant avec nos idées au sein d'idées déjà en places",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <Test />
    },
    {
        title: "Connaissances mobilisées",
        description: "En quoi mes compétences techniques en développement web m'ont permis de travailler et de m'adapter plus facilement malgré le fait que le sujet m'était parfaitement inconnu ?",
        date: "29/07/2024",
        emoji: "1f4bb",
        side: "back",
        tags: [],
        template: <Test />
    },
    {
        title: "Bilan Stage 2024",
        description: "Bilan de l'expérience au sein de shinken solutions après 8 semaines",
        date: "29/07/2024",
        emoji: "1f4bc",
        side: "front",
        tags: [],
        template: <Test />
    },
]