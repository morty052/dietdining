/* eslint-disable prettier/prettier */

function Hero() {
  return (
    // <!-- Hero -->
    <div className="relative mx-auto max-w-[85rem] p-4 sm:px-6 lg:px-16">
      {/* <!-- Grid --> */}
      <div className="grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-20">
        <div>
          <div className="hidden px-6 pt-12 lg:block">
            <img
              src="https://dietdining.ca/img/home-one/banner/bread-2-01.png"
              alt=""
              className=""
            />
          </div>
          <h1 className="block text-center text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-left  lg:leading-tight ">
            Revolutionizing Diet Food through Ordering Online at your Doorstep
          </h1>
          <p className="mt-3 text-center text-lg text-gray-800 lg:text-left ">
            It is a one of its kind online platform that helps you find the
            right diet meal for all your needs. Now order vegetarian, vegan,
            ketogenic, paleo-friendly, and gluten-free food at any point in time
            while sitting at home.
          </p>
          <div className="hidden px-4 pt-12 lg:block">
            <img
              src="https://dietdining.ca/img/home-one/banner/salat-01.png"
              alt=""
              className=" "
            />
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div className="relative ms-4">
          <img
            className="w-full rounded-md md:hidden lg:block"
            src="https://dietdining.ca/img/home-one/banner/home-header.png"
            alt="Image Description"
          />
          <div className="absolute -right-12 -top-4 hidden lg:block">
            <img
              className="w-28"
              src="https://dietdining.ca/img/home-one/banner/header-shape-1.png"
              alt="Image Description"
            />
          </div>
        </div>

        <div className="absolute -bottom-6 left-[50%] hidden lg:block">
          <img
            className="w-28"
            src="https://dietdining.ca/img/home-one/banner/veg-salat-01.png"
            alt="Image Description"
          />
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  )
}

export default Hero
