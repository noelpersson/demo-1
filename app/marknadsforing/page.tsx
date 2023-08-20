import Footer from '@/components/Footer'
import Cardforads from '@/components/Marknadsforing/Markstartsida/Cardforads'
import Cardformeta from '@/components/Marknadsforing/Markstartsida/Cardformeta'
import Herostartsida2 from '@/components/Marknadsforing/Markstartsida/Herostartsida2'
import React from 'react'

const page = () => {
  return (
    <>
    <Herostartsida2 />
    <Cardforads />
    <Cardformeta />
    <Footer />
    </>
  )
}

export default page