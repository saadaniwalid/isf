import About from '@/components/aboutSection'
import Contactus from '@/components/Contactus'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Services from '@/components/Services'
import Slider from '@/components/slider'
import Testimonials from '@/components/Testimonials'
import MenuContextProvider from '@/context/menu-context'
import Head from 'next/head'


export default function Home() {
  return (
    <MenuContextProvider>
      <Layout PageTitle="INTERNATIONAL SPEED
FREIGHT">
        <Slider />
        <About isabout={true}/>
        <Services spage={false} />
        <Testimonials />
        <Contactus />
      </Layout>
    
  </MenuContextProvider>
  )
}
