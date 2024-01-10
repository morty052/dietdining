/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react'
import { styles } from 'styles'
import { register, SwiperContainer } from 'swiper/element/bundle'

const offers = [
  {
    title: 'Nutritional Insights',
    image: 'https://dietdining.ca/img/home-one/services/services-4.png',
    description:
      'In each of the meals served, we mention nutritional value along with the food description.'
  },
  {
    title: 'Your Healthy Diet Explorer',
    image: 'https://dietdining.ca/img/home-one/services/services-1.png',
    description:
      'We help you in every manner to get the best-suited diet meal as per your daily intake needs found at various places.'
  },
  {
    title: 'Rate Your Meal',
    image: 'https://dietdining.ca/img/home-one/services/services-3.png',
    description:
      'We facilitate you to rate your meal based on your experience, preference, and dietary needs in just a few clicks.'
  },
  {
    title: 'Personalized List',
    image: 'https://dietdining.ca/img/home-one/services/services-2.png',
    description:
      'You can sort and personalize preferences of food list based on its nutritional value that best suits you to least recommended for you.'
  }
]

function Card({
  title,
  image,
  description,
  active
}: {
  title: string
  image: string
  description: string
  active: boolean
}) {
  return (
    <div
      style={{
        backgroundImage: `url("https://dietdining.ca/img/home-one/service-shape.png")`
      }}
      className={`mx-auto flex h-[277px] w-full max-w-[366px] flex-col items-center  gap-4 rounded-2xl border  px-2 py-6 md:mx-0 md:max-w-none ${
        active ? 'bg-baseGreen' : ''
      } `}
    >
      <img className="h-20 w-20" src={image} alt="" />
      <p
        className={`text-center text-lg font-semibold ${
          active ? 'text-white' : 'text-gray-800'
        }`}
      >
        {title}
      </p>
      <p className={`text-center  ${active ? 'text-white' : 'text-gray-800'}`}>
        {description}
      </p>
    </div>
  )
}

function Carousel() {
  register()
  const swiperRef = useRef<SwiperContainer>(null)
  const [active, setActive] = useState(1)

  useEffect(() => {
    swiperRef.current?.addEventListener('swiperslidechange', (e) => {
      // @ts-ignore
      setActive(e.detail[0].realIndex)
    })
  }, [])

  return (
    <>
      <div className="sm:hidden">
        {/* @ts-ignore */}
        <swiper-container
          slides-per-view={1}
          loop
          autoplay
          speed={500}
          effect="slide"
          centered-slides
        >
          {offers.map((offer) => (
            // @ts-ignore
            <swiper-slide key={offer.title}>
              <Card
                active={true}
                title={offer.title}
                image={offer.image}
                description={offer.description}
              />
              {/* @ts-ignore */}
            </swiper-slide>
          ))}
          {/* @ts-ignore */}
        </swiper-container>
      </div>

      <div className="mx-auto hidden max-w-screen-lg md:block">
        {/* @ts-ignore */}
        <swiper-container
          rewind
          ref={swiperRef}
          slides-per-view={3}
          space-between={30}
          autoplay
          loop
          speed={500}
          effect="slide"
          centered-slides
        >
          {offers.map((offer, index) => (
            // @ts-ignore
            <swiper-slide key={offer.title}>
              <Card
                active={active === index}
                title={offer.title}
                image={offer.image}
                description={offer.description}
              />
              {/* @ts-ignore */}
            </swiper-slide>
          ))}
          {/* @ts-ignore */}
        </swiper-container>
      </div>
    </>
  )
}

function WhatWeOffer() {
  return (
    <div className="py-4">
      <div className="mx-auto mb-6 max-w-lg">
        <p className={styles.header_text}>What We Offer</p>
        <p className={styles.header_description}>
          Our solutions focus on providing you seamless experience in searching
          for proper diet meals at your convenience without any obstacles.
        </p>
      </div>
      <Carousel />
    </div>
  )
}

export default WhatWeOffer
