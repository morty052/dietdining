/* eslint-disable prettier/prettier */

import Articles from 'constants/Articles'
import { Link } from 'react-router-dom'
import { styles } from 'styles'

function BlogCard({
  image,
  title,
  snippet,
  id,
  date
}: {
  image: string
  title: string
  snippet: string
  id: string
  date: string
}) {
  return (
    <div className="relative h-[500px] max-w-sm space-y-4   shadow">
      <div className="relative">
        <img className="w-full rounded-t-xl" src={image} alt="" />
        <div className="absolute -bottom-4 right-4 rounded-lg bg-baseGreen p-2">
          <p className="  text-sm  text-white">{date}</p>
        </div>
      </div>
      <div className="space-y-2 p-2">
        <p className="text-lg font-semibold">{title}</p>
        <p>{snippet}</p>
      </div>
      <Link
        reloadDocument
        to={`/blogs/${id}`}
        className=" absolute bottom-4 left-2 rounded-full bg-baseGreen px-6 py-2 text-gray-50 transition-all hover:bg-darkBlue"
      >
        Read More
      </Link>
    </div>
  )
}

function BlogCardGrid() {
  return (
    <div className="grid gap-x-6 py-4 md:grid-cols-2">
      {Articles.map((article) => (
        <BlogCard key={article.id} {...article} />
      ))}
      {/* <div className="relative h-[500px] max-w-sm space-y-4  shadow">
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
            The one that makes us healthier saves a lot of money is preferred
            less over the vehicle that takes away lots of money.
          </p>
        </div>
        <button className="absolute bottom-4 left-2 rounded-full bg-baseGreen px-6 py-2 text-gray-50">
          Read More
        </button>
      </div> */}
    </div>
  )
}

export default function Blog() {
  return (
    <div className="mx-auto max-w-screen-lg p-2">
      <p className={styles.header_text}>Read Our Insightful Blogs</p>
      <p className={styles.header_description}>
        Get all the essential information right here regularly for all your
        diet, food <br className="hidden lg:block" /> and health resolution,
        always keeping you motivated and updated.
      </p>
      <div className="flex justify-center pt-6 ">
        <BlogCardGrid />
      </div>
    </div>
  )
}
