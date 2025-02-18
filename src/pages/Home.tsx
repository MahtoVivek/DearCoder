import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BookCheck, Crown, Download, FileText, Languages, BookMarked, GraduationCap, Notebook, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const studyMaterials = [
    {
      title: "Class 10 Materials",
      items: [
        { name: "Hindi Medium Study Materials", link: "#" },
        { name: "English Medium Study Materials", link: "#" },
        { name: "Solved TMA (Hindi)", link: "#" },
        { name: "Solved TMA (English)", link: "#" },
        { name: "Practical Assignments", link: "#" },
        { name: "Previous Year Papers", link: "#" }
      ]
    },
    {
      title: "Class 12 Materials",
      items: [
        { name: "Hindi Medium Study Materials", link: "#" },
        { name: "English Medium Study Materials", link: "#" },
        { name: "Solved TMA (Hindi)", link: "#" },
        { name: "Solved TMA (English)", link: "#" },
        { name: "Practical Assignments", link: "#" },
        { name: "Previous Year Papers", link: "#" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to NIOS Excellence
            </h1>
            <p className="text-xl mb-8">
              Comprehensive study materials in Hindi & English for Class 10th and 12th NIOS students
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold"
              >
                View Study Materials
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Language Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available in Both Languages</h2>
            <p className="text-gray-600">Choose your preferred medium of study</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LanguageCard
              language="Hindi Medium"
              description="Complete study materials, TMAs, and resources in Hindi"
              icon={Languages}
            />
            <LanguageCard
              language="English Medium"
              description="Comprehensive study materials, TMAs, and resources in English"
              icon={Languages}
            />
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Free Study Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyMaterials.map((section, index) => (
              <StudyMaterialCard key={index} {...section} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FileCheck}
              title="Solved TMAs"
              description="Access complete solved Tutor Marked Assignments for all subjects"
            />
            <FeatureCard
              icon={Notebook}
              title="Practical Guides"
              description="Step-by-step practical assignment solutions and guidelines"
            />
            <FeatureCard
              icon={BookMarked}
              title="Previous Papers"
              description="Last 5 years' solved question papers with detailed solutions"
            />
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <QuickAccessCard
              title="Class 10"
              icon={GraduationCap}
              link="/class10"
              color="bg-blue-500"
            />
            <QuickAccessCard
              title="Class 12"
              icon={GraduationCap}
              link="/class12"
              color="bg-purple-500"
            />
            <QuickAccessCard
              title="Resources"
              icon={BookOpen}
              link="/resources"
              color="bg-green-500"
            />
            <QuickAccessCard
              title="Premium"
              icon={Crown}
              link="/premium"
              color="bg-yellow-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const LanguageCard = ({ language, description, icon: Icon }: { 
  language: string; 
  description: string; 
  icon: any; 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold ml-4">{language}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold"
    >
      Access Materials
    </motion.button>
  </motion.div>
);

const StudyMaterialCard = ({ title, items }: { 
  title: string; 
  items: { name: string; link: string; }[]; 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          whileHover={{ x: 5 }}
          className="flex items-center text-gray-600 hover:text-indigo-600"
        >
          <FileText className="h-5 w-5 mr-2" />
          <span>{item.name}</span>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-indigo-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const QuickAccessCard = ({ title, icon: Icon, link, color }: { 
  title: string; 
  icon: any; 
  link: string; 
  color: string; 
}) => (
  <motion.div whileHover={{ y: -5 }}>
    <Link to={link}>
      <div className={`${color} p-6 rounded-lg shadow-lg text-white text-center`}>
        <Icon className="h-12 w-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </Link>
  </motion.div>
);

export default Home;