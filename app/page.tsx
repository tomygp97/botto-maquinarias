'use client'

// import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        {isMounted && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            {/* <source src="/background-video.mp4" type="video/mp4" /> */}
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 flex items-baseline mt-20 justify-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            VICTOR H. BOTTO MAQUINARIAS
          </h1>
        </div>
      </div>

      {/* Sobre Nosotros */}
      <section className="container mx-auto py-8 grid grid-cols-3 gap-4">
        <h2 className='col-span-3 text-2xl font-bold mb-4 text-center'>Sobre Nosotros</h2>
        <div className='col-span-2'>
          <div className='mb-4'>
            <h3 className='text-2xl font-bold mb-8'>Somos tu aliado de confianza para una producción agrícola ininterrumpida</h3>
            <ul className='list-disc list-inside space-y-4'>
              <li>MÁS DE 30 AÑOS DE TRAYECTORIA DEDICADOS A LA COMERCIALIZACIÓN DE SEMBRADORAS.</li>
              <li>GRAN CONOCIMIENTO EN EL PRODUCTO QUE VENDEMOS, LO QUE HACE QUE TENGAMOS ALTA CAPACIDAD DE RESOLUCIÓN DE PROBLEMAS.</li>
              <li>CANTIDAD DE SEMBRADORAS VENDIDAS A LO LARGO Y ANCHO DEL PAÍS.</li>
              <li>ESPECIALISTAS EN SISTEMAS DE SIEMBRA AIR DRILL Y AIR PLANTER (SOMOS UNO DE LOS CONCESIONARIOS DE LA RED DE CRUCIANELLI QUE MÁS CANTIDAD DE ESTE SEGMENTO DE PRODUCTO LLEVA VENDIDAS).</li>
            </ul>
          </div>

        </div>
        {/* <Image  src="/foto-vertical.jpg" alt="Imagen" width={3000} height={3000} className='justify-self-center shadow-sm' /> */}
        <p className='col-span-3'>
        Mauris fringilla nulla a felis suscipit hendrerit. Donec urna quam, dapibus vel elementum et, semper quis urna. In vestibulum odio et sodales sollicitudin. Vestibulum malesuada facilisis diam cursus auctor. Vivamus et ipsum ac lorem aliquam tempus sed vel justo.
        </p>
      </section>
    </>
  )
}
