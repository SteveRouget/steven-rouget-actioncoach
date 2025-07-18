import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ProjectBetaPage from './components/ProjectBetaPage'
import CadetPage from './components/CadetPage'
import NavigatorPage from './components/NavigatorPage'
import CaptainPage from './components/CaptainPage'
import OneOnOnePage from './components/OneOnOnePage'
import AboutPage from './components/AboutPage'
import SuccessStoriesPage from './components/SuccessStoriesPage'
import ResourcesPage from './components/ResourcesPage'
import ContactPage from './components/ContactPage'
import BlogPage from './components/BlogPage'
import SixWaysPreview from './components/SixWaysPreview'
import TimeMasteryPreview from './components/TimeMasteryPreview'
import SalesMarketingPreview from './components/SalesMarketingPreview'
import LeadershipManagementPreview from './components/LeadershipManagementPreview'
import BuyingCustomersBlogPost from './components/BuyingCustomersBlogPost'
import CashFlowBlogPost from './components/CashFlowBlogPost'
import SixWaysBlogPost from './components/SixWaysBlogPost'
import SuccessLeavesClueBlogPost from './components/SuccessLeavesClueBlogPost'
import TradesmanToBusinessOwnerBlogPost from './components/TradesmanToBusinessOwnerBlogPost'
import TimeMasteryBlogPost from './components/TimeMasteryBlogPost'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project-beta" element={<ProjectBetaPage />} />
            <Route path="/project-beta/cadet" element={<CadetPage />} />
            <Route path="/project-beta/navigator" element={<NavigatorPage />} />
            <Route path="/project-beta/captain" element={<CaptainPage />} />
            <Route path="/one-on-one" element={<OneOnOnePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/6-ways-preview" element={<SixWaysPreview />} />
            <Route path="/resources/time-mastery-preview" element={<TimeMasteryPreview />} />
            <Route path="/resources/sales-marketing-preview" element={<SalesMarketingPreview />} />
            <Route path="/resources/leadership-management-preview" element={<LeadershipManagementPreview />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/buying-customers-brad-sugars-strategy" element={<BuyingCustomersBlogPost />} />
            <Route path="/blog/cash-flow-lifeblood-business" element={<CashFlowBlogPost />} />
            <Route path="/blog/6-ways-grow-business-deep-dive" element={<SixWaysBlogPost />} />
            <Route path="/blog/success-leaves-clues-test-measure" element={<SuccessLeavesClueBlogPost />} />
            <Route path="/blog/tradesman-to-business-owner" element={<TradesmanToBusinessOwnerBlogPost />} />
            <Route path="/blog/time-mastery-busy-entrepreneurs" element={<TimeMasteryBlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


