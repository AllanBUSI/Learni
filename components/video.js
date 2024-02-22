import Container from "./container";
import Image from "next/image"

const SFC = () => {
  return (
    <Container>
      <script src="../node_modules/flowbite/dist/flowbite.js"></script>
      <div class="flex justify-center items-center">
          <Image src={"/img/brands/logo.webp"} alt="Station F logo" width={800} height={300}/>
      </div>
      <Container
      className={`flex w-full flex-col mt-4`}>
        <h2 className="max-w-8xl m-20 text-center text-3xl font-bold leading-snug tracking-tight text-gray-400 lg:leading-tight lg:text-2xl dark:text-black-400">
        Nous recrutons directement depuis Station F, l'Escalator, et les universités de premier plan, des creusets d'innovation. Cela nous positionne idéalement pour attirer des talents exceptionnels, déterminés à redéfinir le futur. Rejoignez-nous et soyez au cœur d'une révolution, entouré des esprits les plus lumineux et avant-gardistes.
        </h2>
      </Container>
    </Container>
  );
}

export default SFC;