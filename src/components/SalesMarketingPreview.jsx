import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, Target, TrendingUp, Users, MessageSquare, Megaphone, BarChart } from 'lucide-react'

const SalesMarketingPreview = () => {
  useEffect(() => {
    // Load GHL form script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <div className="mb-8">
          <Link to="/resources">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Sales & Marketing Strategy Template
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build a comprehensive sales and marketing system that consistently generates qualified leads and converts them into loyal customers. This template provides the framework used by successful trades and service businesses.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">What's Included:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Target Market Analysis</h3>
                    <p className="text-sm text-gray-600">Identify your ideal customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Lead Generation</h3>
                    <p className="text-sm text-gray-600">Multiple channels for consistent leads</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Sales Process</h3>
                    <p className="text-sm text-gray-600">Convert prospects into customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Customer Communication</h3>
                    <p className="text-sm text-gray-600">Build lasting relationships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Megaphone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Marketing Campaigns</h3>
                    <p className="text-sm text-gray-600">Proven promotional strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Performance Metrics</h3>
                    <p className="text-sm text-gray-600">Track and optimize results</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Perfect for Trades & Service Businesses</h3>
              <p className="text-gray-600 mb-4">
                This template is specifically designed for businesses like:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Electricians, Plumbers, HVAC contractors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Home improvement and renovation services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Professional services and consultants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Local service providers</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-3">Stop Competing on Price!</h3>
              <p className="text-red-700">
                This template shows you how to differentiate your business based on value, not price. Learn to attract customers who appreciate quality and are willing to pay for it.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  Get Your Free Template Now
                </h2>
                <p className="text-gray-600">
                  Download instantly + get a FREE 30-minute strategy session with Steven
                </p>
              </div>

              {/* GHL Form Integration */}
              <div className="ghl-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/hmIhFgV1z4hFqIww1tiw"
                  style={{
                    width: '100%',
                    height: '600px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  id="inline-hmIhFgV1z4hFqIww1tiw-salesmarketing"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WebsiteResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-hmIhFgV1z4hFqIww1tiw-salesmarketing"
                  data-form-id="hmIhFgV1z4hFqIww1tiw"
                  title="Sales & Marketing Strategy - Lead Capture"
                />
              </div>

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
