import './App.css'
import Calendar from './components/CalendarSection'
import EnergySection from './components/EnergySection'
import EnvironmentSection from './components/EnvironmentSection'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import QualityOfLifeSection from './components/QualityOfLifeSection'

function App() {

 
  
  return (
    <>
    <NavBar title="Flensdash"/>
     <EnergySection/>
     <EnvironmentSection/>
     <QualityOfLifeSection />
     <Calendar />
     <Footer/>
    </>
  )
}

export default App
