import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/celian.jpeg";
import userTwoImg from "../public/img/rufus.jpg";
import userThreeImg from "../public/img/nicolas.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Allan nous à permis de monter en compétences sur <Mark> la cybersécurité </Mark>,
              nous avons appris a faire des injections SQL avec SQLMap.
            </p>

            <Avatar
              image={userOneImg}
              name="Célian Lebacle"
              title="Développeur freelance"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Grâce à Allan, j'ai eu mon <Mark>BTS SIO</Mark> , <Mark>un stage </Mark> qui m'a permis de décrocher <Mark>une alternance </Mark>.
            </p>

            <Avatar
              image={userTwoImg}
              name="Rufus Hilaire Mouakassa"
              title="Développeur informatique"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Allan m'a permis d'avoir <Mark>mon dîplome TSSR</Mark> et j'ai trouvé un travail grâce à mes connaissances.
            </p>

            <Avatar
              image={userThreeImg}
              name="Nicolas Thiebault"
              title="Administrateur Système et Réseaux"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;