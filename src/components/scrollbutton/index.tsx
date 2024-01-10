/* eslint-disable prettier/prettier */
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollButton() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setHidden(false)
      } else {
        setHidden(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {!hidden && (
        <a
          onClick={scrollToTop}
          className="fade-in group fixed bottom-10 right-4 z-20 grid h-10 w-10 place-content-center rounded-full bg-baseGreen transition-all duration-300 ease-in hover:bg-darkBlue"
        >
          <span className=" transition-all duration-300 ease-in group-hover:-translate-y-1">
            <ArrowUp color="white" />
          </span>
        </a>
      )}
    </>
  )
}
