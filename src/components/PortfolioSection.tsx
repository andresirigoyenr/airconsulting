import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
  technologies: string[];
  client: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Plataforma E-commerce CNN España',
    category: 'Desarrollo Web',
    description: 'Desarrollo completo de plataforma e-commerce con integración de pagos, gestión de inventario y panel de administración personalizado.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    results: ['+300% en conversiones', '+150% en ventas online', '99.9% uptime'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'CNN España'
  },
  {
    id: '2',
    title: 'Campaña SEO Local UDI Chile',
    category: 'SEO',
    description: 'Estrategia SEO local completa que posicionó al cliente en las primeras posiciones de búsquedas geolocalizadas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    results: ['Top 3 en búsquedas locales', '+250% tráfico orgánico', '+180% leads cualificados'],
    technologies: ['SEO Técnico', 'Google My Business', 'Analytics'],
    client: 'UDI Chile'
  },
  {
    id: '3',
    title: 'Rediseño Web Gobierno de Chile',
    category: 'UX/UI Design',
    description: 'Rediseño completo de la experiencia de usuario para mejorar la accesibilidad y usabilidad del portal gubernamental.',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1000&auto=format&fit=crop',
    results: ['+200% tiempo en página', '+150% reducción bounce rate', 'Mejora accesibilidad WCAG 2.1'],
    technologies: ['Figma', 'React', 'Accessibility', 'Performance'],
    client: 'Gobierno de Chile'
  },
  {
    id: '4',
    title: 'Estrategia Social Media Retórica',
    category: 'Social Media',
    description: 'Gestión integral de redes sociales con creación de contenido, community management y campañas publicitarias.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop',
    results: ['+400% crecimiento seguidores', '+300% engagement', '+250% conversiones'],
    technologies: ['Meta Ads', 'Content Strategy', 'Analytics', 'Canva'],
    client: 'Retórica Marketing'
  },
  {
    id: '5',
    title: 'Sistema de Gestión UCV TV',
    category: 'Desarrollo Web',
    description: 'Plataforma de gestión de contenido multimedia con streaming en vivo y biblioteca digital interactiva.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
    results: ['+500% visualizaciones', 'Streaming 24/7 estable', 'Biblioteca de 10k+ contenidos'],
    technologies: ['React', 'Video.js', 'AWS', 'PostgreSQL'],
    client: 'UCV TV'
  },
  {
    id: '6',
    title: 'Transformación Digital DMI Projects',
    category: 'Consultoría',
    description: 'Consultoría estratégica completa para transformación digital, incluyendo automatización de procesos y optimización operativa.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    results: ['+300% eficiencia operativa', '+200% reducción costos', 'ROI 400% en primer año'],
    technologies: ['Process Automation', 'Cloud Migration', 'Data Analytics'],
    client: 'DMI Projects'
  }
];

const categories = ['Todos', 'Desarrollo Web', 'SEO', 'UX/UI Design', 'Social Media', 'Consultoría'];

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <section id="portafolio" className="relative py-32 bg-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Nuestro
              <span className="block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Portafolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Descubre algunos de nuestros proyectos más destacados y los resultados que hemos logrado para nuestros clientes.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500/90 text-white text-sm font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Results Preview */}
                      <div className="flex flex-wrap gap-2">
                        {item.results.slice(0, 2).map((result, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-md border border-green-500/20"
                          >
                            {result}
                          </span>
                        ))}
                        {item.results.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-md">
                            +{item.results.length - 2} más
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                ✕
              </button>

              <div className="p-8">
                {/* Image */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedItem.title}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      Cliente: {selectedItem.client}
                    </p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Resultados Obtenidos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedItem.results.map((result, index) => (
                        <div
                          key={index}
                          className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
                        >
                          <div className="text-green-400 font-bold text-lg">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
