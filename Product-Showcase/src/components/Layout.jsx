
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'

import { ProductList } from './ProductList'

export const Layout = () => {
  return (
    <>
      <Header title="Product Showcase"
        subtitle="Best products of the year" />
 
      <ProductList />

      <Footer year='2026' author='Ferman Seferov' />

    </>
  )
}
