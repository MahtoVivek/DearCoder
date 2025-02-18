import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Brain, Calculator, Microscope, Download, Clock } from 'lucide-react';

const Class12 = () => {
  const subjects = [
    {
      name: "Physics",
      description: "Mechanics, Electromagnetism, Modern Physics",
      icon: Atom,
      resources: ["Video Lectures", "Numerical Problems", "Lab Experiments"]
    },
    {
      name: "Chemistry",
      description: "Organic, Inorganic, and Physical Chemistry",
      icon: Microscope,
      resources: ["Chemical Equations", "Periodic Table", "Reaction Mechanisms"]
    },
    {
      name: "Mathematics",
      description: "Calculus, Algebra, and Coordinate Geometry",
      icon: Calculator,
      resources: ["Formula Sheets", "Solved Examples", "Practice Problems"]
    },
    {
      name: "Biology",
      description: "Zoology, Botany, and Human Physiology",
      icon: Brain,
      resources: ["Diagrams", "Notes", "MCQ Bank"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Class 12 Study Materials</h1>
            <p className="text-xl mb-8">Advanced resources for NIOS Class 12 preparation</p>
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

      {/* Exam Preparation Guide */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Exam Preparation Guide</h2>
          <div className="space-y-8">
            <PrepGuideItem
              phase="Phase 1"
              title="Concept Building"
              description="Master fundamental concepts and theories"
            />
            <PrepGuideItem
              phase="Phase 2"
              title="Problem Solving"
              description="Practice numerical problems and theoretical questions"
            />
            <PrepGuideItem
              phase="Phase 3"
              title="Mock Tests"
              description="Take timed tests and previous year papers"
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
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6 text-purple-600" />
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
              <Download className="h-4 w-4 mr-2 text-purple-600" />
              {resource}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const PrepGuideItem = ({ phase, title, description }: {
  phase: string;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ x: 5 }}
    className="flex items-start space-x-4"
  >
    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Clock className="h-6 w-6 text-purple-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-purple-600">{phase}</h3>
      <h4 className="text-xl font-medium mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Class12;