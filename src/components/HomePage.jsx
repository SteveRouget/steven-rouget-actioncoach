import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Users, TrendingUp, Clock, CheckCircle, Star, Target, DollarSign } from 'lucide-react'
import heroImage from '../assets/steven_rouget_hero.jpg'
import coachingImage from '../assets/business_coaching_meeting.jpg'
import growthImage from '../assets/business_growth_chart.jpg'
import actioncoachBadge from '../assets/actioncoach_badge.png'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Trade or Service Business
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Gain More Control, More Profit, and More Free Time with Project BETA
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Weekly live sessions with like-minded business owners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Access to proven ActionCOACH strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">23 years of business coaching experience</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/project-beta">
                  <Button size="lg" className="btn-primary">
                    Join Project BETA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 text-lg">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Business coaching for trades and service businesses" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <img 
                  src={actioncoachBadge} 
                  alt="ActionCOACH Results Guarantee" 
                  className="h-16 w-16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Why Trades and Service Businesses Choose Project BETA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop being self-employed and start being a business owner. Project BETA helps you build a business that works without you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-red-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">More Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Implement proven business systems and management strategies that give you complete control over your operations, team, and growth trajectory.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-red-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">More Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Learn the 6 Ways to Grow a Business and implement strategies that directly impact your bottom line and increase profitability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto bg-red-700 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-800">More Free Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Build systems that allow your business to run without you, giving you the freedom to enjoy life while your business grows.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project BETA Levels Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Choose Your Project BETA Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Business Excellence Through Action - Start where you are, grow at your pace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cadet Level */}
            <Card className="card-hover border-2 hover:border-red-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-800">Cadet</CardTitle>
                <div className="text-3xl font-bold text-red-700">$95/week</div>
                <CardDescription className="text-base">
                  Perfect for self-employed individuals ready to think like business owners
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Weekly live sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">10 hand-picked strategy cards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Brad Sugars' 30X Business series</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Time management resources</span>
                  </div>
                </div>
                <Link to="/project-beta/cadet" className="block">
                  <Button className="w-full btn-secondary">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Navigator Level */}
            <Card className="card-hover border-2 hover:border-red-700 transform scale-105">
              <CardHeader className="text-center">
                <div className="bg-yellow-400 text-blue-800 px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                  POPULAR
                </div>
                <CardTitle className="text-2xl text-blue-800">Navigator</CardTitle>
                <div className="text-3xl font-bold text-red-700">$195/week</div>
                <CardDescription className="text-base">
                  For business owners with 1+ employees seeking growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">All Cadet benefits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Additional Green strategy cards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Brad Sugars' 30X Life series</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Enhanced coaching support</span>
                  </div>
                </div>
                <Link to="/project-beta/navigator" className="block">
                  <Button className="w-full btn-primary">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Captain Level */}
            <Card className="card-hover border-2 hover:border-red-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-800">Captain</CardTitle>
                <div className="text-3xl font-bold text-red-700">$295/week</div>
                <CardDescription className="text-base">
                  For business owners with 2-3 employees wanting profitable growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">All Navigator benefits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Amber strategy cards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Brad Sugars' 30X Wealth series</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Priority coaching access</span>
                  </div>
                </div>
                <Link to="/project-beta/captain" className="block">
                  <Button className="w-full btn-secondary">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/project-beta">
              <Button size="lg" className="btn-primary">
                Come Along and See What We Do
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Steven Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={coachingImage} 
                alt="Steven Rouget business coaching session" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
                Meet Steven Rouget
              </h2>
              <p className="text-lg text-gray-600">
                With over 23 years of ActionCOACH experience, Steven has helped hundreds of business owners 
                create profitable and productive businesses that don't require them to work around the clock.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span>23 years of ActionCOACH experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span>Hundreds of successful business owner clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span>Specializes in trades and service businesses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-400" />
                  <span>17-week guarantee on results</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="btn-secondary">
                  Learn More About Steven
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join Project BETA and start your journey from self-employed to business owner. 
            Come along and see what we do - if you like it, tell us why you should be part of our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/project-beta">
              <Button size="lg" className="btn-primary">
                Join Project BETA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 font-bold py-4 px-8 text-lg">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

