
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Services } from './components/Services'


function App() {

  return (

    <Layout>
      <Home />
      <About />
      <Services />
      <Contact />


    </Layout>

  )
}

export default App
