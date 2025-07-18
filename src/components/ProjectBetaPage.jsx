import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'

const ProjectBetaPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8">Project BETA: Business Excellence Through Action</h1>
        <p className="text-xl text-gray-600 mb-8">
          Project BETA is a group coaching program designed specifically for trades and service business owners in Victoria, Australia. It's about helping you transition from being self-employed to becoming a true business owner, gaining more control, more profit, and more free time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-700">What You'll Gain:</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Weekly live sessions with like-minded business owners, learning key business principles.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Access to specific documents and videos on Time Management, Productivity, Sales, and Marketing, aligned with the ActionCOACH 6 Ways to Grow a Business.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Entry to our Tuesday evening sessions, alternating between education and coaching.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Mid-point check-ins and 90-day planning sessions (ActionCOACH GrowthCLUB) every 13-week cycle.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>Access to a community of supportive business owners.</span>
              </li>
            </ul>
          </div>
          <div>
            {/* Placeholder for an image related to group coaching or community */}
            <img 
              src="/business-meeting-diverse.jpg" 
              alt="Diverse business owners in Project BETA group coaching session" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">Choose Your Project BETA Level</h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Start where you are, grow at your pace. Each level provides increasing access to resources and coaching.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cadet Level Card */}
          <div className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Cadet</h3>
            <p className="text-xl font-semibold text-red-700 mb-4">$95/week</p>
            <p className="text-gray-600 mb-4">Perfect for self-employed individuals ready to think like business owners.</p>
            <Link to="/project-beta/cadet">
              <Button className="btn-secondary w-full">Learn More</Button>
            </Link>
          </div>

          {/* Navigator Level Card */}
          <div className="border-2 border-red-700 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform scale-105">
            <div className="bg-yellow-400 text-blue-800 px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">POPULAR</div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Navigator</h3>
            <p className="text-xl font-semibold text-red-700 mb-4">$195/week</p>
            <p className="text-gray-600 mb-4">For business owners with 1+ employees seeking growth.</p>
            <Link to="/project-beta/navigator">
              <Button className="btn-primary w-full">Learn More</Button>
            </Link>
          </div>

          {/* Captain Level Card */}
          <div className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Captain</h3>
            <p className="text-xl font-semibold text-red-700 mb-4">$295/week</p>
            <p className="text-gray-600 mb-4">For business owners with 2-3 employees wanting profitable growth.</p>
            <Link to="/project-beta/captain">
              <Button className="btn-secondary w-full">Learn More</Button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Join Project BETA?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Come along and see what we do. If you like it, tell us why you should be part of our community, what you would bring to the group, and what level you want to join at.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Book Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProjectBetaPage


