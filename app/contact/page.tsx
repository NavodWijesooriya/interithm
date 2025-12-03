import React from 'react'
import Contact from '../../components/contact/Contact'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import ContactHero from '../../components/contact/ContactHero'

const page = () => {
  return (
    <div>
        <Header />
        <ContactHero />
        <Contact />
        <Footer />
    </div>
  )
}

export default page