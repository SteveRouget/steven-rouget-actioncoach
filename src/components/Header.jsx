import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import actioncoachLogo from '../assets/actioncoach_logo_clean.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectBetaOpen, setIsProjectBetaOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleProjectBetaDropdown = () => {
    setIsProjectBetaOpen(!isProjectBetaOpen)
  }

  const closeProjectBetaDropdown = () => {
    setIsProjectBetaOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-max">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img 
              src={actioncoachLogo} 
              alt="ActionCOACH Business Coaching" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-blue-800">Steven Rouget</div>
              <div className="text-sm text-gray-600">Victoria, Australia</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            
            {/* Project BETA Dropdown - Click to open */}
            <div 
              className="relative inline-block"
            >
              <button 
                onClick={toggleProjectBetaDropdown}
                className={`font-medium transition-colors hover:text-primary flex items-center py-6 ${
                  location.pathname.includes('/project-beta') ? 'text-red-700' : 'text-gray-600'
                }`}
              >
                Project BETA
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isProjectBetaOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border z-50"
                  onMouseLeave={closeProjectBetaDropdown} // Keep this for closing if mouse leaves the dropdown area
                >
                  <div className="py-2">
                    <Link 
                      to="/project-beta" 
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-700"
                      onClick={() => { closeProjectBetaDropdown(); closeMenu(); }}
                    >
                      Overview
                    </Link>
                    <Link 
                      to="/project-beta/cadet" 
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-700"
                      onClick={() => { closeProjectBetaDropdown(); closeMenu(); }}
                    >
                      Cadet Level ($95/week)
                    </Link>
                    <Link 
                      to="/project-beta/navigator" 
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-700"
                      onClick={() => { closeProjectBetaDropdown(); closeMenu(); }}
                    >
                      Navigator Level ($195/week)
                    </Link>
                    <Link 
                      to="/project-beta/captain" 
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-700"
                      onClick={() => { closeProjectBetaDropdown(); closeMenu(); }}
                    >
                      Captain Level ($295/week)
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/one-on-one" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/one-on-one') ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              1-on-1 Coaching
            </Link>
            
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              About Steven
            </Link>
            
            <Link 
              to="/success-stories" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/success-stories') ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              Success Stories
            </Link>
            
            <Link 
              to="/resources" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/resources') ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              Resources
            </Link>
            
            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/blog') ? 'text-red-700' : 'text-gray-600'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="https://api.leadconnectorhq.com/widget/booking/QK33FZ6MEVxaCQx3yMY6" target="_blank" rel="noopener noreferrer">
              <Button className="btn-primary">
                Book Free Consultation
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-4">
              <Link 
                to="/" 
                className={`block font-medium ${
                  isActive('/') ? 'text-red-700' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-blue-800">Project BETA</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/project-beta" 
                    className="block text-sm text-gray-600"
                    onClick={closeMenu}
                  >
                    Overview
                  </Link>
                  <Link 
                    to="/project-beta/cadet" 
                    className="block text-sm text-gray-600"
                    onClick={closeMenu}
                  >
                    Cadet Level ($95/week)
                  </Link>
                  <Link 
                    to="/project-beta/navigator" 
                    className="block text-sm text-gray-600"
                    onClick={closeMenu}
                  >
                    Navigator Level ($195/week)
                  </Link>
                  <Link 
                    to="/project-beta/captain" 
                    className="block text-sm text-gray-600"
                    onClick={closeMenu}
                  >
                    Captain Level ($295/week)
                  </Link>
                </div>
              </div>

              <Link 
                to="/one-on-one" 
                className={`block font-medium ${
                  isActive('/one-on-one') ? 'text-red-700' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                1-on-1 Coaching
              </Link>
              
              <Link 
                to="/about" 
                className={`block font-medium ${
                  isActive('/about') ? 'text-red-700' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                About Steven
              </Link>
              
              <Link 
                to="/success-stories" 
                className={`block font-medium ${
                  isActive('/success-stories') ? 'text-red-700' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                Success Stories
              </Link>
              
              <Link 
                to="/resources" 
                className={`block font-medium ${
                  isActive('/resources') ? 'text-red-700' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                Resources
              </Link>

              <Link 
                to="/blog" 
                className={`block font-medium ${
                  isActive('/blog') ? 'text-red-700' : 'text-gray-600'
                }`}
                onClick={closeMenu}
              >
                Blog
              </Link>

              <div className="pt-4">
                <a href="https://api.leadconnectorhq.com/widget/booking/QK33FZ6MEVxaCQx3yMY6" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  <Button className="btn-primary w-full">
                    Book Free Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


