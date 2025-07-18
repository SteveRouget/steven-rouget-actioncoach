import React from 'react'
import { Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8 text-center">Success Stories & Testimonials</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Hear directly from business owners who have transformed their companies and lives through coaching with Steven Rouget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* Removed image tag as images were not found */}
              <div>
                <h3 className="text-xl font-bold text-blue-800">Leigh Phillips</h3>
                <p className="text-gray-600">Managing Director, LGP Electrical</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "Steven has pushed me to do things that I should do, but don’t do because I’m so busy – and that’s brought very positive outcomes to my business. He has helped me develop more structure and consistency. This has improved my cashflow, my professionalism, and my ability to have a more transparent view of what the process of running a successful business is all about (as a whole). LGP’s growth is now continuing in an upward direction."
            </p>
            <p className="text-lg text-gray-700 italic">
              "Steven’s promises of what he could do for me have all been delivered over time, and I draw on his knowledge regularly to help me analyse issues, whereby he always offers sensible and logical ways to go about resolving them. As a Business Coach he has a friendly and approachable manner, but he’s firm but fair when I need to hear it and, most particularly when, as a business owner, I want to be motivated to fire-up and positively see what my business can become. I couldn’t ask for a better mentor."
            </p>
          </div>

          {/* Testimonial 2 - Real: Adam Goudge */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-800">Adam Goudge</h3>
                <p className="text-gray-600">Director, Australia Wide IT</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "Thanks for helping me and my business to grow. The knowledge that you have given me has allowed me to turn my mediocre business into a truly great enterprise. Before I started with you I found myself working 60, 70 and sometimes 80 hours or more per week just to keep my business going, the knowledge that you have given me now means that my business can run without me, I still work long hours but now I do it because I want to, not because I have to!"
            </p>
            <p className="text-lg text-gray-700 italic">
              "Since my coaching program begun we have increased sales revenue by 65% and at the same time increased profit margins by around 25%. Thanks Steve for helping my business grow."
            </p>
          </div>

          {/* Testimonial 3 - Real: Mutasim Sardar */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-800">Mutasim Sardar</h3>
                <p className="text-gray-600">Building Company Owner</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic mb-4">
              "I've been working with Steve for close to two years now to help grown our Building company. We have implemented a KPI system for all areas of our organisation and a sales system which we are currently testing and measuring for improvement. He has also helped us through COVID so that we have come through the other side stronger than ever with all-around support in HR, admin, production, finance and marketing support."
            </p>
            <p className="text-lg text-gray-700 italic">
              "Steve has taken the time needed to understand our business needs and our goals to provide tailored and bespoke strategies to achieve them. I would highly recommend Steve for any business owner with big dreams who wants to systemise or grow their business."
            </p>
          </div>

        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the ranks of successful business owners who have transformed their businesses with Steven Rouget. Contact us today to start your journey.
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

export default SuccessStoriesPage


