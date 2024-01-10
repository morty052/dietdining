/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SwiperContainer } from 'swiper/element'

import { styles } from 'styles'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const offers = [
  {
    title: 'Milan D.',
    image: 'https://dietdining.ca/img/home-one/services/services-4.png',
    description:
      'Dear Diet Dining Food, You made my day today. Yesterday I have placed the order I got it today on special delivery. Good Service, Testy Product, Responsiveness. Keep it up'
  },
  {
    title: 'Jophn S.',
    image: 'https://dietdining.ca/img/home-one/services/services-1.png',
    description:
      "The goodies were absolutely Delight'full. The packaging was as good as the stuff. Keep it up."
  }
]

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="mx-auto flex w-full  max-w-[366px] flex-col items-center gap-4   px-2 py-6">
      <p className="text-lg font-semibold ">{title}</p>
      <p className="text-center ">{description}</p>
    </div>
  )
}

const Trust = () => {
  const sliderRef = useRef<SwiperContainer>()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        style={{
          backgroundImage: `url("https://dietdining.ca/img/home-one/review1-01.png")`
        }}
        className="relative  max-w-2xl  py-4"
      >
        <div className="flex justify-end">
          <img
            className=" md:w-3/5 lg:w-4/5"
            src="https://dietdining.ca/img/home-one/testimonial-image.png"
            alt=""
          />
        </div>
      </div>
      <div className="px-2 lg:px-4 lg:pt-20">
        <p className={styles.header_text}>Why People Trust On Us</p>
        <p className={styles.header_description}>
          It’s all about your experience and trust that motivates us to serve
          you better each day.
        </p>
        <div className="py-4">
          {/* @ts-ignore */}
          <swiper-container ref={sliderRef} loop autoplay>
            {offers.map((offer) => (
              // @ts-ignore
              <swiper-slide key={offer.title}>
                <Card
                  title={offer.title}
                  // image={offer.image}
                  description={offer.description}
                />
                {/* @ts-ignore */}
              </swiper-slide>
            ))}
            {/* @ts-ignore */}
          </swiper-container>

          <div className="mx-auto flex max-w-xs justify-between">
            <button
              onClick={() => sliderRef.current?.swiper.slidePrev()}
              className=" text-baseGreen"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.swiper.slideNext()}
              className=" text-baseGreen"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trust
