'use server'

import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import SFC from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Container from "../components/container";
import Competence from "../components/competence";

const Home = () => {
  return (
    <>
      <Head>
        <title>Learni - Votre école mérite des professionnels et des formateurs adaptés au marché du travail.</title>
        <meta
          name="description"
          content="Learni - Votre école mérite des professionnels et des formateurs adaptés au marché du travail."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Pourquoi nous choisir ?"
        title="Expertise, Innovation, Soutien, Excellence, Pédagogie">
        Notre engagement : offrir une expertise d'élite, un soutien sur mesure, et une innovation continue pour propulser votre établissement vers l'excellence éducative avec une synergie inégalée.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Competence/>

      <Container
      className={`flex w-full flex-col mt-4`}>
        <h2 className="max-w-8xl m-20 text-center text-3xl font-bold leading-snug tracking-tight text-gray-600 lg:leading-tight lg:text-5xl">
        Explorez l'infini du savoir avec nos 1000 experts, prêts à dévoiler leurs connaissances dans un éventail impressionnant de spécialités. Votre curiosité n'a plus de limites !
        </h2>
      </Container>
      <SFC />
      <SectionTitle
        pretitle="Testimonials"
        title="Témoignages d'étudiants">
        Avec 3000 élèves accompagnés en 2 ans et demi, nous avons créé notre méthode pédagogique
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Vos questions mérites des réponses
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
      <SpeedInsights/>
    </>
  );
}

export default Home;