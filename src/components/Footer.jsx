import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react'
import actioncoachLogo from '../assets/actioncoach_logo_clean.png'
import stevenCaricature from '../assets/caricatureSR.jpg'

const Footer = () => {
  return (
    <footer className="bg-actioncoach-blue text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 relative">
            <img 
              src={actioncoachLogo} 
              alt="ActionCOACH Business Coaching" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            
            {/* Steven's Caricature - Positioned to cover white box */}
            <div className="relative">
              <img 
                src={stevenCaricature} 
                alt="Steven Rouget - ActionCOACH Business Coach" 
                className="w-20 h-auto rounded-lg shadow-md absolute top-0 left-0 z-10"
                style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '0px',
                  zIndex: 10
                }}
              />
              {/* Spacer to maintain layout */}
              <div className="h-24 w-20"></div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-bold">Steven Rouget</h3>
              <p className="text-sm text-blue-100">
                ActionCOACH Business Coach
              </p>
              <p className="text-sm text-blue-100">
                23 Years of Experience
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <a href="tel:0412351755" className="hover:text-blue-200 transition-colors">
                  0412 351 755
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>stevenrouget@actioncoach.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Victoria, Australia</span>
              </div>
            </div>
          </div>
          
          {/* Project BETA */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Project BETA</h3>
            <div className="space-y-2">
              <Link to="/project-beta" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Program Overview
              </Link>
              <Link to="/project-beta/cadet" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Cadet Level - $95/week
              </Link>
              <Link to="/project-beta/navigator" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Navigator Level - $195/week
              </Link>
              <Link to="/project-beta/captain" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Captain Level - $295/week
              </Link>
            </div>
            <div className="text-sm text-blue-100">
              <p className="font-semibold">Business Excellence Through Action</p>
              <p>Weekly live sessions with like-minded business owners</p>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <div className="space-y-2">
              <Link to="/one-on-one" className="block text-sm text-blue-100 hover:text-white transition-colors">
                1-on-1 Coaching
              </Link>
              <Link to="/about" className="block text-sm text-blue-100 hover:text-white transition-colors">
                About Steven
              </Link>
              <Link to="/success-stories" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Success Stories
              </Link>
              <Link to="/resources" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Free Resources
              </Link>
              <Link to="/blog" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-sm text-blue-100 hover:text-white transition-colors">
                Book Consultation
              </Link>
            </div>
          </div>
          
          {/* ActionCOACH Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ActionCOACH</h3>
            <div className="text-sm text-blue-100 space-y-2">
              <p>World's #1 Business Coaching Company</p>
              <p>15,000+ clients coached weekly</p>
              <p>70+ countries worldwide</p>
              <p>Founded in 1993 by Brad Sugars</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold">17-Week Guarantee</p>
              <p className="text-xs text-blue-100">
                Find our fee in your business within 17 weeks or coaching is FREE!
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/stevenrougetactioncoach/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/stevenrouget/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/steven-rouget-8532a98/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@stevenrouget-actioncoachbu2506" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              <p>&copy; 2024 Steven Rouget ActionCOACH. All rights reserved.</p>
              <p>ActionCOACH® is a registered trademark of ActionCOACH Global.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-blue-100 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
