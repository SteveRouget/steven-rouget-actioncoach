import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    businessName: '',
    message: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send this data to your GHL account
    // For now, we'll just log it to the console
    console.log('Form Data Submitted:', formData)
    alert('Thank you for your inquiry! We will be in touch shortly.')
    setFormData({
      name: '',
      mobile: '',
      email: '',
      businessName: '',
      message: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="mobile">Mobile</Label>
        <Input type="tel" id="mobile" value={formData.mobile} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="businessName">Business Name</Label>
        <Input type="text" id="businessName" value={formData.businessName} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="message">Your Message (Optional)</Label>
        <Textarea id="message" value={formData.message} onChange={handleChange} rows="4" />
      </div>
      {/* Placeholder for GHL multiple choice question/form */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        <p className="font-bold">GHL Integration Placeholder</p>
        <p>A multiple-choice question or form from GHL can be integrated here once available.</p>
      </div>
      <Button type="submit" className="w-full btn-primary">
        Submit Inquiry
      </Button>
    </form>
  )
}

export default ContactForm


