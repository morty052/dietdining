/* eslint-disable prettier/prettier */
import { Navbar, Footer } from 'components'
import { ChevronRight } from 'lucide-react'
import WhatWeOffer from 'pages/home/WhatWeOffer'
export function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen space-y-20 pb-20 ">
        <div
          style={{
            backgroundImage:
              'url("https://dietdining.ca/img/about/page-banner.jpg")'
          }}
          className=" h-[200px] bg-cover bg-center bg-no-repeat px-4 pt-20 md:h-[400px]"
        >
          <div className=" flex flex-col gap-y-4 border-l-8 border-baseGreen px-4">
            <p className="text-2xl font-bold text-gray-800">About Us</p>
            <div className="flex items-center gap-x-2">
              <span>Home</span>
              <div className="pt-1">
                <ChevronRight size={14} />
              </div>
              <span>About Us</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className=" mx-auto max-w-screen-xl space-y-4 px-2 md:px-8">
          <p className="text-center text-2xl font-bold text-gray-800 md:text-3xl">
            About Our Story
          </p>
          <p>
            Today, people are becoming diet conscious and looking for solutions
            to keep their diet food on track. But they always get the right
            solution that could provide them with diet meals as per their
            preferences and recommended nutritional food intake daily.
          </p>
          <p>
            Diet Dining came up with an innovative and handy solution that helps
            people find the right diet food around them and deliver it to their
            doorstep without any consequences. We are a Canadian-based online
            diet food delivery platform that can be used with an existing app
            like Skip the Dishes, DoorDash and Uber Eats. Our app is simple,
            easily navigational, fully-featured, and most importantly,
            personalized to your needs.
          </p>
          <p>
            We cater to our users with gluten-free, vegetarian, vegan,
            ketogenic, and paleo-friendly food options, where Diet Dining has
            partnered agreements with those restaurants. In addition, our app
            prominently helps users save time exploring restaurants that serve
            diet meals best suited for their needs at their convenience located
            nearby them.
          </p>
          <p>
            Often users find it very difficult to figure out whether the ordered
            food is gluten-free, vegan, or vegetarian due to lack of essential
            information not described properly with nutritional value.
          </p>
          <p>
            In such a sense, the Diet Dining app will play a crucial role in
            providing detailed information about the diet food ordered. This
            will revolutionize the Canadian diet food industry in the coming
            days, where users will be able to focus on their health rather than
            invest time searching for the right place for diet food
          </p>
        </div>

        {/* Pics */}
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-2 py-6 md:flex-row md:justify-between md:px-8">
          <img
            src="https://dietdining.ca/img/home-one/about-section/restaurant-image.jpg"
            alt=""
            className="mx-auto max-w-[340px] rounded-xl lg:max-w-md"
          />
          <img
            src="https://dietdining.ca/img/home-one/about-section/food-delivery.jpg"
            alt=""
            className="mx-auto max-w-[340px] rounded-xl lg:max-w-md"
          />
        </div>

        <WhatWeOffer />
      </div>
      <Footer />
    </div>
  )
}
