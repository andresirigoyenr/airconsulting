import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Años de Experiencia' },
    { number: '500+', label: 'Proyectos Completados' },
    { number: '50+', label: 'Empresas Satisfechas' },
    { number: '24/7', label: 'Soporte Continuo' }
  ];

  const values = [
    {
      icon: '🚀',
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y tendencias para mantenernos a la vanguardia del marketing digital.'
    },
    {
      icon: '🎯',
      title: 'Resultados',
      description: 'Nos enfocamos en métricas concretas y objetivos medibles para garantizar el éxito de tu negocio.'
    },
    {
      icon: '🤝',
      title: 'Transparencia',
      description: 'Mantenemos una comunicación abierta y honesta, con reportes detallados de todos nuestros procesos.'
    },
    {
      icon: '🌍',
      title: 'Alcance Global',
      description: 'Conectamos empresas locales con mercados internacionales, expandiendo tu presencia global.'
    }
  ];

  return (
    <section id="nosotros" className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

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
            <span className="block bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              AIR Consulting
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Somos una agencia de marketing digital especializada en transformar negocios a través de estrategias innovadoras y resultados medibles.
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
                  Fundada en 2019 por Andrés Irigoyen, AIR Consulting nació de la visión de conectar el talento chileno con el mercado español y latinoamericano. Con más de 5 años de experiencia, hemos evolucionado de una pequeña agencia local a un referente regional en marketing digital.
                </p>
                <p>
                  Nuestra experiencia internacional nos permite entender las particularidades culturales y de mercado de España y Latinoamérica, ofreciendo soluciones personalizadas que realmente funcionan en cada contexto.
                </p>
                <p>
                  Hoy, somos un equipo multidisciplinario de expertos en desarrollo web, SEO, marketing digital y transformación digital, comprometidos con el éxito de nuestros clientes.
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
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
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
                    className="group p-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/50 rounded-2xl hover:border-orange-500/30 transition-all duration-300"
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
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-lg border border-orange-500/20 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              "Transformar negocios locales en referentes globales a través de estrategias digitales innovadoras, conectando el talento chileno con mercados internacionales y generando resultados que marquen la diferencia."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
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
