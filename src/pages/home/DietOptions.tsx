/* eslint-disable prettier/prettier */

const options = [
  {
    title: 'Diet Food',
    image: 'https://dietdining.ca/img/home-one/feature-1.jpg'
  },
  {
    title: 'Lean meat',
    image: 'https://dietdining.ca/img/home-one/lean-meat.png'
  },
  {
    title: 'Desserts',
    image: 'https://dietdining.ca/img/home-one/feature-3.jpg'
  }
]

function Option({
  image,
  title,
  third
}: {
  image: string
  title: string
  third: boolean
}) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`relative mx-auto h-72 w-full max-w-[360px] rounded-2xl bg-cover  bg-center bg-no-repeat transition-transform duration-500 ease-in-out hover:-translate-y-3 ${
        third && 'col-span-2  lg:col-span-1'
      }`}
    >
      <div className="absolute bottom-4 flex w-full justify-center ">
        <div className="w-3/4 rounded-2xl bg-white p-2 shadow-md">
          <p className="font-medium">{title}</p>
        </div>
      </div>
    </div>
  )
}

function DietOptions() {
  return (
    <div className=" mx-auto max-w-4xl space-y-6 text-center lg:text-left xl:max-w-6xl">
      <div className="space-y-4 px-2">
        <h3 className="text-2xl font-semibold text-gray-800 md:text-4xl">
          Diet Options
        </h3>
        <p className="font-medium text-gray-800">
          Choose from a wide range of diet food that helps you stay healthy,
          calm, <br className="hidden lg:block" /> and always happy with your
          life.
        </p>
      </div>
      <div className="  grid-flow-row grid-cols-2 items-center space-y-6  py-4 md:grid md:gap-y-6 md:space-y-0 lg:grid-cols-3  lg:gap-x-4  ">
        {options.map((option, index) => (
          <Option
            third={index === 2}
            key={option.title}
            title={option.title}
            image={option.image}
          />
        ))}
      </div>
    </div>
  )
}

export default DietOptions
