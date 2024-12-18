import { Users, Award, Warehouse } from 'lucide-react'

import { Contactanos } from '../components/Contactanos'
import { YouTubeCarousel } from '../components/YoutubeCarousel'
import Image from 'next/image'


export default function Nosotros() {
    return (
        <div className="bg-white">
            {/* <Hero /> */}

            <section className="relative h-[600px] flex items-center justify-center text-center text-white">
                <Image
                    src="/fondo-nosotros-2.jpg"
                    alt="Agriculture field with Crucianelli seeder"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Sobre Nosotros</h1>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16">
                <div className="max-w-7xl mx-auto space-y-24">

                    {/* Texto destacado */}
                    <section className="text-center mb-16">
                        <div className="flex justify-center items-center space-x-4">
                            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                                <strong className=''>37 AÑOS</strong> AVALAN NUESTRO COMPROMISO CON EL HOMBRE DE CAMPO.
                            </h2>
                        </div>
                    </section>

                    {/* Información de la empresa */}
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                            Nuestra Historia
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Somos una empresa familiar, de segunda generación con <strong>37 años</strong> de trayectoria en el rubro, 
                            dedicada a la comercialización de maquinarias agrícolas. Nuestro enfoque es estar a disposición 
                            de nuestro cliente, llevando a cabo nuestros valores de compromiso y transparencia, ofreciendo 
                            calidad de atención en venta y servicio de posventa.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Siendo concesionario premium de la marca líder de sembradoras de Argentina, particularmente 
                            en la línea Air Drill, nos posicionamos como uno de los concesionarios con mayor cantidad 
                            de unidades vendidas con este sistema. En el año 2022, nos incorporamos a la red de concesionarios 
                            Stara, una empresa brasilera de evolución constante, con el fin de brindar un amplio abanico de 
                            productos de tecnología e innovación combinado con alta productividad y rendimiento operativo.
                        </p>
                    </section>

                    {/* Valores destacados */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Warehouse className="w-12 h-12 text-red-600 mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Amplia Gama</h4>
                            <p className="text-gray-600">
                                Ofrecemos una extensa selección de maquinaria para todas las necesidades agrícolas.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Users className="w-12 h-12 text-blue-500 mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Atención Personalizada</h4>
                            <p className="text-gray-600">
                                Nuestro equipo de expertos brinda asesoramiento técnico y soporte continuo.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Award className="w-12 h-12 text-yellow-500 mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Calidad Garantizada</h4>
                            <p className="text-gray-600">
                                Trabajamos con las mejores marcas para asegurar la excelencia en cada producto.
                            </p>
                        </div>
                    </section>

                    {/* Notas Youtube */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-semibold text-center mb-8">Entrevistas Destacadas</h3>
                        <YouTubeCarousel />
                    </section>

                </div>
            </main>

            {/* CALL TO ACTION */}
            <Contactanos />
        </div>
    )
}

