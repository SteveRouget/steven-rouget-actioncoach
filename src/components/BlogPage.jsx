import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const BlogPage = () => {
  // Placeholder for blog posts. In a real application, this would come from a CMS or API.
  const blogPosts = [
    {
      id: 1,
      title: 'Buying Customers: Brad Sugars\' Revolutionary Approach to Marketing ROI',
      date: 'June 25, 2025',
      excerpt: 'Learn how Brad Sugars\' "Buying Customers" concept can transform your marketing from an expense into a profitable investment. Discover the 3:1 rule and real-world examples.',
      link: '/blog/buying-customers-brad-sugars-strategy'
    },
    {
      id: 2,
      title: 'Sales are Vanity, Profit is Sanity, but Cash Flow is the Real Lifeblood of Business',
      date: 'June 22, 2025',
      excerpt: 'Discover why cash flow management is more critical than sales figures for trades and service businesses. Learn the 13-week forecast system and real success stories.',
      link: '/blog/cash-flow-lifeblood-business'
    },
    {
      id: 3,
      title: 'The 6 Ways to Grow Your Business: A Deep Dive',
      date: 'June 20, 2025',
      excerpt: 'Discover the fundamental strategies that ActionCOACH uses to help businesses achieve exponential growth. From increasing leads to boosting profit margins, these six key areas are crucial for any business owner.',
      link: '/blog/6-ways-grow-business-deep-dive'
    },
    {
      id: 4,
      title: 'Success in Business Leaves Clues: You Just Need to Notice Them! Test & Measure',
      date: 'June 18, 2025',
      excerpt: 'Learn how to identify success patterns in your business and use testing and measurement to replicate and scale your wins. Real examples from trades businesses.',
      link: '/blog/success-leaves-clues-test-measure'
    },
    {
      id: 5,
      title: 'From Tradesman to Business Owner: Making the Leap',
      date: 'June 15, 2025',
      excerpt: 'Many trades and service professionals excel at their craft but struggle with the business side. Learn how to shift your mindset and implement systems to build a business that works for you.',
      link: '/blog/tradesman-to-business-owner'
    },
    {
      id: 6,
      title: 'Time Mastery for Busy Entrepreneurs',
      date: 'June 10, 2025',
      excerpt: 'Feeling overwhelmed? This post shares practical tips and ActionCOACH strategies to help you manage your time effectively, prioritize tasks, and reclaim your personal life while growing your business.',
      link: '/blog/time-mastery-busy-entrepreneurs'
    },
  ]

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8 text-center">Our Blog</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Insights, strategies, and tips for trades and service business owners in Victoria, Australia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link to={post.link} className="text-red-700 font-semibold flex items-center">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Want More Business Insights?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest articles, tips, and exclusive offers directly to your inbox.
          </p>
          {/* Placeholder for newsletter signup form */}
          <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-3 rounded-md border border-gray-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" className="btn-primary">
              Subscribe
            </Button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default BlogPage


