import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-4xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-900`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 ">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Quels types de formations Learni propose-t-elle aux centres de formation ?",
    answer: "Learni propose une gamme étendue de formations adaptées à divers secteurs, y compris mais sans s'y limiter, aux compétences numériques, à la gestion d'entreprise, au développement personnel, et aux compétences spécifiques à certaines professions. Nos formateurs spécialisés conçoivent des programmes sur mesure pour répondre aux besoins spécifiques de chaque centre de formation.",
  },
  {
    question: "Comment Learni assure-t-elle la qualité de ses formateurs ?",
    answer: "Tous nos formateurs sont rigoureusement sélectionnés pour leur expertise dans leur domaine, leur expérience pédagogique et leur capacité à engager les apprenants. Nous assurons une formation continue à nos formateurs pour qu'ils restent à la pointe des méthodologies d'enseignement et des technologies éducatives.",
  },
  {
    question: "Learni peut-elle aider à personnaliser les programmes de formation pour des besoins spécifiques ?",
    answer:
      "Absolument. Learni travaille en étroite collaboration avec les responsables pédagogiques pour développer des programmes de formation personnalisés qui répondent précisément aux objectifs d'apprentissage et aux exigences spécifiques de chaque centre. Notre processus comprend l'analyse des besoins, la conception de programme, l'implémentation, et l'évaluation pour assurer l'efficacité de la formation.",
  },
  {
    question: "Quelles sont les modalités de formation proposées par Learni ?",
    answer:
      "Nous proposons diverses modalités pour s'adapter à vos besoins, incluant des formations en présentiel, à distance (e-learning), et en mode hybride. Nous utilisons des plateformes d'apprentissage en ligne de pointe pour faciliter l'accès aux ressources pédagogiques et encourager l'interaction entre les apprenants et les formateurs.",
  },
  {
    question: "Comment évaluez-vous l'impact des formations sur les apprenants ?",
    answer:
      "Learni adopte une approche multicritère pour l'évaluation de l'impact de la formation, incluant des évaluations avant et après la formation, des feedbacks réguliers des apprenants, des études de cas, et des analyses de performance. Nous fournissons également des rapports détaillés aux responsables pédagogiques pour leur permettre de mesurer l'efficacité de la formation et d'identifier les domaines d'amélioration.",
  },
];

export default Faq;