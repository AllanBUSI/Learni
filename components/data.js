import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Compétence, Expertise & Réseaux",
  desc: "Nous sélectionnons rigoureusement les meilleurs formateurs, évalués et approuvés par des experts, pour garantir une éducation de qualité supérieure adaptée aux besoins spécifiques de votre école.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Satisfaction des apprenants",
      desc: "Formulaire de satisfaction gratuit afin d'évaluer nos formateurs",
      icon: <FaceSmileIcon className="text-gray-500" />,
    },
    {
      title: "L'adaptation",
      desc: "Formés en interne, nos formateurs maîtrisent la diversité, l'accessibilité, le milieu professionnel, la reconversion et l'enseignement aux étudiants.",
      icon: <ChartBarSquareIcon className="text-gray-500" />,
    },
    {
      title: "Evaluation",
      desc: "Tous les 6 mois, nos formateurs sont réévalués via une grille de 20 critères Qualiopi, assurant une amélioration continue de leur qualité.",
      icon: <CursorArrowRaysIcon className="text-gray-500" />,
    },
  ],
};

const benefitTwo = {
  title: "Nos domaines d'intervention",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Technologies web",
      desc: "Nos formateurs, experts en technologies actuelles, enseignent la création de sites web, applications mobiles, jeux vidéo et logiciels desktop.",
      icon: <DevicePhoneMobileIcon className="text-gray-500" />,
    },
    {
      title: "Technologies data",
      desc: "Nos formateurs spécialisés enseignent le Big Data, Blockchain, l'intelligence artificielle, le Cloud Computing et l'utilisation de ChatGPT, alignés sur les dernières avancées technologiques.",
      icon: <AdjustmentsHorizontalIcon className="text-gray-500" />,
    },
    {
      title: "Marketing et commerce",
      desc: "Nos formateurs qualifiés transmettent des compétences avancées en commerce, couvrant le marketing, la vente, la gestion client et les stratégies commerciales modernes.",
      icon: <SunIcon className="text-gray-500" />,
    },
  ],
};


export {benefitOne, benefitTwo};
