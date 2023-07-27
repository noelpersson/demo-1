import FormSection from '@/components/Contact us/FormSection'
import Footer from '@/components/Footer'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <main className="w-full mx-auto flex flex-col items-stretch justify-center min-h-screen h-full relative overflow-visible ">
      <div className="relative max-w-[2100px] w-full mx-auto">
        <div className="rounded-full w-[23vw] h-[23vw] max-w-[800px] max-h-[800px] z-50 bg-[#d9ddfc] absolute top-0 -right-40" />
        <div className="rounded-full max-w-[384px] max-h-[384px] w-[25vw] h-[25vw] -z-[7] bg-orange-300 opacity-40 blur-lg absolute top-60 -left-8" />
      </div>
      <FormSection/>
      <Footer />
      
    </main>
  )
}