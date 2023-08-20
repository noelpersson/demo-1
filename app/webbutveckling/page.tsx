import Footer from '@/components/Footer'
import Cardforhost from '@/components/Webbutveckling/Webbstartsida/Cardforhost'
import Cardforreact from '@/components/Webbutveckling/Webbstartsida/Cardforreact'
import Cardforword from '@/components/Webbutveckling/Webbstartsida/Cardforword'
import Herostartsida3 from '@/components/Webbutveckling/Webbstartsida/Herostartsida3'
import React from 'react'

const page = () => {
  return (
    <>
    <Herostartsida3 />
    <Cardforword />
    <Cardforreact />
    <Cardforhost />
    <Footer />
    </>
  )
}

export default page