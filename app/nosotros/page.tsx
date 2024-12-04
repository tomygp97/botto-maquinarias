import { ArrowRight, Tractor, Users, Award } from 'lucide-react'
import { Hero } from './components/Hero'

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            <div>
                <Hero />
            </div>
            <main className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h1>
                <div className="max-w-7xl mx-auto space-y-24">
                    <section className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Victor H. Botto Maquinaria</h2>
                        <p className="text-gray-600">
                            Somos líderes en la venta y distribución de maquinaria agrícola de alta calidad. 
                            Con años de experiencia, nos dedicamos a impulsar la eficiencia y productividad 
                            del sector agrícola en toda la región.
                        </p>
                    </section>
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
                        <p className="text-gray-600">
                            Proporcionar soluciones innovadoras y confiables en maquinaria agrícola, 
                            contribuyendo al desarrollo sostenible del sector y al éxito de nuestros clientes.
                        </p>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <Tractor className="w-12 h-12 text-gray-600 mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Amplia Gama</h4>
                            <p className="text-gray-600">Ofrecemos una extensa selección de maquinaria para todas las necesidades agrícolas.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Users className="w-12 h-12 text-gray-600 mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Atención Personalizada</h4>
                            <p className="text-gray-600">Nuestro equipo de expertos brinda asesoramiento técnico y soporte continuo.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Award className="w-12 h-12 text-gray-600 mb-4" />
                            <h4 className="text-lg font-semibold mb-2">Calidad Garantizada</h4>
                            <p className="text-gray-600">Trabajamos con las mejores marcas para asegurar la excelencia en cada producto.</p>
                        </div>
                    </section>

                    {/* Opcion 1 Video al centro */}
                    <section className="text-center">
                        <h3 className="text-xl font-semibold mb-4">Nota Especial</h3>
                        <p className="text-gray-600 mb-6">
                            Conoce más sobre nosotros a través de esta nota especial que destaca nuestro compromiso y visión.
                        </p>
                        <div className="mx-auto max-w-[90%] md:max-w-[80%] rounded-lg shadow-lg overflow-hidden">
                            <video
                                className="w-full h-auto"
                                controls
                                preload="auto"
                            >
                                <source src="/hernan-arolfo-y-emiliano-botto.mp4" type="video/mp4" />
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                    </section>

                    {/* Opcion 2 Video y texto en 2 columnas */}
                    {/* <section className="py-16 bg-gray-50">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <h3 className="text-center text-2xl font-semibold mb-4">Nota Especial</h3>
                                <p className="text-center text-gray-600 mb-6">
                                    Descubre más sobre nuestra visión y compromiso a través de esta nota especial, 
                                    destacando nuestra pasión por la excelencia en maquinaria agrícola.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg overflow-hidden" style={{ maxWidth: '240px', maxHeight: '426px' }}>
                                    <video
                                        className="w-full h-auto"
                                        controls
                                        preload="auto"
                                    >
                                        <source src="/nota-botto-maquinarias.mp4" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de videos.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* Opcion 3 Video izq, Lista derecha */}
                    {/* <section className="py-16 bg-gray-50">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex justify-center">
                                <div className="rounded-lg shadow-lg overflow-hidden" style={{ maxWidth: '240px', maxHeight: '426px' }}>
                                    <video
                                        className="w-full h-auto"
                                        controls
                                        preload="auto"
                                    >
                                        <source src="/nota-botto-maquinarias.mp4" type="video/mp4" />
                                        Tu navegador no soporta la reproducción de videos.
                                    </video>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Nuestro Compromiso</h3>
                                <ul className="space-y-4 text-gray-600">
                                    <li className="flex items-start">
                                        <Award className="w-5 h-5 text-gray-800 mr-3" />
                                        Excelencia en maquinaria agrícola.
                                    </li>
                                    <li className="flex items-start">
                                        <Users className="w-5 h-5 text-gray-800 mr-3" />
                                        Atención personalizada para nuestros clientes.
                                    </li>
                                    <li className="flex items-start">
                                        <Tractor className="w-5 h-5 text-gray-800 mr-3" />
                                        Innovación y tecnología al servicio del campo.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}

                    {/* Opcion 4 Fondo decorativo */}
                    {/* <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-100 relative">
                        <div className="container mx-auto text-center">
                            <h3 className="text-2xl font-semibold mb-4">Nota Especial</h3>
                            <p className="text-gray-600 mb-6">
                                Conoce nuestra pasión y compromiso por la excelencia.
                            </p>
                            <div className="relative inline-block mx-auto rounded-lg shadow-lg overflow-hidden" style={{ maxWidth: '240px', maxHeight: '426px' }}>
                                <video
                                    className="w-full h-auto"
                                    controls
                                    preload="auto"
                                >
                                    <source src="nota-botto-maquinarias.mp4" type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            </div>
                        </div>
                    </section> */}


                    <div className="text-center">
                        <a href="/contacto" className="inline-flex items-center text-gray-600 hover:text-gray-700 font-semibold">
                            Contáctenos
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

