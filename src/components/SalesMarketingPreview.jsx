import React, { useState } from 'react'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const SalesMarketingPreview = () => {
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
                <p className="text-green-700">Your information has been submitted. Download your free template below:</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/marketing-strategy-template-trades.pdf"
                download="Marketing-Strategy-Template-for-Trades.pdf"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Your Free Template (PDF)
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Preview */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Sales & Marketing Strategy Template for Trades
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                A comprehensive marketing strategy template specifically designed for trades and service businesses to attract more customers and increase revenue.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Get:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    📋
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Complete Marketing Plan Template</h3>
                    <p className="text-gray-600">Step-by-step framework to create your 12-month marketing strategy.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    🎯
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Target Market Analysis Worksheet</h3>
                    <p className="text-gray-600">Identify and understand your ideal customers for maximum impact.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    💰
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pricing Strategy Guide</h3>
                    <p className="text-gray-600">Set profitable prices that customers are happy to pay.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    📱
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Marketing Checklist</h3>
                    <p className="text-gray-600">Essential online marketing tactics that work for trades businesses.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    🤝
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Referral System Template</h3>
                    <p className="text-gray-600">Turn satisfied customers into your best marketing asset.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    📊
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing Budget Calculator</h3>
                    <p className="text-gray-600">Allocate your marketing spend for maximum return on investment.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-actioncoach-blue mb-3">Designed for Trades Businesses</h3>
                <p className="text-gray-700">
                  This template is specifically created for electricians, plumbers, builders, mechanics, and other trades 
                  professionals. It includes industry-specific strategies that work in the real world, not generic 
                  marketing advice that doesn't apply to your business.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-gray-900 mb-2">💡 Proven Results:</h4>
                <p className="text-gray-700">
                  Trades businesses using this template have seen 30-50% increases in leads within 90 days, 
                  with many doubling their revenue within 12 months.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-gray-900 mb-2">⚡ Quick Implementation:</h4>
                <p className="text-gray-700">
                  The template is designed to be implemented immediately. You can have your marketing strategy 
                  up and running within one week of downloading.
                </p>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Template
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your details below to download the "Sales & Marketing Strategy Template for Trades" and start growing your business today.
              </p>

              <div className="ghl-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/hmIhFgV1z4hFqIww1tiw"
                  style={{width:'100%', height:'600px', border:'none', borderRadius:'3px'}}
                  id="inline-hmIhFgV1z4hFqIww1tiw" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WebsiteResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-hmIhFgV1z4hFqIww1tiw"
                  data-form-id="hmIhFgV1z4hFqIww1tiw"
                  title="WebsiteResourceInfo"
                  onLoad={() => {
                    // Add hidden field value for tracking
                    const iframe = document.getElementById('inline-hmIhFgV1z4hFqIww1tiw');
                    if (iframe) {
                      iframe.contentWindow.postMessage({
                        type: 'setHiddenField',
                        field: 'resource_requested',
                        value: 'sales-marketing'
                      }, '*');
                    }
                  }}
                />
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleFormSubmit}
                  className="text-sm text-actioncoach-blue hover:text-blue-700 underline"
                >
                  Click here after submitting the form above to download your template
                </button>
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

export default SalesMarketingPreview
