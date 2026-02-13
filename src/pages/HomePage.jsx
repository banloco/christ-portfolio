import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon, ServerIcon, CircleStackIcon } from '@heroicons/react/24/outline';
import { personalInfo, projects } from '../data/data';

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-indigo-400 font-medium mb-4"
              >
                Bonjour, je suis
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                {personalInfo.name}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-300 mb-8"
              >
                {personalInfo.title}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 mb-12 leading-relaxed"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Voir mes projets
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  Me contacter
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Space - Professional Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl transform rotate-6"></div>
                
                {/* Image Placeholder */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-gray-700/50 overflow-hidden aspect-square flex items-center justify-center">
                  {/* Placeholder Text */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                      <span className="text-4xl font-bold">{personalInfo.name.charAt(0)}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Photo professionnelle</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/30 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Domaines d'expertise</h2>
            <p className="text-gray-400">Technologies et outils que je maîtrise</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors"
            >
              <CodeBracketIcon className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Développement Web</h3>
              <p className="text-gray-400 mb-4">
                Frontend moderne (React, Vue.js) et backend robuste (Laravel, Django, Next.js)
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Laravel</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Next.js</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors"
            >
              <ServerIcon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Data Engineering</h3>
              <p className="text-gray-400 mb-4">
                Pipelines temps réel avec Kafka, Spark, et architectures data modernes
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Kafka</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Spark</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">dbt</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-colors"
            >
              <CircleStackIcon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Machine Learning & IA</h3>
              <p className="text-gray-400 mb-4">
                Modèles prédictifs, NLP, Computer Vision avec TensorFlow et Scikit-Learn
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Scikit-Learn</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">CV</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projets en vedette</h2>
            <p className="text-gray-400">Quelques-uns de mes travaux récents</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                  <CodeBracketIcon className="w-20 h-20 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Voir tous les projets
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Je suis disponible pour des projets freelance, collaborations ou opportunités à temps plein.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Commençons un projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
