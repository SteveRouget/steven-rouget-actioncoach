import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, Clock, Target, Calendar, Zap, Focus, BarChart3 } from 'lucide-react'

const TimeMasteryPreview = () => {
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
                Time Mastery & Productivity Checklist
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your relationship with time and dramatically increase your productivity. This comprehensive checklist provides proven strategies to help busy business owners reclaim their time and focus on what truly matters.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">What You'll Master:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Time Auditing</h3>
                    <p className="text-sm text-gray-600">Identify where your time really goes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Priority Matrix</h3>
                    <p className="text-sm text-gray-600">Focus on high-impact activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Time Blocking</h3>
                    <p className="text-sm text-gray-600">Structure your day for maximum efficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Energy Management</h3>
                    <p className="text-sm text-gray-600">Work with your natural rhythms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Focus className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Distraction Control</h3>
                    <p className="text-sm text-gray-600">Eliminate productivity killers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Performance Tracking</h3>
                    <p className="text-sm text-gray-600">Measure and improve your efficiency</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">The Business Owner's Dilemma</h3>
              <p className="text-gray-600 mb-4">
                Most business owners work IN their business instead of ON it. This checklist helps you:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Delegate effectively without losing control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Create systems that run without you</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Focus on strategic growth activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Achieve better work-life balance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  Get Your Free Checklist Now
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
                  id="inline-hmIhFgV1z4hFqIww1tiw-timemastery"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WebsiteResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-hmIhFgV1z4hFqIww1tiw-timemastery"
                  data-form-id="hmIhFgV1z4hFqIww1tiw"
                  title="Time Mastery & Productivity - Lead Capture"
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

export default TimeMasteryPreview
