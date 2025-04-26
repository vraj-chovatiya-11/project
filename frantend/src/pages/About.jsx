import React from 'react'
import Tittle from '../components/Tittle'
import { assets } from '../assets/assets'
import Newsletterbox from '../components/Newsletterbox'
import '../styles/about.css'

const About = () => {
  return (
    <div className="about-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Gradient Background */}
      <div className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl my-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-pattern"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            <span className="block">Our Story</span>
          </h1>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Forever was born out of a passion for innovation and a desire to revolutionize 
              the way people shop online.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16 about-section">
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-10 w-1 bg-black mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission at Forever is to empower customers with choice, convenience, and confidence. 
              We're dedicated to providing a seamless shopping experience that exceeds expectations, 
              from browsing and ordering to delivery and beyond.
            </p>
            <div className="flex items-center">
              <div className="h-10 w-1 bg-black mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since our inception, we've worked tirelessly to curate a diverse selection of high-quality 
              products that cater to every taste and preference. From fashion and beauty to electronics 
              and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-w-1 aspect-h-1">
            <img 
              src={assets.about_img} 
              alt="About Forever" 
              className="object-cover w-full h-full rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <div className="h-32 w-32 md:h-48 md:w-48 bg-gray-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="my-20 about-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <div className="mx-auto w-24 h-1 bg-black mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md transform hover:translate-y-[-8px] transition-transform duration-300 border-t-4 border-black about-card">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <img src={assets.quality_icon} alt="Quality" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Quality Assurance</h3>
            <p className="text-gray-700 text-center">
              We meticulously select and vet each product to ensure it meets our stringent quality standards.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md transform hover:translate-y-[-8px] transition-transform duration-300 border-t-4 border-black about-card">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <img src={assets.exchange_icon} alt="Convenience" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Convenience</h3>
            <p className="text-gray-700 text-center">
              With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md transform hover:translate-y-[-8px] transition-transform duration-300 border-t-4 border-black about-card">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <img src={assets.support_img} alt="Customer Service" className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Exceptional Service</h3>
            <p className="text-gray-700 text-center">
              Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="my-20 py-16 bg-gray-50 rounded-3xl about-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">The Team Behind Forever</h2>
          <div className="mx-auto w-24 h-1 bg-black mt-4"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            Our dedicated team works tirelessly to bring you the best shopping experience possible.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col items-center team-member">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden team-member-image">
                  {/* Placeholder for team member photos */}
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
                <h3 className="text-lg font-medium">Team Member</h3>
                <p className="text-sm text-gray-500">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="my-20">
        <Newsletterbox />
      </div>
    </div>
  )
}

export default About
