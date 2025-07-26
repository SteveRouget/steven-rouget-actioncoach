import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, Users, Target, Award, MessageCircle, TrendingUp, Shield } from 'lucide-react'

const LeadershipManagementPreview = () => {
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
                Leadership & Management Framework
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform from business owner to true leader. This comprehensive framework provides the tools and strategies to build a high-performing team that delivers exceptional results while you focus on strategic growth.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Leadership Essentials:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Team Building</h3>
                    <p className="text-sm text-gray-600">Recruit and retain top talent</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Goal Setting</h3>
                    <p className="text-sm text-gray-600">Create clear objectives and accountability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Performance Management</h3>
                    <p className="text-sm text-gray-600">Motivate and develop your team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Communication</h3>
                    <p className="text-sm text-gray-600">Build trust and transparency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Culture Development</h3>
                    <p className="text-sm text-gray-600">Create a winning environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-800">Delegation</h3>
                    <p className="text-sm text-gray-600">Empower others to take ownership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-3">From Manager to Leader</h3>
              <p className="text-gray-600 mb-4">
                Most business owners are great at their trade but struggle with leadership. This framework helps you:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Develop leadership skills that inspire others</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Create systems that ensure consistency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Build a team that works without constant supervision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Scale your business through people, not just processes</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-3">The Leadership Multiplier Effect</h3>
              <p className="text-green-700">
                Great leaders don't just manage people - they multiply their capabilities. Learn how to get 10x results by developing others instead of doing everything yourself.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                  Get Your Free Framework Now
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
                  id="inline-hmIhFgV1z4hFqIww1tiw-leadership"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="WebsiteResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-hmIhFgV1z4hFqIww1tiw-leadership"
                  data-form-id="hmIhFgV1z4hFqIww1tiw"
                  title="Leadership & Management Framework - Lead Capture"
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

export default LeadershipManagementPreview
