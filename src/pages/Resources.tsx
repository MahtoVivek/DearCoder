import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Video, Download, BookOpen, Users, Award } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Study Materials",
      icon: FileText,
      items: [
        "Chapter-wise Notes",
        "Important Questions",
        "Quick Revision Guides",
        "Formula Sheets"
      ]
    },
    {
      title: "Video Lectures",
      icon: Video,
      items: [
        "Concept Explanations",
        "Problem Solving Sessions",
        "Topic Discussions",
        "Exam Tips"
      ]
    },
    {
      title: "Practice Tests",
      icon: BookOpen,
      items: [
        "Chapter Tests",
        "Full Mock Tests",
        "Previous Year Papers",
        "Topic-wise Quizzes"
      ]
    },
    {
      title: "Study Groups",
      icon: Users,
      items: [
        "Peer Discussion Forums",
        "Doubt Clearing Sessions",
        "Group Study Plans",
        "Expert Guidance"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Resources</h1>
            <p className="text-xl mb-8">Everything you need to excel in your NIOS journey</p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Tracker */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Track Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AchievementCard
              title="Completion Rate"
              value="85%"
              description="Of study materials covered"
            />
            <AchievementCard
              title="Practice Tests"
              value="24"
              description="Tests completed this month"
            />
            <AchievementCard
              title="Study Hours"
              value="120"
              description="Hours of focused learning"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ResourceCard = ({ title, icon: Icon, items }: {
  title: string;
  icon: any;
  items: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6 text-green-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="flex items-center text-sm text-gray-500"
            >
              <Download className="h-4 w-4 mr-2 text-green-600" />
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const AchievementCard = ({ title, value, description }: {
  title: string;
  value: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
      <Award className="h-6 w-6 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-green-600 mb-2">{value}</p>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Resources;