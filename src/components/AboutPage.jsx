import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Users, Briefcase, Award, Home } from 'lucide-react'
import stevenRougetImage from '../assets/_DSC0463.jpg'// Using one of the provided images

const AboutPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8">About Steven Rouget</h1>
        <p className="text-xl text-gray-600 mb-8">
          With over 23 years of experience as an ActionCOACH, Steven Rouget is dedicated to helping small and medium-sized businesses in Australia achieve greater control, profit, and free time. He believes in leading by example, running his own successful coaching practice while guiding others to do the same.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={stevenRougetImage} 
              alt="Steven Rouget" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-700">My Philosophy & Experience</h2>
            <p className="text-lg text-gray-700">
              Steven's coaching philosophy is rooted in practical, actionable strategies. He understands the challenges faced by business owners, having spent over two decades in the field. His unique ability to ask the right questions, honed from his background as an Air Conditioning systems trouble shooter, helps clients uncover hidden opportunities and overcome obstacles.
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>**23 Years of ActionCOACH Experience:** A proven track record of helping hundreds of business owners succeed.</span>
              </li>
              <li className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>**Focus on Trades & Service Businesses:** Deep understanding of the unique dynamics and challenges within this sector.</span>
              </li>
              <li className="flex items-start space-x-3">
                <Briefcase className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>**Business Owner First:** Leading by example, Steven runs his own successful coaching business, providing real-world insights.</span>
              </li>
              <li className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <span>**17-Week Guarantee:** Confidence in results, backed by the ActionCOACH 7-point, 17-week guarantee.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-inner mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">The Power of the ActionCOACH Network</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            When you work with Steven, you're not just getting one coach; you're gaining access to the collective knowledge and resources of the entire ActionCOACH network. As the world's number one Business Coaching firm, ActionCOACH has coached over 15,000 clients weekly in more than 70 countries since its founding by Brad Sugars in 1993.
          </p>
          <p className="text-lg text-gray-700 text-center">
            This global network provides an unparalleled pool of expertise, strategies, and best practices, ensuring you receive the most effective and up-to-date coaching available. It's like having thousands of experts at your fingertips.
          </p>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether through Project BETA or personalized 1-on-1 coaching, Steven is ready to help you build a profitable, commercial enterprise that works without you.
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

export default AboutPage


