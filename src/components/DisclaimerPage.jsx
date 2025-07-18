import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-600">
            Important information regarding the use of this website and the services provided by Steven Rouget ActionCOACH.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">General Disclaimer</h2>
          <p className="mb-6">
            The information contained in this website is for general information purposes only. The information is provided by Steven Rouget ActionCOACH and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Professional Advice Disclaimer</h2>
          <p className="mb-6">
            Any reliance you place on such information is therefore strictly at your own risk. The content on this website is not intended to be a substitute for professional business, financial, or legal advice. Always seek the advice of qualified professionals with any questions you may have regarding your business operations, financial decisions, or legal matters.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Results Disclaimer</h2>
          <p className="mb-6">
            While ActionCOACH has a proven track record of helping businesses grow, individual results may vary. The success stories and testimonials presented on this website represent individual experiences and are not guarantees of future results. Your success will depend on your commitment, effort, and implementation of the strategies provided.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">External Links Disclaimer</h2>
          <p className="mb-6">
            Through this website you may be able to link to other websites which are not under the control of Steven Rouget ActionCOACH. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Limitation of Liability</h2>
          <p className="mb-6">
            In no event will Steven Rouget ActionCOACH be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">ActionCOACH Franchise Disclaimer</h2>
          <p className="mb-6">
            Steven Rouget is an independent ActionCOACH franchise owner. While he operates under the ActionCOACH brand and methodology, his business is independently owned and operated. The views and opinions expressed on this website are those of Steven Rouget and do not necessarily reflect the official policy or position of ActionCOACH Global.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Information</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="font-semibold">Steven Rouget ActionCOACH</p>
            <p>Victoria, Australia</p>
            <p>Email: stevenrouget@actioncoach.com</p>
            <p>Phone: 0412 351 755</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerPage

