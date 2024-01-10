/* eslint-disable prettier/prettier */
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import {
  Home,
  AboutUs,
  BlogPage,
  ContactUs,
  Privacy,
  Terms,
  Blogs
} from '../pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms-and-condition" element={<Terms />} />
      <Route path="/blogs/:id" element={<Blogs />} />
    </>
  )
)

export const Router = () => <RouterProvider router={router} />
