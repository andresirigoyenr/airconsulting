import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Años de Experiencia' },
    { number: '100M+', label: 'Activos Protegidos' },
    { number: '15+', label: 'Instituciones Financieras' },
    { number: '99.9%', label: 'Tiempo de Actividad' }
  ];

  const values = [
    {
      icon: '🛡️',
      title: 'Prevención Proactiva',
      description: 'Identificamos riesgos antes de que se conviertan en problemas, minimizando pérdidas y maximizando la protección de activos.'
    },
    {
      icon: '⚡',
      title: 'Respuesta Ultrarrápida',
      description: 'Sistemas automatizados que responden en minutos, no en días, asegurando el cumplimiento de plazos críticos legales.'
    },
    {
      icon: '📊',
      title: 'Business Intelligence',
      description: 'Análisis predictivo basado en datos geoespaciales y socioeconómicos para decisiones estratégicas fundamentadas.'
    },
    {
      icon: '🏛️',
      title: 'Confianza Institucional',
      description: 'Trabajamos con bancos y servicers, cumpliendo los más altos estándares de seguridad y confidencialidad financiera.'
    }
  ];

  return (
    <section id="nosotros" className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Sobre
            <span className="block bg-gradient-to-r from-blue-600 to-slate-400 bg-clip-text text-transparent">
              AIR Consulting
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Somos consultores especializados en ingeniería de riesgo digital para activos inmobiliarios adjudicados, protegiendo carteras REO/NPL contra ocupaciones ilegales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestra Historia
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Fundada en 2019 por Andrés Irigoyen, AIR Consulting se especializa en la gestión de riesgo operacional para el sector financiero inmobiliario. Nuestra experiencia combina tecnología avanzada con conocimiento profundo del mercado de activos adjudicados en España.
                </p>
                <p>
                  Hemos desarrollado sistemas propietarios que integran datos geoespaciales, inteligencia artificial y automatización legal para proporcionar soluciones de alerta temprana que protegen carteras de millones de euros contra el riesgo de ocupación.
                </p>
                <p>
                  Nuestro equipo de ingenieros, analistas de riesgo y consultores legales trabaja exclusivamente con bancos, servicers e instituciones financieras, garantizando la máxima confidencialidad y cumplimiento normativo.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestros Valores
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-blue-600/10 to-slate-400/10 backdrop-blur-lg border border-blue-500/20 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              "Proteger el valor de los activos inmobiliarios adjudicados mediante sistemas de alerta temprana y gestión automatizada del riesgo de ocupación, asegurando la estabilidad financiera de las instituciones y la recuperación máxima de las carteras REO/NPL."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Andrés Irigoyen</div>
                <div className="text-gray-400 text-sm">Fundador & CEO</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
