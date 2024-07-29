import React, { ReactElement } from "react";

export type Article = {
    title: string;
    date: string; // à récupérer de manière dynamique en fonction de la date de modificiation du fichier
    description: string;
    side: string;
    tags: string[];
    emoji: string;
    template?: React.JSX.Element;
}