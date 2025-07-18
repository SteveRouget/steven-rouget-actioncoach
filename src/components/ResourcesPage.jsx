import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Download, HelpCircle } from 'lucide-react'

const ResourcesPage = () => {
  const faqs = [
    {
      question: 'What is ActionCOACH?',
      answer: 'ActionCOACH is the world's number one business coaching firm, founded in 1993 by Brad Sugars. They provide business coaching, mentoring, and training services to small and medium-sized businesses worldwide, focusing on helping owners achieve their goals in profit, time, and team development.'
    },
    {
      question: 'How is ActionCOACH different from a consultant?',
      answer: 'A consultant typically comes into your business, identifies problems, and provides solutions, then leaves. An ActionCOACH, on the other hand, works with you long-term, teaching you the strategies and tools to implement solutions yourself, holding you accountable, and empowering you to become a better business owner.'
    },
    {
      question: 'What is the 17-week guarantee?',
      answer: 'The ActionCOACH 7-point, 17-week guarantee means that if your business doesn't make back more on its bottom line in profit than what you've invested in coaching within 17 weeks, Steven will continue to coach you for FREE until it does. This demonstrates confidence in the proven ActionCOACH methodology.'
    },
    {
      question: 'Who is business coaching for?',
      answer: 'Business coaching is for any business owner who is serious about growth, wants to improve their profitability, build a stronger team, or gain more control over their time. It's for those who are open to learning, willing to implement new strategies, and committed to their success.'
    },
    {
      question: 'How long does a coaching program last?',
      answer: 'The duration of a coaching program varies depending on your goals and the program you choose. Many clients work with Steven for several years, continuously refining their strategies and achieving new levels of success. The 17-week guarantee provides an initial benchmark for results.'
    },
    {
      question: 'What results can I expect?',
      answer: 'Clients typically experience significant improvements in profitability, cash flow, team performance, and personal time. Specific results vary, but the focus is always on measurable outcomes that contribute directly to your business's success and your personal freedom.'
    },
    {
      question: 'How much does business coaching cost?',
      answer: 'The cost of coaching varies by program and level of engagement. Project BETA offers group coaching from $95/week, while 1-on-1 coaching programs range from $575/week to $1495/week. The investment is designed to be returned many times over through increased profits and efficiency.'
    },
    {
      question: 'What is the ActionCOACH 6 Ways to Grow a Business?',
      answer: 'The 6 Ways to Grow a Business is a core ActionCOACH methodology focusing on six key areas: Leads, Conversion Rate, Number of Transactions, Average Sale Price, Margins, and Frequency. By improving each of these areas, businesses can achieve exponential growth in profit.'
    },
    {
      question: 'Do I need to be in a specific industry?',
      answer: 'No, ActionCOACH methodologies are applicable across all industries. Steven specializes in trades and service businesses, but the principles of business growth and management are universal. He has successfully coached clients from a wide range of sectors.'
    },
    {
      question: 'How do I get started?',
      answer: 'The best way to get started is to book a free consultation with Steven. This no-obligation session allows you to discuss your business goals, challenges, and how coaching can help you achieve them. It's an opportunity to see if there's a good fit.'
    },
  ]

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8 text-center">Free Resources & FAQs</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Access valuable tools, guides, and answers to common questions to help you on your business journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Resource Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Valuable Downloads</h2>
            <p className="text-lg text-gray-700 mb-6">
              Download our free guides and tools designed to help you improve key areas of your business.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <Link to="/resources/6-ways-preview" className="text-blue-800 font-semibold hover:underline">The ActionCOACH 6 Ways to Grow Your Business (Preview & Download)</Link>
              </li>
              <li className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <Link to="/resources/time-mastery-preview" className="text-blue-800 font-semibold hover:underline">ActionCOACH Time Mastery System (Preview & Download)</Link>
              </li>
              <li className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <Link to="/resources/sales-marketing-preview" className="text-blue-800 font-semibold hover:underline">ActionCOACH Sales & Marketing System (Preview & Download)</Link>
              </li>
              <li className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-blue-500 flex-shrink-0" />
                <Link to="/resources/leadership-management-preview" className="text-blue-800 font-semibold hover:underline">Management vs Leadership: Why Both Are Essential (Preview & Download)</Link>
              </li>
            </ul>
          </div>

          {/* FAQs Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-red-700 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold text-blue-800 flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't hesitate to reach out. Steven is here to provide clarity and guidance.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Contact Steven
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ResourcesPage


