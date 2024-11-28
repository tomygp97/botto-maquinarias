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

