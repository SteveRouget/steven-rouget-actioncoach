import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, CheckCircle, Mail, Phone, User, Building, Users } from 'lucide-react'

const LeadershipManagementPreview = () => {
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
                Management vs Leadership: Why Both Are Essential
              </h1>
              <p className="text-lg text-gray-600">
                Discover the critical differences between management and leadership, and why successful business owners need to master both skills.
              </p>
            </div>

            {/* Sample Page 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Sample Page 1: The Critical Distinction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Many business owners confuse management with leadership, but they are fundamentally different skills. Understanding this distinction is crucial for building a successful, scalable business.
                </p>
                <p className="font-semibold">Management vs Leadership:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Management</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Focuses on processes and systems</li>
                      <li>Maintains the status quo</li>
                      <li>Controls and monitors</li>
                      <li>Asks "How?" and "When?"</li>
                      <li>Works within existing structures</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Leadership</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Focuses on people and vision</li>
                      <li>Drives change and innovation</li>
                      <li>Inspires and motivates</li>
                      <li>Asks "What?" and "Why?"</li>
                      <li>Creates new possibilities</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Both skills are essential. Management without leadership leads to stagnation. Leadership without management leads to chaos.
                </p>
              </div>
            </div>

            {/* Sample Page 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Sample Page 2: The Business Owner's Challenge</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold">Most trades business owners are excellent technicians but struggle with management and leadership.</p>
                <p>
                  You started your business because you're great at your trade - plumbing, electrical, building, etc. But running a business requires different skills: managing people, processes, and profits while leading your team toward a shared vision.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="font-semibold text-yellow-800 mb-2">The E-Myth Trap:</p>
                  <p className="text-sm">
                    "Most people who start small businesses are not entrepreneurs at all, they are technicians suffering from an entrepreneurial seizure." - Michael Gerber
                  </p>
                </div>
                <p className="italic">
                  The complete guide provides a step-by-step framework to develop both your management and leadership skills, with practical exercises and real-world examples...
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-semibold text-blue-800 mb-2">Complete Guide Includes:</p>
              <p className="text-gray-700">
                22+ pages of leadership development strategies, management frameworks, team building exercises, and practical tools to transform you from technician to true business leader.
              </p>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-800 mb-2">Get the Complete Guide</h2>
                <p className="text-gray-600">
                  Enter your details below to receive the full Management vs Leadership guide PDF instantly.
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

export default LeadershipManagementPreview

