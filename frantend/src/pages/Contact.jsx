import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'
import { MapPin, Phone, Mail, Briefcase } from 'lucide-react'
import '../styles/contact.css'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <div className="contact-container max-w-7xl mx-auto">
      {/* Hero Section with Gradient Background */}
      <div className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl my-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-pattern"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            <span className="block">Get in Touch</span>
          </h1>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-16">
        {/* Contact Form Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-black transform transition hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                placeholder="How can we help you?"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-black text-white px-8 py-4 font-medium rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div>
          <div className="relative mb-8">
            <img 
              src={assets.contact_img} 
              alt="Contact us" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-3xl font-bold shadow-text">FOREVER</h3>
                <p className="text-white mt-2 shadow-text">Fashion for Everyone</p>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-gray-100 p-3">
                  <MapPin size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Our Store</h3>
                  <p className="text-gray-500 mt-2">54709 Willms Station</p>
                  <p className="text-gray-500">Suite 350, Washington, USA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-gray-100 p-3">
                  <Phone size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Call Us</h3>
                  <p className="text-gray-500 mt-2">(415) 555-0132</p>
                  <p className="text-gray-500">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-gray-100 p-3">
                  <Mail size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Email Us</h3>
                  <p className="text-gray-500 mt-2">admin@forever.com</p>
                  <p className="text-gray-500">support@forever.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-gray-100 p-3">
                  <Briefcase size={20} className="text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Careers</h3>
                  <p className="text-gray-500 mt-2">Join our growing team</p>
                  <a 
                    href="#careers" 
                    className="text-black font-medium mt-2 inline-block border-b border-black pb-1 hover:opacity-80 transition-opacity"
                  >
                    View openings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-20 py-16 bg-gray-50 rounded-3xl px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto w-24 h-1 bg-black mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "What are your shipping options?",
              answer: "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and next-day delivery for select areas. Shipping costs vary based on location and delivery speed."
            },
            {
              question: "How can I track my order?",
              answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our website or with the shipping carrier to track your package's status."
            },
            {
              question: "What is your return policy?",
              answer: "We accept returns within 30 days of purchase. Items must be in original condition with tags attached. Return shipping is free for defective items."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="my-20">
        <Newsletterbox />
      </div>
    </div>
  )
}

export default Contact
