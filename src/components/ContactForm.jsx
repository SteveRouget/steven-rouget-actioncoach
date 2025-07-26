import React, { useEffect } from 'react'

const ContactForm = () => {
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
    <div className="bg-white p-8 rounded-lg shadow-lg border">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          Schedule Your Free Consultation
        </h2>
        <p className="text-gray-600">
          Get personalized advice for your business growth challenges
        </p>
      </div>

      {/* GHL Form Integration for Consultation Booking */}
      <div className="ghl-form-container">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/hmIhFgV1z4hFqIww1tiw"
          style={{
            width: '100%',
            height: '700px',
            border: 'none',
            borderRadius: '8px'
          }}
          id="inline-hmIhFgV1z4hFqIww1tiw-consultation"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="WebsiteResourceInfo"
          data-height="700"
          data-layout-iframe-id="inline-hmIhFgV1z4hFqIww1tiw-consultation"
          data-form-id="hmIhFgV1z4hFqIww1tiw"
          title="Free Consultation Booking - Lead Capture"
        />
      </div>

      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <span className="h-4 w-4 text-green-500 mr-2">✓</span>
          <span>Free 30-minute strategy session</span>
        </div>
        <div className="flex items-center">
          <span className="h-4 w-4 text-green-500 mr-2">✓</span>
          <span>Personalized business growth advice</span>
        </div>
        <div className="flex items-center">
          <span className="h-4 w-4 text-green-500 mr-2">✓</span>
          <span>No obligation or sales pressure</span>
        </div>
        <div className="flex items-center">
          <span className="h-4 w-4 text-green-500 mr-2">✓</span>
          <span>Response within 5 minutes</span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-blue-800 mb-2">About Your Consultation</h3>
        <p className="text-sm text-gray-600">
          Steven will personally review your business situation and provide specific, actionable advice to help you overcome your biggest challenges and achieve your growth goals.
        </p>
      </div>
    </div>
  )
}

export default ContactForm
