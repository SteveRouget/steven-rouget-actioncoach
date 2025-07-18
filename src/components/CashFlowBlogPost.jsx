import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const CashFlowBlogPost = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Sales are Vanity, Profit is Sanity, but Cash Flow is the Real Lifeblood of Business
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span>📅 June 22, 2025</span>
              <span className="mx-2">•</span>
              <span>👤 Steven Rouget</span>
            </div>
            <p className="text-xl text-gray-600 italic">
              Discover why cash flow management is more critical than sales figures for trades and service businesses.
            </p>
          </header>

          <div className="space-y-6 text-gray-700">
            <p>
              In my 23 years of coaching trades and service businesses, I've seen countless business owners get excited about their sales figures while their bank account tells a different story. The harsh reality is that sales don't pay the bills – cash flow does.
            </p>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">The Cash Flow Crisis in Trades Businesses</h2>
            
            <p>
              Trades businesses are particularly vulnerable to cash flow problems because of their unique challenges:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Large upfront material costs</li>
              <li>Extended payment terms with commercial clients</li>
              <li>Seasonal fluctuations in demand</li>
              <li>Equipment and vehicle financing</li>
              <li>Irregular project completion schedules</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">The 13-Week Cash Flow Forecast</h2>
            
            <p>
              The most powerful tool I teach my Project BETA clients is the 13-week rolling cash flow forecast. This simple system helps you predict and prevent cash flow problems before they become critical.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">How it Works:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Track all money coming in (by week)</li>
                <li>Track all money going out (by week)</li>
                <li>Calculate your running cash balance</li>
                <li>Identify potential shortfalls 6-8 weeks in advance</li>
                <li>Take action before problems occur</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">Real Success Story</h2>
            
            <p>
              One of my Navigator-level clients, a building contractor, was constantly stressed about money despite having $2M in annual sales. After implementing the 13-week forecast, he discovered he had a $45,000 cash shortfall coming in 7 weeks.
            </p>

            <p>
              Instead of panicking when the crisis hit, he took proactive action: negotiated better payment terms with suppliers, offered early payment discounts to clients, and arranged a temporary line of credit. Result? He sailed through the potential crisis and now sleeps better at night.
            </p>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">Your Action Steps</h2>
            
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Set up a simple 13-week cash flow forecast</li>
              <li>Update it weekly (every Friday)</li>
              <li>Identify your cash flow patterns</li>
              <li>Create contingency plans for shortfalls</li>
              <li>Celebrate positive cash flow weeks!</li>
            </ol>

            <p>
              Remember: Cash flow is the lifeblood of your business. Manage it well, and your business will thrive. Ignore it, and even profitable businesses can fail.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Help with Cash Flow Management?</h3>
            <p className="text-gray-700 mb-6">
              Project BETA includes comprehensive cash flow management training and tools. Let's discuss how we can help you gain control of your business finances.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}

export default CashFlowBlogPost

