import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Video, TestTube, Download, Clock } from 'lucide-react';

const Class10 = () => {
  const subjects = [
    {
      name: "Mathematics",
      description: "Complete coverage of algebra, geometry, and arithmetic",
      icon: TestTube,
      resources: ["Video Lectures", "Practice Sheets", "Previous Papers"]
    },
    {
      name: "Science",
      description: "Physics, Chemistry, and Biology fundamentals",
      icon: TestTube,
      resources: ["Lab Experiments", "Chapter Notes", "MCQ Tests"]
    },
    {
      name: "Social Science",
      description: "History, Geography, and Civics comprehensive guide",
      icon: Book,
      resources: ["Mind Maps", "Quick Notes", "Sample Papers"]
    },
    {
      name: "English",
      description: "Literature, Grammar, and Writing skills",
      icon: FileText,
      resources: ["Grammar Exercises", "Writing Tips", "Reading Comprehension"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Class 10 Study Materials</h1>
            <p className="text-xl mb-8">Comprehensive resources to excel in your NIOS Class 10 exams</p>
          </motion.div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
        </div>
      </section>

      {/* Study Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recommended Study Timeline</h2>
          <div className="space-y-8">
            <TimelineItem
              month="Months 1-2"
              title="Foundation Building"
              description="Cover basic concepts and fundamentals of all subjects"
            />
            <TimelineItem
              month="Months 3-4"
              title="Advanced Topics"
              description="Deep dive into complex topics and problem-solving"
            />
            <TimelineItem
              month="Months 5-6"
              title="Revision & Practice"
              description="Extensive practice with previous year papers and mock tests"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const SubjectCard = ({ name, description, icon: Icon, resources }: {
  name: string;
  description: string;
  icon: any;
  resources: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              className="flex items-center text-sm text-gray-500"
            >
              <Download className="h-4 w-4 mr-2 text-indigo-600" />
              {resource}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const TimelineItem = ({ month, title, description }: {
  month: string;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="flex items-start space-x-4"
  >
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Clock className="h-6 w-6 text-indigo-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-indigo-600">{month}</h3>
      <h4 className="text-xl font-medium mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Class10;