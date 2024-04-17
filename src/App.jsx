import './styles/Reset.scss';

import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import { Brands } from './components/Brands';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Brands />
    </>
  )
}

export default App