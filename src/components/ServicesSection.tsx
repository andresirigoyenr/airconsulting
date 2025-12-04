import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceData {
  title: string;
  description: string;
  incluye: string[];
  link: string;
  href: string;
  visual: React.ReactElement;
}

const serviceData: Record<string, ServiceData> = {
  analisis: {
    title: 'Análisis de Riesgo Operacional',
    description: 'Evaluación completa de carteras REO/NPL con identificación de propiedades de alto riesgo de ocupación. Análisis predictivo basado en datos geoespaciales y socioeconómicos.',
    incluye: ['Evaluación de cartera completa', 'Score de riesgo predictivo', 'Mapa de calor de vulnerabilidades', 'Informe ejecutivo detallado'],
    link: 'Solicitar Análisis →',
    href: '#contacto',
    visual: (
      <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  },
  sistema: {
    title: 'Sistema de Alerta Temprana',
    description: 'Plataforma digital que centraliza señales de intrusión y dispara alertas críticas en tiempo real. Integración con sensores IoT y reportes de campo.',
    incluye: ['Dashboard de alertas en tiempo real', 'Integración IoT y sensores', 'Notificaciones automáticas', 'Protocolos de respuesta inmediata'],
    link: 'Implementar Sistema →',
    href: '#contacto',
    visual: (
      <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
        </svg>
      </div>
    )
  },
  automatizacion: {
    title: 'Automatización Legal',
    description: 'Flujo de trabajo legal automatizado que asegura respuesta ultrarrápida ante ocupaciones. Notificaciones instantáneas y gestión de plazos críticos.',
    incluye: ['Creación automática de expedientes', 'Notificación inmediata a abogados', 'Seguimiento de plazos legales', 'Integración con despachos jurídicos'],
    link: 'Automatizar Procesos →',
    href: '#contacto',
    visual: (
      <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  },
  consultoria: {
    title: 'Consultoría de Riesgo Digital',
    description: 'Asesoramiento estratégico para implementar sistemas de gestión de riesgo operacional en instituciones financieras y servicers.',
    incluye: ['Evaluación de procesos actuales', 'Diseño de estrategia de riesgo', 'Implementación de mejores prácticas', 'Capacitación del equipo'],
    link: 'Consultar Estrategia →',
    href: '#contacto',
    visual: (
      <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L9 4.618 2.447 2.106A1 1 0 001 3v11a1 1 0 001 1h14a1 1 0 001-1V3zM4 5.618L9 7.618l5-2V15H4V5.618z" clipRule="evenodd"></path>
        </svg>
      </div>
    )
  },
  integracion: {
    title: 'Integración de Sistemas',
    description: 'Conexión perfecta entre sistemas bancarios, plataformas de riesgo y herramientas legales para una gestión unificada del riesgo de ocupación.',
    incluye: ['APIs y conectores personalizados', 'Integración con core bancario', 'Sincronización de datos en tiempo real', 'Mantenimiento y soporte técnico'],
    link: 'Integrar Sistemas →',
    href: '#contacto',
    visual: (
      <div className="w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
    )
  }
};

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('analisis');

  const handleServiceClick = (service: string) => {
    setActiveService(service);
  };

  const currentData = serviceData[activeService];

  return (
    <section id="servicios" className="relative py-20 bg-black transition-all duration-250 fade-in-section">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Side: Navigation (30%) */}
          <div className="lg:col-span-4 slide-in-left">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Servicios de Riesgo Digital
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 font-medium mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Prevención • Detección • Respuesta Automatizada
            </motion.p>
            <div className="space-y-4">
              {Object.entries(serviceData).map(([key, data], index) => (
                <motion.div
                  key={key}
                  className={`service-nav-item cursor-pointer p-4 rounded-lg transition-all duration-300 relative ${
                    activeService === key ? '' : 'hover:bg-blue-500/5'
                  }`}
                  onClick={() => handleServiceClick(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
                    activeService === key ? 'bg-blue-600' : 'bg-transparent'
                  }`} />
                  <div className="flex items-center space-x-4 relative z-10 pl-2">
                    <span className={`text-2xl font-bold transition-colors duration-300 ${
                      activeService === key ? 'text-white' : 'text-gray-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-lg md:text-xl transition-colors duration-300 ${
                      activeService === key ? 'text-white' : 'text-gray-300'
                    }`}>
                      {data.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Content Display (70%) */}
          <div className="lg:col-span-8 slide-in-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="min-h-[600px] flex flex-col justify-center"
              >
                {/* Title */}
                <motion.h3
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {currentData.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {currentData.description}
                </motion.p>

                {/* Incluye List */}
                <motion.div
                  className="mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Incluye:</h4>
                  <ul className="space-y-3">
                    {currentData.incluye.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      >
                        <span className="text-blue-400 text-lg">✓</span>
                        <span className="text-base sm:text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA Button */}
                <motion.a
                  href={currentData.href}
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {currentData.link}
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
