/* eslint-disable prettier/prettier */
import { styles } from 'styles'

const menus = [
  {
    title: 'Breakfast Item',
    image: 'https://dietdining.ca/img/home-one/menu1.png'
  },
  {
    title: 'Lunch Item',
    image: 'https://dietdining.ca/img/home-one/menu2.png'
  },
  {
    title: 'Dinner Item',
    image: 'https://dietdining.ca/img/home-one/menu3.png'
  }
]

const MenuItem = ({
  title,
  image,
  active,
  third
}: {
  title: string
  image: string
  active: boolean
  third: boolean
}) => {
  // TODO: SIMPLIFY CSS
  return (
    <div
      style={{
        backgroundImage: `url("https://dietdining.ca/img/home-one/service-shape.png")`
      }}
      className={`transition-transform duration-500 ease-in-out hover:-translate-y-3 ${
        !active
          ? `mx-auto w-full max-w-sm rounded-xl border border-baseGreen px-2 py-6 ${
              third
                ? 'mx-auto max-w-sm px-2 py-6 md:col-span-2 lg:col-span-1'
                : ''
            }`
          : `mx-auto w-full max-w-sm rounded-xl bg-baseGreen bg-cover px-2 py-8`
      }`}
    >
      <div className="flex flex-col items-center gap-y-4">
        <img src={image} alt="" />
        <p className="text-center text-xl font-semibold">{title}</p>
      </div>
    </div>
  )
}

function FindYourMeal() {
  return (
    <div className="mx-auto max-w-screen-lg px-2 py-4">
      <p className={styles.header_text}>Find Your Diet Meal with Us</p>
      <p className={styles.header_description}>
        Let us find the right diet meal for you while you describe your special
        needs.
      </p>

      <div className="grid gap-4 py-4 md:grid md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:pt-14 ">
        {menus.map((menu, index) => (
          <MenuItem
            third={index === 2}
            active={index === 1}
            key={menu.title}
            title={menu.title}
            image={menu.image}
          />
        ))}
      </div>
    </div>
  )
}

export default FindYourMeal
