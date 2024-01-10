/* eslint-disable prettier/prettier */
import { Navbar, Footer } from 'components'
import { ChevronRight } from 'lucide-react'

export function BlogPage() {
  return (
    <div>
      <Navbar />
      <div className="  space-y-10 pb-20 ">
        <div
          style={{
            backgroundImage:
              'url("https://dietdining.ca/img/about/page-banner.jpg")'
          }}
          className=" h-[200px] bg-cover bg-center bg-no-repeat px-4 pt-20 md:h-[400px]"
        >
          <div className=" flex flex-col gap-y-4 border-l-8 border-baseGreen px-4">
            <p className="text-2xl font-bold text-gray-800">Blog</p>
            <div className="flex items-center gap-x-2">
              <span>Home</span>
              <div className="pt-1">
                <ChevronRight size={14} />
              </div>
              <span>Blog</span>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-2xl gap-x-6 py-4 md:grid-cols-2">
          <div className="relative h-[500px] max-w-sm space-y-4   shadow">
            <div className="relative">
              <img
                className="w-full rounded-t-xl"
                src="https://dietdining.ca/img/home-one/blog/blog-2.jpg"
                alt=""
              />
              <div className="absolute -bottom-4 right-4 rounded-lg bg-baseGreen p-2">
                <p className="  text-sm  text-white">10 October 2021</p>
              </div>
            </div>
            <div className="space-y-2 p-2">
              <p className="text-lg font-semibold">
                How is Diet Dining Revolutionizing the Canadian Food Delivery
                Industry?
              </p>
              <p>
                Diet Dining is one such app used with existing apps like Uber
                Eats, Skip the Dishes, DoorDash, and many others.
              </p>
            </div>
            <button className="absolute bottom-4 left-2 rounded-full bg-baseGreen px-6 py-2 text-gray-50">
              Read More
            </button>
          </div>
          <div className="relative h-[500px] max-w-sm space-y-4  shadow">
            <div className="relative">
              <img
                className="w-full rounded-t-xl"
                src="https://dietdining.ca/img/home-one/blog/blog-1.jpg"
                alt=""
              />
              <div className="absolute -bottom-4 right-4 rounded-lg bg-baseGreen p-2">
                <p className="  text-sm  text-white">28 may 2020</p>
              </div>
            </div>
            <div className="space-y-2 p-2">
              <p className="text-lg font-semibold">
                Why Do People Love to Eat Diet Food Daily?
              </p>
              <p>
                The one that makes us healthier saves a lot of money is
                preferred less over the vehicle that takes away lots of money.
              </p>
            </div>
            <button className="absolute bottom-4 left-2 rounded-full bg-baseGreen px-6 py-2 text-gray-50">
              Read More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
