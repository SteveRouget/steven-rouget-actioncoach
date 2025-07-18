import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import navigatorImage from '../assets/navigator_level_benefits.jpg'

const NavigatorPage = () => {
  return (
    <div className="container-max py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Project BETA: Navigator Level</h1>
      <p className="text-lg text-gray-700 mb-8">
        The Navigator level, at $195/week, is designed for business owners with one or more employees who are ready to scale their operations and
        implement more sophisticated strategies. It builds upon the strong foundation of the Cadet level, providing enhanced resources and coaching.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-red-700 mb-4">What You Get:</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>All Cadet Level Benefits:</strong> Enjoy all the foundational benefits of the
                Cadet program, including weekly live sessions, GHL access, and
                community support.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Additional Green Strategy Cards:</strong> Gain access to the rest of the
                Green Strategy Cards, providing a comprehensive set of foundational
                strategies for your business. These are crucial as your business becomes
                more sophisticated.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Brad Sugars' 30X Life Series:</strong> Expand your learning with Brad
                Sugars' 30X Life series, focusing on personal growth and balance to
                complement your business success.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Enhanced Coaching Support:</strong> Receive more tailored guidance as
                your business evolves, ensuring you apply strategies effectively for
                sustained growth.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img src={navigatorImage} alt="Navigator Level Benefits" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Ready to Scale Your Business?</h2>
        <p className="text-lg text-gray-700 mb-8">
          The Navigator level provides the tools and support to take your business to the next level.
        </p>
        <Link to="/contact">
          <Button className="btn-primary text-xl px-8 py-4">
            Join Project BETA Navigator
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NavigatorPage


