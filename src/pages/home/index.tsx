/* eslint-disable prettier/prettier */
import { Navbar, Footer, ScrollButton } from 'components'
import Hero from './Hero'
import DietOptions from './DietOptions'
import WhatWeOffer from './WhatWeOffer'
import FindYourMeal from './FindYourMeal'
import OrderYourMeal from './OrderYourMeal'
import Trust from './Trust'
import Blog from './Blog'
import Reliable from './Reliable'

export function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="space-y-16 pb-10">
        <Hero />
        <DietOptions />
        <WhatWeOffer />
        <Reliable />
        <FindYourMeal />
        <div className="">
          <OrderYourMeal />
          <Trust />
        </div>
        <Blog />
      </div>
      <ScrollButton />
      <Footer />
    </div>
  )
}
