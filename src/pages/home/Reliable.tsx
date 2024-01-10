/* eslint-disable prettier/prettier */
import './anime.css'
import { Link } from 'react-router-dom'

export default function Reliable() {
  return (
    <div className="relative overflow-x-clip ">
      <div className="mx-auto grid max-w-screen-xl items-center gap-x-6 lg:grid-cols-2  ">
        <div className="">
          <div className="relative mx-auto flex max-w-xl flex-col items-center   ">
            <img
              className="wobble-hor-bottom z-10 -mb-40 w-2/4 md:w-1/3"
              src="https://dietdining.ca/img/home-one/about-section/about-01.png"
              alt=""
            />
            <img
              className=" w-3/4 md:w-full "
              src="https://dietdining.ca/img/home-one/bg-image-01.png"
              alt=""
            />
            <img
              className="wobble-hor-bottom -mt-16  w-2/4 md:w-1/3 "
              src="https://dietdining.ca/img/home-one/about-section/about-03.png"
              alt=""
            />

            <div className="absolute inset-x-0 top-[40%] hidden justify-between md:flex">
              <img
                src="https://dietdining.ca/img/home-one/about-section/ice-cream-cup.png"
                alt=""
                className="wobble-hor-bottom w-1/3"
              />
              <img
                src="https://dietdining.ca/img/home-one/about-section/about-04.png"
                alt=""
                className="wobble-hor-bottom w-1/3"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 px-2">
          <p className="text-center font-sans text-3xl font-bold text-gray-800 lg:text-left">
            Most Trusted &#38; Reliable Online Diet Food Delivery App
          </p>
          <div className="space-y-4">
            <p className="text-center lg:text-left">
              People often find it hard to get the details of the diet food
              available due to lack of mention about food type, nutrition value
              & right fit for you. Diet Dining app is one such platform that you
              can use with existing applications like DoorDash, Uber Eats, and
              Skip the Dishes.
            </p>
            <p className="text-center lg:text-left">
              This Canadian online food delivering app is a comprehensive
              featured app that takes care of your diet food type, nutritional
              needs & helps you explore food nearby you to get it hassle-free at
              your doorstep without compromising over healthy food benefits for
              you and your family members.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link
              reloadDocument
              to="/about"
              className="rounded-full bg-baseGreen px-4 py-2 text-white transition-all duration-300 ease-in hover:bg-darkBlue"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
      <img
        className="absolute -bottom-10 -right-4 w-16  lg:block lg:w-32"
        src="https://dietdining.ca/img/home-one/service-shape2.png"
        alt=""
      />
    </div>
  )
}
