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
      icon: <FaceSmileIcon />,
    },
    {
      title: "L'adaptation",
      desc: "Formés en interne, nos formateurs maîtrisent la diversité, l'accessibilité, le milieu professionnel, la reconversion et l'enseignement aux étudiants.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Evaluation",
      desc: "Tous les 6 mois, nos formateurs sont réévalués via une grille de 20 critères Qualiopi, assurant une amélioration continue de leur qualité.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
