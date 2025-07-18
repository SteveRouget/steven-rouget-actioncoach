import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import cadetImage from '../assets/cadet_level_benefits.jpg'

const CadetPage = () => {
  return (
    <div className="container-max py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Project BETA: Cadet Level</h1>
      <p className="text-lg text-gray-700 mb-8">
        The Cadet level, at $95/week, is designed for self-employed individuals ready to transition from being a self-employed person to a true business owner. It focuses on foundational knowledge and essential business principles.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-red-700 mb-4">What You Get:</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Weekly Live Sessions:</strong> Engage with like-minded business owners, learning key concepts essential for business ownership versus self-employment.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Access to GHL Documents & Videos:</strong> Gain exclusive access to specific resources on Time Management, Productivity, Sales, and Marketing, all aligned with the ActionCOACH 6 Ways to Grow a Business.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Hand-Picked Strategy Cards:</strong> Access to 10 hand-picked 'Green' Strategy Cards, providing detailed instructions, importance, strategies, and 4-5 week implementation plans for immediate execution.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Brad Sugars' 30X Business Series:</strong> Unlock 30 x 30-minute videos from Brad Sugars, covering essential business topics to accelerate your learning.
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img src={cadetImage} alt="Cadet Level Benefits" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Join the Cadet level and begin transforming your business today. Experience the power of community and proven strategies.
        </p>
        <Link to="/contact">
          <Button className="btn-primary text-xl px-8 py-4">
            Join Project BETA Cadet
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CadetPage


