
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

export const Layout = ({children}) => {
  return (
    <>

    <Header/>
    {children}
    <Footer/>
    
    
    
    </>
  )
}
