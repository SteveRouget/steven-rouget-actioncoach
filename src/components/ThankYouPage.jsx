import React, { useEffect } from 'react'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

const ThankYouPage = () => {
  const [searchParams] = useSearchParams()
  const resource = searchParams.get('resource') || 'time-mastery'
  
  // Resource configuration
  const resources = {
    'time-mastery': {
      title: 'Time Mastery & Productivity Checklist',
      filename: 'time-management-productivity-checklist.pdf',
      downloadName: 'Time-Management-Productivity-Checklist.pdf',
      description: 'Your comprehensive time management checklist is ready for download.',
      color: 'blue'
    },
    'sales-marketing': {
      title: 'Sales & Marketing Strategy Template',
      filename: 'marketing-strategy-template-trades.pdf',
      downloadName: 'Marketing-Strategy-Template-for-Trades.pdf',
      description: 'Your marketing strategy template for trades businesses is ready.',
      color: 'green'
    },
    '6-ways': {
      title: '6 Ways to Grow Your Business Guide',
      filename: '6-ways-to-grow-business-guide.pdf',
      downloadName: '6-Ways-to-Grow-Business-Guide.pdf',
      description: 'Your business growth guide is ready for download.',
      color: 'purple'
    },
    'leadership': {
      title: 'Leadership & Management Framework',
      filename: 'leadership-management-framework.pdf',
      downloadName: 'Leadership-Management-Framework.pdf',
      description: 'Your leadership framework is ready for download.',
      color: 'red'
    }
  }

  const currentResource = resources[resource]

  // Auto-download after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement('a')
      link.href = `/${currentResource.filename}`
      link.download = currentResource.downloadName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Track download
      if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
          'event_category': 'Resource',
          'event_label': currentResource.title
        });
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentResource])

  const handleManualDownload = () => {
    const link = document.createElement('a')
    link.href = `/${currentResource.filename}`
    link.download = currentResource.downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Track manual download
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        'event_category': 'Resource',
        'event_label': `${currentResource.title} - Manual`
      });
    }
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
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600">
              Your information has been submitted successfully.
            </p>
          </div>

          {/* Download Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentResource.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {currentResource.description}
            </p>

            {/* Auto-download countdown */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 font-medium">
                🚀 Your download will start automatically in 3 seconds...
              </p>
            </div>

            {/* Manual download button */}
            <button
              onClick={handleManualDownload}
              className="inline-flex items-center bg-actioncoach-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg shadow-lg"
            >
              <Download className="h-6 w-6 mr-3" />
              Download Now (PDF)
            </button>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What's Next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-actioncoach-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  1
                </div>
                <p className="text-gray-700">
                  <strong>Check your email</strong> - You'll receive valuable business tips and strategies
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-actioncoach-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  2
                </div>
                <p className="text-gray-700">
                  <strong>Implement the strategies</strong> - Start applying what you learn immediately
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-actioncoach-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  3
                </div>
                <p className="text-gray-700">
                  <strong>Book a free consultation</strong> - Get personalized advice for your business
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/book-consultation"
                className="inline-flex items-center bg-actioncoach-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              More Free Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(resources)
                .filter(([key]) => key !== resource)
                .slice(0, 2)
                .map(([key, res]) => (
                  <Link
                    key={key}
                    to={`/resources/${key}-preview`}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {res.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Download this free resource →
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage

