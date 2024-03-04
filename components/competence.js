


const Competence = () => {

    const Tableau = [
        "Formation professionnelle",
        "Cours en ligne",
        "Développement de compétences",
        "Apprentissage numérique",
        "Certification professionnelle",
        "Formations diplômantes",
        "E-learning",
        "Cours de développement personnel",
        "Programmes d'études adaptés",
        "Formation continue",
        "Amélioration des compétences",
        "Plateforme éducative",
        "Enseignement à distance",
        "Cours professionnels en ligne",
        "Transition de carrière",
        "Développement de carrière",
        "Formations sur mesure",
        "Compétences du marché du travail",
        "Apprentissage tout au long de la vie",
        "Mentorat professionnel"
    ]


    return <div class="flex p-8 flex-wrap justify-center items-center">
        {Tableau.map((v,k) => (
            <h2 key={k} class="hover:bg-blue-500 m-2 hover:font-bold text-2xl bg-blue-800 shadow-md text-white transition duration-300 ease-in-out h6x-4 py-2 rounded-lg cursor-pointer">
                {v}
            </h2>
        ))}
    </div>

}

export default Competence;