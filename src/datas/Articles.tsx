import Test from "@/components/Articles/Test";
import { Article } from "@/types/Article";
import React, { ReactElement } from "react";

export const Articles: Article[] = [
    {
        title: "cc",
        description: 'article premier du nom',
        date: "22/07/2024",
        emoji: "1f3a8",
        href: "/shinken?name=premier_du_nom",
        side: "front",
        tags: [
            'js',
            'python'
        ],
        template: <Test />
    }
]