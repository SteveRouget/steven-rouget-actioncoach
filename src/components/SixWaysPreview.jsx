import React, { useState, useEffect } from 'react'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const SixWaysPreview = () => {
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    // Listen for form submission from GHL iframe
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'form_submitted') {
        setShowThankYou(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

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
                <p className="text-green-700">Your information has been submitted. Download your free guide below:</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/6-ways-to-grow-business-guide.pdf"
                download="6-Ways-to-Grow-Your-Business-Guide.pdf"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Your Free Guide (PDF)
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Preview */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              The 6 Ways to Grow Your Business
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Discover the proven ActionCOACH methodology that has helped thousands of business owners achieve breakthrough growth and profitability.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Increase Your Number of Leads</h3>
                    <p className="text-gray-600">Learn proven strategies to attract more qualified prospects to your business consistently.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Increase Your Conversion Rate</h3>
                    <p className="text-gray-600">Transform more prospects into paying customers with proven sales techniques.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Increase Your Average Dollar Sale</h3>
                    <p className="text-gray-600">Maximize the value of each transaction through strategic upselling and cross-selling.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Increase Your Number of Transactions</h3>
                    <p className="text-gray-600">Get customers to buy from you more frequently with effective retention strategies.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Increase Your Margins</h3>
                    <p className="text-gray-600">Improve profitability by optimizing your pricing and reducing unnecessary costs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduce Your Costs</h3>
                    <p className="text-gray-600">Streamline operations and eliminate waste to boost your bottom line.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-actioncoach-blue mb-3">Why This Works</h3>
                <p className="text-gray-700">
                  This isn't theory - it's the exact methodology used by ActionCOACH, the world's #1 business coaching company, 
                  to help over 15,000 clients achieve measurable results. When you focus on these 6 areas systematically, 
                  you create exponential growth in your business.
                </p>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Guide
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your details below to download "The 6 Ways to Grow Your Business" guide and start implementing these proven strategies today.
              </p>

              <div className="ghl-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/Cq2i1UETBNDEhLq9xg2Q"
                  style={{width:'100%', height:'600px', border:'none', borderRadius:'3px'}}
                  id="inline-Cq2i1UETBNDEhLq9xg2Q" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="SixWaysResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-Cq2i1UETBNDEhLq9xg2Q"
                  data-form-id="Cq2i1UETBNDEhLq9xg2Q"
                  title="SixWaysResourceInfo"
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

export default SixWaysPreview
