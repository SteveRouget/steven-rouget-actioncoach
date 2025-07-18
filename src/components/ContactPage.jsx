import React from 'react'
import ContactForm from './ContactForm'

const ContactPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-8 text-center">Book Your Free Consultation</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Ready to transform your business? Fill out the form below to schedule a free, no-obligation consultation with Steven Rouget.
        </p>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage


