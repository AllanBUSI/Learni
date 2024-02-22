import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-black">
            Votre école mérite des professionnels et des formateurs adaptés au marché du travail.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-700">
            Nous nous engageons à accompagner les établissements scolaires en France, en Belgique et en Suisse, en leur offrant un soutien sur mesure et une expertise de pointe pour transcender les standards éducatifs traditionnels. Avec Learni, transformez l'avenir de l'éducation.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://tally.so/r/nGdBZp"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Prendre un rendez-vous
              </a>
              <a
                href="https://www.linkedin.com/in/allan-busi-25170317a/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-300 dark:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>Aller sur notre page</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-black">
            Nos partenaires <span className="text-indigo-600">10+</span>{" "}
            dans l'europe
          </div>

          <div className="flex flex-wrap rounded-2xl justify-center gap-5 mt-10 md:justify-around">
            {[1,2,3,4,5,6,7].map((v,k) => (<div className="pt-2 text-gray-400 dark:text-gray-600">
              <Image
                src={'/img/brands/'+v+".png"}
                width="200"
                height="100"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
              />
            </div>))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;