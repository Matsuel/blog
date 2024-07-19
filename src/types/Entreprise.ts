import { StaticImageData } from "next/image";

export type EntrepriseInfos = {
    name: string;
    dates: string;
    side: string;
    tags: string[];
    emoji: "1f4bb" | "1f3a8";
    href: string;
    logo: StaticImageData;
    description?: string;
}