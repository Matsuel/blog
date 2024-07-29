import { EntrepriseInfos } from "@/types/Entreprise";
import Shinken from '@/assets/shinken.png'
import Test from "@/components/Articles/Test";

export const Entreprises: EntrepriseInfos[] = [
  {
    name: "Shinken Solutions",
    description: "Entreprise ...",
    dates: "17 Juin 2024, 09 Août 2024",
    side: "back",
    emoji: "1f4bb",
    tags: [
      "Python",
      "Js",
      "Doc",
    ],
    logo: Shinken,
    template: <Test />
  },
]