import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Star } from 'lucide-react'

const OneOnOnePage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8">1-on-1 Coaching Programs</h1>
        <p className="text-xl text-gray-600 mb-8">
          Steven Rouget offers bespoke 1-on-1 coaching programs tailored to your specific business needs. With over 23 years of experience, Steven helps business owners achieve their goals, providing personalized guidance and accountability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-red-700">Our Bespoke Approach:</h2>
            <p className="text-lg text-gray-700">
              Unlike one-size-fits-all solutions, Steven's 1-on-1 coaching is entirely customized. Whatever your business needs, that's what your program will include. This ensures you get the most relevant and impactful strategies for your unique situation.
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>**Personalized Strategies:** Coaching tailored to your specific challenges and opportunities.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>**Comprehensive Coverage:** Addressing all areas of your business, including sales, marketing, finance, team building, systems, and customer experience.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span>**Accountability & Support:** Regular sessions to keep you on track and accountable for implementing strategies.</span>
              </li>
            </ul>
          </div>
          <div>
            {/* Placeholder for an image related to 1-on-1 coaching or personalized attention */}
            <img 
              src="/assets/coaching_session_professional.jpeg" 
              alt="1-on-1 Coaching" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">Our 1-on-1 Coaching Programs</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Steven offers a range of 1-on-1 programs designed to meet businesses at different stages of growth and revenue. Each program is built on the foundation of the ActionCOACH methodology, ensuring proven results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* StartUp Program */}
            <div className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">StartUp</h3>
              <p className="text-xl font-semibold text-red-700 mb-4">$575/week</p>
              <p className="text-gray-600 mb-4">Ideal for businesses between $500k - $2M revenue with 3-5 team members, ready for significant growth.</p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Focus on foundational growth strategies.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Implementation of ActionCOACH 6 Ways.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Preparation for the 17-week guarantee.</span></li>
              </ul>
            </div>

            {/* PowerUp Program */}
            <div className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">PowerUp</h3>
              <p className="text-xl font-semibold text-red-700 mb-4">$795/week</p>
              <p className="text-gray-600 mb-4">For businesses ready to accelerate their growth and optimize existing operations.</p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Deeper dive into advanced strategies.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Enhanced focus on team and systems.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Maximizing profitability.</span></li>
              </ul>
            </div>

            {/* Freedom Program */}
            <div className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Freedom</h3>
              <p className="text-xl font-semibold text-red-700 mb-4">$995/week</p>
              <p className="text-gray-600 mb-4">For business owners seeking to build a business that works without them, providing true freedom.</p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Strategic planning for ultimate independence.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Advanced leadership development.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Building a self-sustaining enterprise.</span></li>
              </ul>
            </div>

            {/* Ultimate Program */}
            <div className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Ultimate</h3>
              <p className="text-xl font-semibold text-red-700 mb-4">$1495/week</p>
              <p className="text-gray-600 mb-4">For high-growth businesses aiming for market leadership and significant wealth creation.</p>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Top-tier, intensive coaching for maximum impact.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Strategic vision and execution for dominance.</span></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" /><span>Legacy building and long-term sustainability.</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-inner mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">ActionCOACH 7-Point 17-Week Guarantee</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Steven Rouget stands by his coaching with the ActionCOACH 7-point, 17-week guarantee for 1-on-1 clients. This means that if your business doesn't make back more on its bottom line in profit than what you've invested in coaching within 17 weeks, Steven will continue to coach you for FREE until it does.
          </p>
          <div className="flex justify-center">
            <Star className="h-12 w-12 text-yellow-400" />
            <Star className="h-12 w-12 text-yellow-400" />
            <Star className="h-12 w-12 text-yellow-400" />
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            *In 14 years since this guarantee was introduced, Steven has only had to honor it once, a testament to the effectiveness of his coaching.
          </p>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready for Personalized Business Growth?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how bespoke 1-on-1 coaching can transform your business. Book a complimentary business strategy meeting to discuss your unique needs and goals.
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

export default OneOnOnePage


