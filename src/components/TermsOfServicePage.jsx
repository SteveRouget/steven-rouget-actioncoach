import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TermsOfServicePage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Terms of Service Agreement</h1>
          <p className="text-lg text-gray-600">
            By using this web site, you are agreeing to comply and be bound by the following terms of service and use. Please review the following terms in their entirety and ensure their comprehension before using and viewing this web site.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The terms "us", "we", "our", or "owners" refers to "ActionCOACH" and administrative operators of this web site. "You" refers to the user or viewer of this web site.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Copyright</h2>
          <p className="mb-6">
            The content in its entirety, including text content, graphics, layouts, and all source code, belong to the owners of the web site. This term is protected by intellectual property rights and copyright law. Copying, redistribution, use or publication either for free or for monetary gain is strictly prohibited. Some of the content on the site is the copyrighted and licensed work of third parties.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Terms of Use</h2>
          
          <div className="space-y-4">
            <div>
              <span className="font-semibold">1.</span> The content of this web site in its entirety is subject to change without notice. Its purpose is for your general information only.
            </div>
            
            <div>
              <span className="font-semibold">2.</span> No parties guarantee the accuracy, timeliness, performance, completeness, or suitability of the content and information found on this site. You acknowledge that errors or inaccuracies may exist, and that the owners of the site are in no way liable for any such errors.
            </div>
            
            <div>
              <span className="font-semibold">3.</span> The owners of the site are not responsible and hold no liability for third-party content that may be posted on the site by end users, or for content that is linked to from this web site including other web sites.
            </div>
            
            <div>
              <span className="font-semibold">4.</span> The use of and viewing of information on this site is at your own risk. Any consequences of use that may occur are not the liability of the web site owners.
            </div>
            
            <div>
              <span className="font-semibold">5.</span> Unauthorized use of this web site or its contents may give rise to a claim for damages and/or be a criminal offense enforceable by local and international law.
            </div>
            
            <div>
              <span className="font-semibold">6.</span> We reserve the right to restrict access to certain areas of the web site at our own discretion. If a username and password, or any other access credentials, are provided to you as the end user, it is your responsibility to keep such information confidential.
            </div>
            
            <div>
              <span className="font-semibold">7.</span> The owners of the web site are not responsible for user-generated content, and no liable for any violations that such content may constitute.
            </div>
            
            <div className="mb-8">
              <span className="font-semibold">8.</span> By using our website you agree that we can place cookies on your device.
            </div>
          </div>

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

export default TermsOfServicePage

