import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Análisis y Estrategia',
      description: 'Escuchamos tus objetivos, analizamos tu mercado y definimos los KPIs que realmente importan.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Estrategia y Diseño',
      description: 'Creamos un plan de acción a medida. Diseñamos una experiencia de usuario que enamora y convierte.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Implementación y Lanzamiento',
      description: 'Damos vida al proyecto con una ejecución impecable, cuidando cada detalle técnico y visual.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Seguimiento y Optimización',
      description: 'Monitoreamos resultados, optimizamos estrategias y aseguramos el crecimiento continuo de tu negocio.',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-32 bg-black transition-all duration-250 fade-in-section overflow-hidden slide-and-fade-reveal" style={{ backgroundImage: 'url(\'/images/codigo.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Darkening layer for readability */}
      <div className="absolute inset-0 bg-black/85 z-10"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-5">
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="particle particle-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestro Proceso hacia el Éxito
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4 flex-shrink-0">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-orange-500">
                  {step.number}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
