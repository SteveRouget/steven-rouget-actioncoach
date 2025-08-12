import React, { useState } from 'react'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeadershipManagementPreview = () => {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleFormSubmit = () => {
    // Show thank you message and download link
    setShowThankYou(true)
    // Scroll to top to show the message
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container-max py-4">
          <Link to="/resources" className="inline-flex items-center text-actioncoach-blue hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
        </div>
      </div>

      <div className="container-max section-padding">
        {/* Thank You Message */}
        {showThankYou && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Thank You!</h3>
                <p className="text-green-700">Your information has been submitted. Download your free framework below:</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/leadership-management-framework.pdf"
                download="Leadership-Management-Framework.pdf"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Your Free Framework (PDF)
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Preview */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Leadership & Management Framework
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Transform from a manager who controls everything to a leader who multiplies results through others. Build high-performance teams that drive your business forward.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Master:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    👑
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Leadership Mindset Shift</h3>
                    <p className="text-gray-600">Transform from controlling manager to empowering leader who multiplies impact.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Building Your Dream Team</h3>
                    <p className="text-gray-600">Proven hiring strategies to find the right people for the right seats.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Communication That Inspires</h3>
                    <p className="text-gray-600">Master the art of clear communication that motivates and drives results.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    📊
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance Management Systems</h3>
                    <p className="text-gray-600">Set clear expectations and manage performance for consistent results.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    🚀
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Delegation & Empowerment</h3>
                    <p className="text-gray-600">Free up your time by effectively delegating tasks and developing others.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    🏆
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Creating a Winning Culture</h3>
                    <p className="text-gray-600">Build a culture that attracts top talent and drives exceptional performance.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-actioncoach-blue mb-3">From Manager to Leader</h3>
                <p className="text-gray-700">
                  Most business owners are great at their trade but struggle with leading people. This framework 
                  provides the exact tools and strategies to transition from working IN your business to working 
                  ON your business through effective leadership.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Practical Tools Included:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Team meeting agenda templates</li>
                  <li>• One-on-one meeting frameworks</li>
                  <li>• Performance review templates</li>
                  <li>• Delegation checklists</li>
                  <li>• Interview question banks</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-gray-900 mb-2">⚡ Leadership Multiplier Effect:</h4>
                <p className="text-gray-700">
                  Great leaders don't just get things done - they multiply their impact through others. 
                  Move from 1x (doing everything yourself) to 10x (developing others who develop others).
                </p>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Framework
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your details below to download the "Leadership & Management Framework" and start building your high-performance team today.
              </p>

              <div className="ghl-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/lXdBGB1swNGo2atooDjA"
                  style={{width:'100%', height:'600px', border:'none', borderRadius:'3px'}}
                  id="inline-lXdBGB1swNGo2atooDjA" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="LeadershipResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-lXdBGB1swNGo2atooDjA"
                  data-form-id="lXdBGB1swNGo2atooDjA"
                  title="LeadershipResourceInfo"
                />
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>🔒 Your information is secure and will never be shared.</p>
                <p>📧 You'll also receive valuable business tips via email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  )
}

export default LeadershipManagementPreview
