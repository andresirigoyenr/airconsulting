import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = document.querySelector('.process-section');
          if (!section) return;

          const rect = section.getBoundingClientRect();
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));

          // Calculate which step should be active based on scroll progress
          const stepIndex = Math.floor(scrollProgress * steps.length);
          setActiveStep(Math.min(stepIndex, steps.length - 1));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <section className="process-section relative py-16 md:py-32 pb-20 md:pb-40 bg-black transition-all duration-250 fade-in-section overflow-hidden slide-and-fade-reveal" style={{ backgroundImage: 'url(\'/images/codigo.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-white text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestro Proceso hacia el Éxito
          </motion.h2>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600 transform md:-translate-x-0.5"></div>

            <div className="space-y-8 md:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: activeStep >= index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-20 transition-all duration-500 ${
                    activeStep >= index
                      ? 'bg-orange-500 shadow-lg shadow-orange-500/50 scale-125'
                      : 'bg-gray-600'
                  }`}></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className={`bg-black/50 backdrop-blur-sm p-6 rounded-lg border transition-all duration-500 ${
                      activeStep >= index
                        ? 'border-orange-500/50 shadow-lg shadow-orange-500/20'
                        : 'border-gray-700/50'
                    }`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          activeStep >= index
                            ? 'bg-orange-500/20 text-orange-400'
                            : 'bg-gray-700/50 text-gray-400'
                        }`}>
                          {step.icon}
                        </div>
                        <div className={`text-3xl font-bold transition-all duration-500 ${
                          activeStep >= index ? 'text-orange-400' : 'text-gray-500'
                        }`}>
                          {step.number}
                        </div>
                      </div>

                      <h3 className={`text-xl md:text-2xl font-semibold font-sans mb-4 transition-all duration-500 ${
                        activeStep >= index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-base md:text-lg leading-relaxed font-sans transition-all duration-500 ${
                        activeStep >= index ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .process-section {
            height: auto !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProcessSection;
