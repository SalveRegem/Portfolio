import './App.css'
import "./index.css"
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProjectList from './Components/ProjectCard'
import Divider from './Components/Divider'

function App() {
  

  return (
    <>
      <Header />
      <Divider text={"Là où il y a une volonté, il y a un chemin. - Proverbe médiéval"} />
      <ProjectList />
      <Divider text={"Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte. - Guillaume le Conquérant"} />
      <Footer />
    </>
  )
}

export default App
