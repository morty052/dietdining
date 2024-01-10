/* eslint-disable prettier/prettier */
import { Navbar, Footer } from 'components'
import { ChevronRight } from 'lucide-react'

export function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="  space-y-10 pb-20 ">
        <div
          style={{
            backgroundImage:
              'url("https://dietdining.ca/img/about/page-banner.jpg")'
          }}
          className=" h-[200px] bg-cover bg-center bg-no-repeat px-4 pt-20 md:h-[400px]"
        >
          <div className=" flex flex-col gap-y-4 border-l-8 border-baseGreen px-4">
            <p className="text-2xl font-bold text-gray-800">Privacy policy</p>
            <div className="flex items-center gap-x-2">
              <span>Home</span>
              <div className="pt-1">
                <ChevronRight size={14} />
              </div>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-screen-xl space-y-4">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-gray-800 md:text-3xl">
              Privacy Policy for Diet Dining
            </p>
            <p>
              At Diet Dining, accessible from dietdining.ca, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by Diet Dining and how we use it.
            </p>
            <p>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Diet Dining. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              Consent
            </p>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              Information we collect
            </p>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information. If
              you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide. When you register
              for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and
              telephone number.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              Log Files
            </p>
            <p>
              Diet Dining follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services&apos; analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users&apos; movement on
              the website, and gathering demographic information.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              Advertising Partners Privacy Policies
            </p>
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Diet Dining.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on Diet Dining,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p>
              Note that Diet Dining has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              Third Party Privacy Policies
            </p>
            <p>
              Diet Dining’s Privacy Policy does not apply to other advertisers
              or websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </p>
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following: The
              right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service. The
              right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete. The right to erasure – You have the right to
              request that we erase your personal data, under certain
              conditions. The right to restrict processing – You have the right
              to request that we restrict the processing of your personal data,
              under certain conditions. The right to object to processing – You
              have the right to object to our processing of your personal data,
              under certain conditions. The right to data portability – You have
              the right to request that we transfer the data that we have
              collected to another organization, or directly to you, under
              certain conditions. If you make a request, we have one month to
              respond to you. If you would like to exercise any of these rights,
              please contact us.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-gray-800 md:text-2xl ">
              Children’s Information
            </p>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              Diet Dining does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
