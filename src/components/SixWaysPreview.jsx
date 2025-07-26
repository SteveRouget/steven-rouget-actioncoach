import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, Users, TrendingUp, Target, DollarSign, BarChart, Repeat } from 'lucide-react'

const SixWaysPreview = () => {
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
                The 6 Ways to Grow Your Business
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the proven ActionCOACH methodology that has helped thousands of businesses achieve exponential growth. This comprehensive guide reveals the six key areas that, when optimized, can dramatically increase your profit.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">What You'll Learn:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">1. Leads</h3>
                    <p className="text-sm text-gray-600">Attract more qualified prospects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">2. Conversion Rate</h3>
                    <p className="text-sm text-gray-600">Turn more prospects into customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">3. Transactions</h3>
                    <p className="text-sm text-gray-600">Increase purchase frequency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">4. Average Sale</h3>
                    <p className="text-sm text-gray-600">Boost your average transaction value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">5. Margins</h3>
                    <p className="text-sm text-gray-600">Improve your profit margins</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Repeat className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">6. Frequency</h3>
                    <p className="text-sm text-gray-600">Encourage repeat business</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Why This Works</h3>
              <p className="text-gray-600 mb-4">
                The beauty of the 6 Ways methodology is that small improvements in each area compound to create massive growth. For example:
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong>Just a 10% improvement in each area results in a 77% increase in profit!</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  Get Your Free Guide Now
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
                  id="inline-hmIhFgV1z4hFqIww1tiw-6ways"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WebsiteResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-hmIhFgV1z4hFqIww1tiw-6ways"
                  data-form-id="hmIhFgV1z4hFqIww1tiw"
                  title="6 Ways to Grow Your Business - Lead Capture"
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

export default SixWaysPreview
