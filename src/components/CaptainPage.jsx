import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import captainImage from '../assets/captain_level_benefits.png'

const CaptainPage = () => {
  return (
    <div className="container-max py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Project BETA: Captain Level</h1>
      <p className="text-lg text-gray-700 mb-8">
        The Captain level, at $295/week, is designed for business owners with 2-3 employees who are ready to significantly grow their business with a focus on profit and time. It provides access to more sophisticated strategies and direct coaching support.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-red-700 mb-4">What You Get:</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>All Navigator Level Benefits:</strong> Continue to leverage all the benefits from the Navigator program, ensuring a strong foundation for advanced growth.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Amber Strategy Cards:</strong> Gain access to more sophisticated 'Amber' Strategy Cards, designed for businesses ready to implement advanced growth and efficiency strategies.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Brad Sugars' 30X Wealth Series:</strong> Dive deeper into wealth creation and financial mastery with Brad Sugars' 30X Wealth series, complementing your business growth with personal financial success.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Priority Coaching Access:</strong> Receive enhanced and more direct access to coaching, ensuring personalized guidance as you navigate complex business challenges and opportunities.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img src={captainImage} alt="Captain Level Benefits" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Ready for Advanced Growth?</h2>
        <p className="text-lg text-gray-700 mb-8">
          The Captain level is for business owners committed to achieving significant profit and reclaiming their time.
        </p>
        <Link to="/contact">
          <Button className="btn-primary text-xl px-8 py-4">
            Join Project BETA Captain
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CaptainPage


