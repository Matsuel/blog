import React, { ReactElement } from "react";

export type Article = {
    title: string;
    date: string; // à récupérer de manière dynamique en fonction de la date de modificiation du fichier
    description: string;
    side: string;
    tags: string[];
    emoji: "1f4bb" | "1f3a8";
    href: string;  //href sous la forme /entreprise/article
    template?: React.JSX.Element;
}