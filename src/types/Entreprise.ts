import { StaticImageData } from "next/image";
import React from "react";

export type EntrepriseInfos = {
    name: string;
    dates: string;
    side: string;
    tags: string[];
    emoji: "1f4bb" | "1f3a8";
    logo: StaticImageData;
    description?: string;
    template: React.JSX.Element;
}