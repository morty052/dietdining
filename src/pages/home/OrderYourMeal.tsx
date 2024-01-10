/* eslint-disable prettier/prettier */

function OrderYourMeal() {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://dietdining.ca/img/home-one/reservation-shape.png)'
      }}
      className="bg-darkBlue bg-no-repeat md:rounded-br-[68px] "
    >
      <div className="mx-auto max-w-4xl items-center  lg:flex">
        <div className=" space-y-4   py-6">
          <p
            className={
              'text-center text-xl font-semibold text-gray-50 lg:text-left lg:text-3xl'
            }
          >
            Order Your Meal Now
          </p>
          <p className={'text-center font-medium text-gray-50 lg:text-left'}>
            Experience the most innovative way of ordering a diet meal based on
            your preferences using an app while spending time with your family.
          </p>
        </div>
        <img
          src="https://dietdining.ca/img/home-one/order-section/order-section-image.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default OrderYourMeal
