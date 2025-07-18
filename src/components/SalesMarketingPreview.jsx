import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, CheckCircle, Mail, Phone, User, Building, TrendingUp } from 'lucide-react'

const SalesMarketingPreview = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    businessName: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Your PDF guide will be sent to your email shortly.')
  }

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <Link to="/resources" className="inline-flex items-center text-blue-800 hover:text-blue-600 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Preview Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                ActionCOACH Sales & Marketing System
              </h1>
              <p className="text-lg text-gray-600">
                Transform your sales and marketing with proven ActionCOACH strategies that generate consistent leads and convert them into loyal customers.
              </p>
            </div>

            {/* Sample Page 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Sample Page 1: The Sales & Marketing Funnel</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Most trades and service businesses struggle with inconsistent lead flow and poor conversion rates. The ActionCOACH Sales & Marketing System provides a systematic approach to attract, convert, and retain customers.
                </p>
                <p className="font-semibold">The Five-Stage Marketing Funnel:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Attract:</strong> Generate qualified leads through targeted marketing</li>
                  <li><strong>Capture:</strong> Convert visitors into leads with compelling offers</li>
                  <li><strong>Nurture:</strong> Build relationships through valuable content and follow-up</li>
                  <li><strong>Convert:</strong> Turn prospects into paying customers</li>
                  <li><strong>Retain:</strong> Keep customers coming back and referring others</li>
                </ul>
                <p>
                  This systematic approach ensures no leads fall through the cracks and maximizes the return on your marketing investment.
                </p>
              </div>
            </div>

            {/* Sample Page 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Sample Page 2: The 3:1 Marketing Rule</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">For every $1 you spend on marketing, you should generate at least $3 in profit.</p>
                <p>
                  This rule helps you evaluate the effectiveness of your marketing efforts and ensures you're investing in profitable channels. Most trades businesses don't track this metric, leading to wasted marketing spend.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">Example: Plumbing Business</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Monthly marketing spend: $1,000</li>
                    <li>New customers acquired: 8</li>
                    <li>Average customer lifetime value: $2,500</li>
                    <li>Total customer value: $20,000</li>
                    <li>Marketing ROI: 20:1 (Excellent!)</li>
                  </ul>
                </div>
                <p className="italic">
                  The complete guide includes detailed tracking templates and ROI calculators to help you measure and optimize your marketing performance...
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Complete Guide Includes:</p>
              <p className="text-gray-700">
                30+ pages of marketing strategies, sales scripts, conversion templates, and step-by-step implementation guides specifically designed for trades and service businesses.
              </p>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Get the Complete Guide</h2>
                <p className="text-gray-600">
                  Enter your details below to receive the full ActionCOACH Sales & Marketing System PDF instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your business name (optional)"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full btn-primary text-lg py-3">
                  <Download className="mr-2 h-5 w-5" />
                  Get Free PDF Guide Now
                </Button>
              </form>

              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Instant delivery to your email</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Personal follow-up from Steven within 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-blue-800 mb-2">About Steven Rouget</h3>
                <p className="text-sm text-gray-600">
                  23 years of ActionCOACH experience helping trades and service businesses in Victoria achieve more control, more profit, and more free time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesMarketingPreview

