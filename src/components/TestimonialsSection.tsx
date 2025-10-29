import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    position: 'Directora de Marketing',
    company: 'CNN España',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'AIR Consulting transformó completamente nuestra presencia digital. Su estrategia de SEO nos posicionó en los primeros resultados de búsqueda y aumentamos nuestro tráfico orgánico en un 300%.',
    rating: 5,
    service: 'SEO y Marketing Digital'
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    position: 'CEO',
    company: 'UDI Chile',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'El desarrollo web que realizaron para nuestra plataforma política fue excepcional. Tecnología de vanguardia, diseño moderno y resultados que superaron nuestras expectativas.',
    rating: 5,
    service: 'Desarrollo Web'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    position: 'Gerente de Comunicación',
    company: 'Gobierno de Chile',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'Su gestión de redes sociales y estrategia de contenido nos ayudó a conectar mejor con nuestra comunidad. El engagement aumentó significativamente.',
    rating: 5,
    service: 'Social Media Management'
  },
  {
    id: '4',
    name: 'Javier López',
    position: 'Director Ejecutivo',
    company: 'Retórica Marketing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'La consultoría estratégica de AIR Consulting nos dio la dirección que necesitábamos. Su visión internacional y experiencia en Chile-España fue invaluable.',
    rating: 5,
    service: 'Consultoría Estratégica'
  },
  {
    id: '5',
    name: 'Laura Sánchez',
    position: 'Directora de Proyectos',
    company: 'UCV TV',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'Su expertise en marketing político y desarrollo de plataformas interactivas elevó significativamente nuestra capacidad de comunicación institucional.',
    rating: 5,
    service: 'Marketing Político'
  },
  {
    id: '6',
    name: 'Roberto Fernández',
    position: 'Gerente General',
    company: 'DMI Projects',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    quote: 'La transformación digital que implementaron en nuestra empresa logística fue revolucionaria. Ahora somos más eficientes y competitivos.',
    rating: 5,
    service: 'Transformación Digital'
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-orange-500' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/50 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Quote mark */}
      <div className="absolute top-6 right-6 text-orange-500/20 text-6xl font-serif leading-none">"</div>

      <div className="relative z-10">
        {/* Rating */}
        <div className="mb-6">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Quote */}
        <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">
          "{testimonial.quote}"
        </blockquote>

        {/* Service tag */}
        <div className="mb-6">
          <span className="inline-block bg-orange-500/10 text-orange-400 text-sm font-medium px-3 py-1 rounded-full border border-orange-500/20">
            {testimonial.service}
          </span>
        </div>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.position}</p>
            <p className="text-orange-500 font-medium text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visibleTestimonials = testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3);

  return (
    <section id="testimonios" className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

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
            Lo que dicen nuestros
            <span className="block bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empresas líderes confían en nosotros para transformar su presencia digital y alcanzar resultados excepcionales.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${currentIndex}-${testimonial.id}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-orange-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ver testimonios ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-400 text-sm">Proyectos Completados</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-400 text-sm">Satisfacción Cliente</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Empresas Líderes</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Soporte Continuo</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
