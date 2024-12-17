'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { productosDestacados, servicios } from './constants'
import { Contactanos } from './components/Contactanos'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/reel-mixia-campo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

        {/* Logo */}
        <div className="relative z-20 flex items-baseline justify-center mt-40 h-full">
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: isScrolled ? 0 : 1,
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={450}
              height={450}
              className="max-w-full"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isScrolled ? 0 : [0, -10, 0],
            opacity: isScrolled ? 0 : 1,
          }}
          transition={{
            y: { repeat: Infinity, duration: 1, ease: "easeInOut" },
            opacity: { duration: 0.3 },
          }}
        >
          <ArrowDown className="text-white w-10 h-10" />
        </motion.div>
      </div>

      {/* Sobre Nosotros */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Quiénes Somos?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Más de 30 años siendo el aliado de confianza para el crecimiento agrícola, 
          ofreciendo soluciones personalizadas y de calidad.
        </p>
        <Button asChild
          className='px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-black transition'
        >
          <Link href="/nosotros">Conócenos</Link>
        </Button>
      </section>

      {/* Nuestros Servicios */}
      <section className="relative py-16 bg-cover"
        style={{
          // backgroundImage: "url('/equipo.jpg')",
          backgroundImage: "url('/Crucianelli-Pionera.jpg')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-30"></div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // viewport={{ once: true }}
          className="relative container mx-auto text-center z-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Nuestros Servicios
          </h2>
        </motion.div>
        
        {/* Contenido principal */}
        <div className="relative container mx-auto text-white text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {servicios.map(({ id, title, description, Icon }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                // viewport={{ once: true }}
                className="relative text-center p-6 bg-white bg-opacity-90 rounded shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4">
                  <Icon className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                {/* <p className="text-gray-600">{description}</p> */}
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {productosDestacados.map((producto) => (
              <div key={producto.id} className="relative group overflow-hidden rounded shadow-md">
                {/* <h3 className="text-2xl font-bold text-center mb-8">
                  {producto.title}
                </h3> */}
                <motion.div
                  className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                >
                  <Image
                    src={producto.image}
                    alt={producto.alt}
                    className="w-full h-64 object-cover"
                    width={300}
                    height={300}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Link href={`${producto.link}`}>
                    <button className="px-4 py-2 font-bold rounded bg-white text-black hover:bg-gray-200 transition">
                      Ver Más
                    </button>
                  </Link>
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <Contactanos />
    </>
  )
}
