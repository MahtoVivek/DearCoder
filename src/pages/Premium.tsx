import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, Star, Video, Users, BookOpen, Clock, Zap } from 'lucide-react';

const Premium = () => {
  const features = [
    "One-on-one mentoring sessions",
    "Live doubt clearing classes",
    "Personalized study plans",
    "Advanced study materials",
    "Mock test evaluations",
    "Performance analytics"
  ];

  const plans = [
    {
      name: "Monthly",
      price: "₹999",
      duration: "per month",
      features: features,
      recommended: false
    },
    {
      name: "Quarterly",
      price: "₹2,499",
      duration: "per quarter",
      features: features,
      recommended: true
    },
    {
      name: "Yearly",
      price: "₹7,999",
      duration: "per year",
      features: features,
      recommended: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Crown className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Premium Features</h1>
            <p className="text-xl mb-8">Take your NIOS preparation to the next level</p>
          </motion.div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Video}
              title="Live Classes"
              description="Interactive sessions with expert teachers"
            />
            <FeatureCard
              icon={Users}
              title="1:1 Mentoring"
              description="Personalized guidance and support"
            />
            <FeatureCard
              icon={BookOpen}
              title="Advanced Content"
              description="In-depth study materials and resources"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index ) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              score="95%"
              text="The premium features helped me achieve my dream score. The mentoring sessions were invaluable!"
            />
            <TestimonialCard
              name="Rahul Kumar"
              score="92%"
              text="The personalized study plan and mock tests were game-changers in my preparation."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
      <Icon className="h-6 w-6 text-yellow-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const PricingCard = ({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      recommended ? 'ring-2 ring-yellow-500' : ''
    }`}
  >
    {recommended && (
      <div className="bg-yellow-500 text-white text-center py-2">
        <p className="text-sm font-semibold">RECOMMENDED</p>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-500 ml-2">{duration}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Check className="h-5 w-5 text-yellow-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-lg font-semibold ${
          recommended
            ? 'bg-yellow-500 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </motion.button>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, score, text }: {
  name: string;
  score: string;
  text: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <Star className="h-6 w-6 text-yellow-500" />
      <h3 className="text-xl font-semibold ml-2">{name}</h3>
    </div>
    <p className="text-3xl font-bold text-yellow-500 mb-2">{score}</p>
    <p className="text-gray-600">{text}</p>
  </motion.div>
);

export default Premium;