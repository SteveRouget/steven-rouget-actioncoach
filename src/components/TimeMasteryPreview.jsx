import React, { useState, useEffect } from 'react'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const TimeMasteryPreview = () => {
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
                <p className="text-green-700">Your information has been submitted. Download your free checklist below:</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/time-management-productivity-checklist.pdf"
                download="Time-Management-Productivity-Checklist.pdf"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Your Free Checklist (PDF)
              </a>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Preview */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Time Mastery & Productivity Checklist
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Master your time and skyrocket your productivity with this comprehensive checklist used by successful business owners worldwide.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Inside:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Time Audit Worksheet</h3>
                    <p className="text-gray-600">Discover exactly where your time goes with our detailed tracking system.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Priority Matrix Template</h3>
                    <p className="text-gray-600">Learn to distinguish between urgent and important tasks for maximum impact.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Daily Planning System</h3>
                    <p className="text-gray-600">A proven framework for planning your day to achieve maximum productivity.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Delegation Framework</h3>
                    <p className="text-gray-600">Step-by-step process to effectively delegate tasks and free up your time.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Energy Management Guide</h3>
                    <p className="text-gray-600">Optimize your energy levels throughout the day for peak performance.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-actioncoach-blue text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Technology Tools List</h3>
                    <p className="text-gray-600">Recommended apps and tools to automate and streamline your workflow.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-actioncoach-blue mb-3">Transform Your Productivity</h3>
                <p className="text-gray-700">
                  This isn't just another productivity guide. It's a comprehensive system that addresses the root causes 
                  of time management issues that plague most business owners. Implement these strategies and reclaim 
                  10-15 hours per week to focus on growing your business.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-6">
                <h4 className="font-bold text-gray-900 mb-2">⚡ Quick Win:</h4>
                <p className="text-gray-700">
                  Just implementing the Daily Planning System alone has helped business owners save 2-3 hours per day 
                  while accomplishing more meaningful work.
                </p>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Checklist
              </h2>
              <p className="text-gray-600 mb-6">
                Enter your details below to download the "Time Mastery & Productivity Checklist" and start reclaiming your time today.
              </p>

              <div className="ghl-form-container">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/Svr4fcKzGJpQfpIwFJ2u"
                  style={{width:'100%', height:'600px', border:'none', borderRadius:'3px'}}
                  id="inline-Svr4fcKzGJpQfpIwFJ2u" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="TimeManagementResourceInfo"
                  data-height="600"
                  data-layout-iframe-id="inline-Svr4fcKzGJpQfpIwFJ2u"
                  data-form-id="Svr4fcKzGJpQfpIwFJ2u"
                  title="TimeManagementResourceInfo"
                />
              </div>

              {/* Direct download after form submission */}
              <div id="download-section" className="mt-6 text-center" style={{display: 'none'}}>
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-bold text-green-800 mb-2">✅ Thank You!</h3>
                  <p className="text-green-700 mb-4">Your information has been submitted successfully.</p>
                  <a
                    href="/time-management-productivity-checklist.pdf"
                    download="Time-Management-Productivity-Checklist.pdf"
                    className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-lg"
                    onClick={() => {
                      // Track download
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'download', {
                          'event_category': 'Resource',
                          'event_label': 'Time Management Checklist'
                        });
                      }
                    }}
                  >
                    <Download className="h-6 w-6 mr-3" />
                    Download Your Free Checklist (PDF)
                  </a>
                </div>
              </div>

              {/* Form submission detection script */}
              <script dangerouslySetInnerHTML={{
                __html: `
                  // Monitor for form submission completion
                  let formSubmitted = false;
                  let checkCount = 0;
                  
                  function checkFormSubmission() {
                    const iframe = document.getElementById('inline-Svr4fcKzGJpQfpIwFJ2u');
                    if (iframe && !formSubmitted) {
                      checkCount++;
                      
                      try {
                        // Try to access iframe content (may fail due to CORS)
                        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                        if (iframeDoc) {
                          const bodyText = iframeDoc.body.innerText || iframeDoc.body.textContent || '';
                          // Check for various success message variations
                          if (bodyText.includes('Thank you for taking the time to complete this form') ||
                              bodyText.includes('Thank you') ||
                              bodyText.includes('Click the Link below to download')) {
                            console.log('Form submission detected via iframe content');
                            showDownloadSection();
                            return;
                          }
                        }
                      } catch(e) {
                        // CORS restriction - use alternative detection methods
                        console.log('CORS restriction, using alternative detection');
                      }
                      
                      // Alternative detection: Check for URL changes in iframe
                      try {
                        const iframeSrc = iframe.src || iframe.contentWindow.location.href;
                        if (iframeSrc && iframeSrc.includes('success') || iframeSrc.includes('thank')) {
                          console.log('Form submission detected via URL change');
                          showDownloadSection();
                          return;
                        }
                      } catch(e) {
                        // URL access also restricted
                      }
                      
                      // Height change detection as final fallback
                      const currentHeight = iframe.offsetHeight;
                      if (currentHeight > 0 && iframe.dataset.originalHeight) {
                        const heightDiff = Math.abs(currentHeight - parseInt(iframe.dataset.originalHeight));
                        if (heightDiff > 30) {
                          console.log('Form submission detected via height change:', heightDiff);
                          setTimeout(showDownloadSection, 1500);
                          return;
                        }
                      }
                      
                      // Force show after 30 checks (60 seconds) as ultimate fallback
                      if (checkCount > 30) {
                        console.log('Timeout reached, showing download section');
                        showDownloadSection();
                      }
                    }
                  }
                  
                  function showDownloadSection() {
                    if (!formSubmitted) {
                      formSubmitted = true;
                      const downloadSection = document.getElementById('download-section');
                      if (downloadSection) {
                        downloadSection.style.display = 'block';
                        downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }
                  }
                  
                  // Store original iframe height for comparison
                  setTimeout(() => {
                    const iframe = document.getElementById('inline-Svr4fcKzGJpQfpIwFJ2u');
                    if (iframe) {
                      iframe.dataset.originalHeight = iframe.offsetHeight;
                      console.log('Original iframe height stored:', iframe.offsetHeight);
                    }
                  }, 2000);
                  
                  // Check every 2 seconds for form submission
                  const checkInterval = setInterval(checkFormSubmission, 2000);
                  
                  // Listen for custom events from GHL form
                  window.addEventListener('message', function(event) {
                    if (event.data && event.data.type === 'form_submitted') {
                      console.log('Form submitted via message event');
                      showDownloadSection();
                    }
                  });
                  
                  // Manual trigger function for testing
                  window.triggerDownload = function() {
                    console.log('Manual download trigger activated');
                    showDownloadSection();
                  };
                `
              }} />

              {/* Manual fallback button for immediate access */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => {
                    const downloadSection = document.getElementById('download-section');
                    if (downloadSection) {
                      downloadSection.style.display = 'block';
                      downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Show Download (Manual Trigger)
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

export default TimeMasteryPreview
