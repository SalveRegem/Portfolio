import TextEncrypted from "./TextEncrypted"
import TextReveal from "./TextReveal"




const Banner = () => {
    return(
    <section className="bg-gray-900 text-white">
        <TextEncrypted text = "Bonjour et Bienvenue !!" />
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
                <h1
                    className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                >
                    A propos de moi

                    <span className="sm:block"> et de mon parcours. </span>
                </h1>
                    <TextReveal text="Je suis Amaury, un passionné qui a récemment opéré une reconversion dans le domaine du développement web. Mon parcours m'a guidé vers une formation d'intégrateur web chez OpenClassrooms, avec pour objectif d'obtenir un titre RNCP de niveau 5 équivalent à un bac +2. Au cours de cette expérience, j'ai plongé dans l'univers captivant de la création web et de la programmation.Tout au long de ma formation, j'ai développé des compétences approfondies dans la conception de sites web réactifs, l'optimisation de l'expérience utilisateur et la création d'interfaces conviviales. Le développement web, pour moi, représente un champ infini de créativité, où chaque ligne de code donne vie à des idées. Chaque projet devient une opportunité de concevoir quelque chose d'unique.Ce qui me stimule particulièrement, c'est cette liberté créative offerte par le développement web. C'est un espace où je suis constamment encouragé à explorer de nouvelles approches pour rendre les sites web plus interactifs et visuellement captivants. Mon portfolio rassemble avec enthousiasme les divers projets que j'ai eu le plaisir de concrétiser." />
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="#project"
                    >
                    My Projects
                    </a>

                    <a
                    className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="/about"
                    >
                    Learn More about me
                    </a>
                </div>
                </div>
        </div>
    </section>

    )
}

export default Banner