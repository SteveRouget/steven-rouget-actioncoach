import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, CheckCircle, Mail, Phone, User, Building, Clock } from 'lucide-react'

const TimeMasteryPreview = () => {
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
                ActionCOACH Time Mastery System
              </h1>
              <p className="text-lg text-gray-600">
                Master your time and reclaim your life with proven strategies from ActionCOACH.
              </p>
            </div>

            {/* Sample Page 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Sample Page 1: The Time Trap</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Most business owners find themselves trapped in their business, working longer hours but achieving less. The ActionCOACH Time Mastery System breaks this cycle by teaching you to work ON your business, not just IN it.
                </p>
                <p className="font-semibold">The Four Pillars of Time Mastery:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Priority Management:</strong> Focus on what truly matters for business growth</li>
                  <li><strong>Delegation Systems:</strong> Build a team that can operate without constant supervision</li>
                  <li><strong>Process Automation:</strong> Systemize repetitive tasks to free up your time</li>
                  <li><strong>Strategic Planning:</strong> Plan your time around high-impact activities</li>
                </ul>
                <p>
                  This system has helped thousands of business owners reduce their working hours by 30-50% while increasing their business profits.
                </p>
              </div>
            </div>

            {/* Sample Page 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Sample Page 2: The $1000/Hour Test</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">Ask yourself: "Is what I'm doing right now worth $1000/hour?"</p>
                <p>
                  If the answer is no, you need to delegate, eliminate, or systematize that task. This simple test helps you identify activities that are keeping you busy but not making you money.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-2">High-Value Activities ($1000/hour+):</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Strategic planning and business development</li>
                    <li>Building key client relationships</li>
                    <li>Creating systems and processes</li>
                    <li>Training and developing your team</li>
                  </ul>
                </div>
                <p className="italic">
                  The complete guide includes detailed worksheets to help you categorize all your activities and create an action plan to eliminate time-wasters...
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Complete Guide Includes:</p>
              <p className="text-gray-700">
                20+ pages of time management strategies, delegation templates, productivity worksheets, and real-world case studies from successful business owners.
              </p>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Get the Complete Guide</h2>
                <p className="text-gray-600">
                  Enter your details below to receive the full ActionCOACH Time Mastery System PDF instantly.
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

export default TimeMasteryPreview

