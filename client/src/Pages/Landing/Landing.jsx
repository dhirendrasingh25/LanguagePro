import ButtonGradient from '@/assets/svg/ButtonGradient'
import Benefits from '@/Landingcomponents/Benefits'
import Collaboration from '@/Landingcomponents/Collaboration'
import Footer from '@/Landingcomponents/Footer'
import Header from '@/Landingcomponents/Header'
import Hero from '@/Landingcomponents/Hero'
import Pricing from '@/Landingcomponents/Pricing'
import Roadmap from '@/Landingcomponents/Roadmap'
import Services from '@/Landingcomponents/Services'
import React from 'react'

const Landing = () => {
  return (
    <>
\
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      <Hero/>
      <Benefits />
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
    </div>
    <ButtonGradient/>
    </>
  )
}

export default Landing
{/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
<Header />
<Hero />
<Benefits />
<Collaboration />
<Services />
<Pricing />
<Roadmap />
<Footer />
</div>

<ButtonGradient /> */}