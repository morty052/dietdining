/* eslint-disable prettier/prettier */

import {
  Facebook,
  Instagram,
  MessageSquare,
  Phone,
  Twitter,
  MapPin,
  ChevronRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

function FooterLink({ title, to }: { title: string; to: string }) {
  return (
    <Link
      reloadDocument
      to={`${to}`}
      className="group flex cursor-pointer items-center gap-x-2"
    >
      <span className="text-white transition-all duration-500 ease-in group-hover:text-baseGreen">
        <ChevronRight size={15} />
      </span>
      <span className="text-white transition-all duration-500 ease-in group-hover:translate-x-3 group-hover:text-baseGreen">
        {title}
      </span>
    </Link>
  )
}

export function Footer() {
  return (
    <div>
      <footer className="mx-auto w-full max-w-screen-2xl items-start justify-between rounded-t-[48px] bg-darkBlue px-4 py-10 sm:px-6 md:gap-x-8 lg:flex lg:px-16">
        {/* BRAND */}
        <div className="space-y-4  pt-5 ">
          <img
            className="w-48"
            src="https://dietdining.ca/img/logo/diet-dining-mobile-logo.svg"
            alt=""
          />
          <p className="text-white">
            Your one-stop solution for <br /> getting diet food delivered to you
            today.
          </p>
          <div className="flex gap-4">
            <div className="grid h-12 w-12 place-content-center rounded-full bg-baseGreen">
              <Facebook color="white" />
            </div>
            <div className="grid h-12 w-12 place-content-center rounded-full bg-baseGreen">
              <Twitter color="white" />
            </div>
            <div className="grid h-12 w-12 place-content-center rounded-full bg-baseGreen">
              <Instagram color="white" />
            </div>
          </div>
        </div>

        {/* <!-- Grid --> */}
        <div className="mb-10 grid  gap-6  pt-5 md:grid-cols-3  lg:px-8 ">
          {/* <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex-none text-xl font-semibold    "
              href="#"
              aria-label="Brand"
            >
              Brand
            </a>
            <p className="mt-3 text-xs text-gray-600 sm:text-sm ">
              © 2022 Preline.
            </p>
          </div> */}
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-lg font-semibold uppercase text-baseGreen ">
              Quick links
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <FooterLink title="About" to="/about" />
              <FooterLink title="Blog" to="/blog" />
              <FooterLink title="Contact Us" to="/contact" />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-lg font-semibold uppercase text-baseGreen ">
              Information
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <FooterLink title="Privacy Policy" to="/privacy" />
              <FooterLink
                title="Terms & Conditions"
                to="/terms-and-condition"
              />
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h4 className="text-lg font-semibold uppercase text-baseGreen ">
              Contact us
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <a className="flex items-center gap-x-2">
                <Phone size={15} color="white" />
                <span className="inline-flex gap-x-2 text-gray-50">
                  +1 (604) 757-7855
                </span>
              </a>
              <a className="flex items-center gap-x-2">
                <MessageSquare size={15} color="white" />
                <span className="inline-flex gap-x-2 text-gray-50 ">
                  info@dietdining.org
                </span>
              </a>
              <a className="flex items-center gap-x-2">
                <MapPin size={15} color="white" />
                <span className="inline-flex gap-x-2 text-gray-50 ">
                  5307 Victoria Drive, Vancouver, BC V5P 3V6, Canada
                </span>
              </a>
            </div>
          </div>
          {/* <!-- End Col --> */}

          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-5 border-t border-gray-200  ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between">
              <div className="mt-3 sm:hidden">
                <p className="mt-1 text-sm  text-gray-50 sm:text-sm ">
                  Copyright © 2024 . All Rights Reserved by Diet Dining.
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
