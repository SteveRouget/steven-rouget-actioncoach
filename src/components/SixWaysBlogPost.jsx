import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const SixWaysBlogPost = () => {
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
              The 6 Ways to Grow Your Business: A Deep Dive
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span>📅 June 20, 2025</span>
              <span className="mx-2">•</span>
              <span>👤 Steven Rouget</span>
            </div>
            <p className="text-xl text-gray-600 italic">
              Discover the fundamental strategies that ActionCOACH uses to help businesses achieve exponential growth.
            </p>
          </header>

          <div className="space-y-6 text-gray-700">
            <p>
              The ActionCOACH 6 Ways to Grow Your Business is the foundation of everything we do. In my 23 years of coaching, I've seen this simple framework transform struggling trades businesses into thriving enterprises.
            </p>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">The 6 Ways Explained</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">1. Leads</h3>
                <p>The number of potential customers who show interest in your business. For trades businesses, this includes phone calls, website inquiries, and referrals.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">2. Conversion Rate</h3>
                <p>The percentage of leads that become paying customers. A plumber might convert 40% of leads into jobs.</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">3. Number of Transactions</h3>
                <p>How often customers buy from you. An electrician might service the same customer 2.5 times per year.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">4. Average Sale Value</h3>
                <p>The average amount each customer spends per transaction. Focus on upselling and cross-selling.</p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">5. Margins</h3>
                <p>The percentage of each sale that becomes profit. Improve through better pricing and cost control.</p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">6. Frequency</h3>
                <p>How often customers return. Build relationships and systems to encourage repeat business.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">The Power of Small Improvements</h2>
            
            <p>
              Here's where the magic happens. If you improve each of the 6 ways by just 10%, your profits don't increase by 10% – they increase by 77%! Let me show you with a real example:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Example: Local Plumbing Business</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Before (Monthly):</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Leads: 100</li>
                    <li>Conversion Rate: 30%</li>
                    <li>Customers: 30</li>
                    <li>Transactions: 1.5</li>
                    <li>Average Sale: $400</li>
                    <li>Revenue: $18,000</li>
                    <li>Margin: 35%</li>
                    <li><strong>Profit: $6,300</strong></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">After 10% Improvement:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Leads: 110</li>
                    <li>Conversion Rate: 33%</li>
                    <li>Customers: 36</li>
                    <li>Transactions: 1.65</li>
                    <li>Average Sale: $440</li>
                    <li>Revenue: $26,136</li>
                    <li>Margin: 38.5%</li>
                    <li><strong>Profit: $10,062</strong></li>
                  </ul>
                </div>
              </div>
              
              <p className="text-center text-xl font-bold text-green-800 mt-4">
                Result: 60% increase in profit from 10% improvements!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">How Project BETA Helps</h2>
            
            <p>
              In Project BETA, we work systematically through each of the 6 ways. Whether you're at Cadet, Navigator, or Captain level, you'll learn specific strategies for your business type and size.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Cadet Level:</strong> Focus on leads and conversion rate basics</li>
              <li><strong>Navigator Level:</strong> Advanced strategies for all 6 ways</li>
              <li><strong>Captain Level:</strong> Sophisticated systems and team implementation</li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-800 mt-8 mb-4">Your Next Steps</h2>
            
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Calculate your current numbers for each of the 6 ways</li>
              <li>Identify which area has the biggest opportunity</li>
              <li>Focus on improving that area by 10%</li>
              <li>Measure the results</li>
              <li>Move to the next area</li>
            </ol>

            <p>
              Remember: Small, consistent improvements in each area create exponential growth in your profits.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Implement the 6 Ways?</h3>
            <p className="text-gray-700 mb-6">
              Join Project BETA and learn how to systematically improve each of the 6 ways in your business. Let's discuss which level is right for you.
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

export default SixWaysBlogPost

