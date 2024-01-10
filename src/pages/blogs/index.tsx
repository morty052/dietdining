/* eslint-disable prettier/prettier */
import { Navbar, Footer } from 'components'
import { ChevronRight, Plus } from 'lucide-react'
import Articles from 'constants/Articles'
import { Link, useParams } from 'react-router-dom'
import { useMemo } from 'react'

function DefaultPost({ title, image }: { title: string; image: string }) {
  return (
    <div className="mx-auto max-w-screen-md px-4 pt-20 lg:col-span-2 lg:pt-0">
      <div className="space-y-2">
        <p className="text-2xl font-bold text-gray-800 md:text-3xl">{title}</p>
        <p>
          We have seen in recent times that the demand for app-based services
          has consistently been increasing. Even in pandemics, we saw that
          mobile apps were at the center stage of fulfilling the daily needs of
          the people most of the time. From fruits, vegetables, online
          transactions, banking, to buying clothes.
        </p>
      </div>
      <div className="py-2">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>

      <div className="space-y-4">
        <p>
          Over the years, people have found it challenging to rely on an app for
          buying diet food that shares every detail about the meal, nutritional
          value, and other benefits. People have to always search for multiple
          places, restaurants, shops to get the diet food. But here, Diet Dining
          is changing the course of providing diet food at people’s doorstep and
          sharing all that important details about the meal.
        </p>

        <p>
          Diet Dining is one such app used with existing apps like Uber Eats,
          Skip the Dishes, DoorDash, and many others. It adds value for the
          users to search for healthy, selective, preferred diet food like
          vegan, vegetarian, gluten-free, or maybe ketogenic.
        </p>

        <p>
          People have understood the importance of diet food and its
          implementation into their daily life that stimulates energy,
          resistance power, and helps to stay away from high cholesterol food
          that further invites health issues.
        </p>

        <p>
          Most of the work is done by sitting in an office or at home with
          lesser physical activities. So in that sense, diet food has become an
          integral part of life.
        </p>

        <p>
          Diet Dining is an amazing online diet food ordering platform that
          helps you save time and get the food served at your home with expected
          nutritional value and health benefits intact.
        </p>
        <p>
          In the coming days, this platform will revolutionize and motivate
          other businesses to focus on delivering diet food at the doorstep with
          all the nutritional value, food items details, and other health
          information.
        </p>
      </div>

      <div className="mt-4">
        <Link
          to={`/blogs/post_857383`}
          reloadDocument
          className=" flex w-40 items-center justify-center rounded-full border border-gray-800 px-4 py-2 text-gray-800 transition-colors duration-200 ease-in hover:border-transparent hover:bg-baseGreen hover:text-white"
        >
          Next
        </Link>
      </div>
    </div>
  )
}

function AltPost({ title, image }: { title: string; image: string }) {
  return (
    <div className="mx-auto max-w-screen-md px-4 pt-20 lg:col-span-2 lg:pt-0">
      <div className="space-y-2">
        <p className="text-2xl font-bold text-gray-800 md:text-3xl">{title}</p>
        <p>
          Have you ever imagined why people love to eat diet food when it does
          not taste so great? Well, over the years we have seen the changing
          lifestyle of people and eating habits. Today, in just a few clicks on
          a smartphone, we can fulfill our needs. We can order food, furniture,
          clothes, jewelry, cosmetics, and the list goes on.
        </p>
      </div>
      <div className="py-2">
        <img className="w-full rounded-xl" src={image} alt="" />
      </div>

      <div className="space-y-4">
        <p>
          Today, everything is possible to get sitting at home. And this also
          brings in lots of health issues due to reduced physical activities. We
          have vehicles to travel, and we use it intensely to save time with
          lots of money invested behind it but never think of using a bicycle
          because that takes more time, energy, and money. Isn’t it something
          strange?
        </p>

        <p>
          The one that makes us healthier saves a lot of money is preferred less
          over the vehicle that takes away lots of money. Even if we see in
          workplaces, people spend time sitting in front of computers and
          completing their tasks most of the time. We have lesser physical
          activities at home because technology has made our lives easier, but
          prone to health issues.
        </p>

        <p>
          Earlier, people used to prefer high cholesterol food as leisure and
          celebration. But the time has changed, and today even at festivals,
          the trends are changing for food. And this shows that the awareness
          for a healthy lifestyle has also increased every year.
        </p>

        <p>
          The number of health risks is also increasing every year enormously,
          which could be one reason why people prefer diet food and consume
          daily. In addition, diet food has a lot of benefits, right from
          physically being fit to mentally being active round the clock.
        </p>

        <p>
          When we consume healthy food, it automatically triggers our mind to
          work more and stay fresh for longer hours. This has a huge impact on
          hemoglobin and other proteins in our body that maintains the energy
          level within our body right from the morning till the nighttime when
          we go to sleep.
        </p>
        <p className="text-2xl font-bold text-gray-800 md:text-3xl">
          Conclusion
        </p>
        <p>
          Sometimes it becomes difficult for us to find diet food or even cook
          at home. So, Diet Dining has an innovative solution that helps you
          stay loyal to your diet plan and never miss a single day. One of its
          kind app that saves your precious time in searching for diet food
          around you available at restaurants. You can readily order and
          maintain food habits by knowing its nutritional value and other
          essential information.
        </p>
        <p>
          This platform bridges the gaps of finding the right places for diet
          food and delivering them to your doorstep in a single click. It’s the
          perfect combination & implementation of technology as well as diet
          food for a good cause.
        </p>
      </div>

      <div className="mt-4">
        <Link
          to={`/blogs/post_84848`}
          reloadDocument
          className=" flex w-40 items-center justify-center rounded-full border border-gray-800 px-4 py-2 text-gray-800 transition-colors duration-200 ease-in hover:border-transparent hover:bg-baseGreen hover:text-white"
        >
          Previous
        </Link>
      </div>
    </div>
  )
}

function RecentPosts() {
  const PostCard = ({ title, to }: { title: string; to: string }) => {
    return (
      <Link
        to={to}
        className="group flex  w-full items-start gap-x-2 rounded-xl p-4 transition-all duration-300 ease-in hover:bg-baseGreen"
      >
        <p className="flex-1  text-sm text-gray-800 group-hover:text-white">
          {title}
        </p>
        <div className="pt-1">
          <span className="text-gray-800 group-hover:text-white">
            <Plus size={12} />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <div className="w-full px-4">
      <p className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
        Recent Posts
      </p>
      <div className="space-y-6">
        {Articles.map((article) => (
          <PostCard
            key={article.id}
            title={article.title}
            to={`/blogs/${article.id}`}
          />
        ))}
      </div>
      <p className="text-2xl font-bold text-gray-800 md:text-3xl">Tags</p>
      <div className="flex gap-x-4">
        <button className="mt-4 w-20 rounded-full border border-gray-800 px-4 py-2 text-xs text-gray-800">
          Delivery
        </button>
        <button className="mt-4 w-20 rounded-full border border-gray-800 px-4 py-2 text-xs text-gray-800">
          Eat
        </button>
        <button className="mt-4 w-20 rounded-full border border-gray-800 px-4 py-2 text-xs text-gray-800">
          Food
        </button>
      </div>
    </div>
  )
}

export function Blogs() {
  const id = useParams().id

  const article = useMemo(
    () => Articles.find((article) => article.id === id),
    [id]
  )

  const { title, image } = article ?? {}

  const posts = {
    post_84848: <DefaultPost title={title as string} image={image as string} />,
    post_857383: <AltPost title={title as string} image={image as string} />
  }

  return (
    <div>
      <Navbar />
      <div className=" min-h-screen space-y-10 pb-20 ">
        <div
          style={{
            backgroundImage:
              'url("https://dietdining.ca/img/about/page-banner.jpg")'
          }}
          className=" h-[200px] bg-cover bg-center bg-no-repeat px-4 pt-20 md:h-[400px]"
        >
          <div className=" flex flex-col gap-y-4 border-l-8 border-baseGreen px-4">
            <p className="text-2xl font-bold text-gray-800">{title}</p>
            <div className="flex items-center gap-x-2">
              <span>Home</span>
              <div className="pt-1">
                <ChevronRight size={14} />
              </div>
              <span>Blog</span>
              <div className="pt-1">
                <ChevronRight size={14} />
              </div>
              <span>{title}</span>
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-screen-xl grid-cols-3 items-start lg:grid lg:gap-x-4 ">
          <div className="hidden lg:block">
            <RecentPosts />
          </div>
          {posts[id as keyof typeof posts]}
          <div className="lg:hidden">
            <RecentPosts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
