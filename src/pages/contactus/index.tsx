/* eslint-disable prettier/prettier */
import { Navbar, Footer } from 'components'
import {
  ChevronRight,
  Facebook,
  Instagram,
  MapPin,
  MessageSquare,
  PhoneCall,
  Twitter
} from 'lucide-react'

function ContactGrid() {
  return (
    <div className=" grid grid-flow-row gap-4 md:grid-cols-2 md:px-4 lg:grid-cols-3">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-y-4 rounded-3xl border border-baseGreen px-4 py-8">
        <div className="grid h-20 w-20 place-content-center rounded-full bg-baseGreen">
          <MessageSquare size={40} color="white" />
        </div>
        <p className=" font-medium text-gray-800">info@dietdining.org</p>
      </div>

      <div
        style={{
          backgroundImage:
            'url("https://dietdining.ca/img/home-one/service-shape.png")'
        }}
        className="mx-auto flex w-full max-w-sm flex-col items-center gap-y-4 rounded-3xl border border-white bg-baseGreen bg-cover bg-no-repeat px-4 py-8"
      >
        <div className="grid h-20 w-20 place-content-center rounded-full bg-gray-800">
          <MapPin size={40} color="white" />
        </div>
        <p className="text-center font-medium text-gray-800">
          5307 Victoria Drive, Vancouver, BC V5P 3V6, Canada
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-y-4 rounded-3xl border border-baseGreen px-4 py-8 md:col-span-2 lg:col-span-1">
        <div className="grid h-20 w-20 place-content-center rounded-full bg-baseGreen">
          <PhoneCall size={40} color="white" />
        </div>
        <a href="tel:+16047577855" className="  font-medium text-gray-800">
          +1(604) 757-7855
        </a>
      </div>
    </div>
  )
}

function ContactForm() {
  return (
    <div
      style={{
        backgroundImage: 'url("https://dietdining.ca/img/contact-form-bg.jpg")'
      }}
      className=""
    >
      <div className="mx-auto max-w-screen-lg items-center gap-x-8 px-2 py-12 md:flex md:px-6 ">
        <div className="grid w-full max-w-xl gap-y-4 rounded-xl border bg-white/40 px-2 py-6  md:gap-x-4 lg:grid-cols-1">
          <input
            className="rounded-3xl border p-4 "
            placeholder="Name"
            type="text"
          />
          <input
            className="rounded-3xl border p-4 "
            placeholder="Email"
            type="text"
          />
          <input
            className="rounded-3xl border p-4 "
            placeholder="Phone"
            type="text"
          />
          <input
            className="rounded-3xl border p-4 "
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="rounded-3xl border p-4  "
            rows={6}
            placeholder="Message"
          ></textarea>

          <div className="space-y-4">
            <button
              className="w-40 rounded-3xl bg-baseGreen px-4 py-2 font-medium text-white"
              type="submit"
            >
              Send Message
            </button>
            <div className="flex gap-4">
              <div className="grid h-12 w-12 place-content-center rounded-full bg-gray-800">
                <Facebook color="white" />
              </div>
              <div className="grid h-12 w-12 place-content-center rounded-full bg-gray-800">
                <Twitter color="white" />
              </div>
              <div className="grid h-12 w-12 place-content-center rounded-full bg-gray-800">
                <Instagram color="white" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://dietdining.ca/img/home-one/contact-page-image.jpg"
          alt=""
          className="hidden w-2/5 rounded-3xl md:block"
        />
      </div>
    </div>
  )
}

export function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen  space-y-10 pb-10 ">
        <div
          style={{
            backgroundImage:
              'url("https://dietdining.ca/img/about/page-banner.jpg")'
          }}
          className=" h-[200px] bg-cover bg-center bg-no-repeat px-4 pt-20 md:h-[400px]"
        >
          <div className=" flex flex-col gap-y-4 border-l-8 border-baseGreen px-4">
            <p className="text-2xl font-bold text-gray-800">Contact us</p>
            <div className="flex items-center gap-x-2">
              <span>Home</span>
              <div className="pt-1">
                <ChevronRight size={14} />
              </div>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
        <ContactGrid />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
