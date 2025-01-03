import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "../components/ProductCard"
import { Contactanos } from '../components/Contactanos'


export default function Productos() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">

              {/* HERO SECTION */}
                <section className="relative h-[600px] flex items-center justify-center text-center text-white">
                  <Image
                      src="/fondo-productos.jpg"
                      alt="Agriculture field with Crucianelli seeder"
                      fill
                      className="object-cover"
                      priority
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                  <div className="relative z-10 max-w-4xl mx-auto px-4">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">Botto Maquinarias</h1>
                      <p className="text-xl md:text-2xl mb-8">Concesionario de maquinaria agricola</p>
                      <p className="text-xl md:text-2xl mb-8">Crucianelli | Stara</p>
                      <Button asChild size="lg">
                        <Link href="#crucianelli">Explora nuestros productos</Link>
                      </Button>
                  </div>
                </section>

                {/* CRUCIANELLI */}
                  <section id="crucianelli" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Crucianelli</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <ProductCard 
                                name="Drillor"
                                description="Gran autonomía y ancho de transporte reducido. Cuenta con un sistema de distribución independiente de semillas y fertilizantes."
                                imageUrl="/drilorrrr.jpg"
                                buttonText="Cotizar Drillor"
                                whatsappNumber='5493406460332'
                            />
                            <ProductCard
                                name="Gringa"
                                description="Sembradora de grano grueso con tecnología Precision Planting para mayores rendimientos y mejora de la calidad de siembra."
                                imageUrl="/gringa-v.jpg"
                                buttonText="Cotizar Gringa"
                                whatsappNumber='5493406460332'
                            />
                            <ProductCard
                                name="Plantor"
                                description="Sembradora plantadora de grano grueso con la más moderna tecnología en siembra de precisión."
                                imageUrl="/plantor.jpg"
                                buttonText="Cotizar Plantor"
                                whatsappNumber='5493406460332'
                            />
                        </div>
                        <div className="flex justify-center mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                                <ProductCard
                                    name="Pionera"
                                    description="Excelente calidad de implantación y nuevas tolvas con mayor capacidad. Sembradora de grano fino multipropósito."
                                    imageUrl="/pionera.jpg"
                                    buttonText="Cotizar Pionera"
                                    whatsappNumber='5493406460332'
                                />
                                <ProductCard
                                    name="Mixia"
                                    description="La nueva sembradora de la familia Drilor ofrece un mix de prestaciones perfecto y un rendimiento insuperable."
                                    imageUrl="/mixia.jpg"
                                    buttonText="Cotizar Mixia"
                                    whatsappNumber='5493406460332'
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* STARA */}
                <section id="stara" className="py-16 bg-gray-100">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Stara</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                      <ProductCard
                          name="Hercules 6.0"
                          description="El distribuidor Hércules tiene excelente calidad de aplicación y precisión en la dosis, alto rendimiento operativo, con resultados en la plantación más provechosos."
                          imageUrl="/stara-hercules-6.0.jpg"
                          whatsappNumber='5493406460332'
                      />
                      <ProductCard
                          name="Imperador 3000 y 4000"
                          description="El autopropulsado Imperador 3000 y 4000 de Stara ofrece la mejor eficiencia en pulverización, resultado de la combinación de las tecnologías innovadoras y de su calidad de aplicación ya comprobada."
                          imageUrl="/imperador-3000.jpg"
                          whatsappNumber='5493406460332'
                      />
                      <ProductCard
                          name="Imperador 3.0"
                          description="La mayor eficiencia en pulverización, la mayor precisión en la distribución y una uniformidad excelente en la siembra"
                          imageUrl="/stara-imperador-3.0.jpg"
                          whatsappNumber='5493406460332'
                      />
                      <ProductCard
                          name="Bruttus 12000"
                          description="El distribuidor por gravedad Bruttus 12000 garantiza la excelente uniformidad de aplicación y precisión en la distribución de enmiendas y fertilizantes granulados."
                          imageUrl="/stara-bruttus-12000.jpg"
                          whatsappNumber='5493406460332'
                      />
                      <ProductCard
                          name="Reboke ninja"
                          description="Las tolvas agrícolas Reboke Ninja están desarrolladas para el transporte de granos y alcanzan alto rendimiento de trabajo."
                          imageUrl="/stara-reboke-ninja.jpg"
                          whatsappNumber='5493406460332'
                      />
                      <ProductCard
                          name="Hércules 10000 Inox"
                          description="El distribuidor de arrastre Hércules es ideal para distribuir enmiendas, fertilizantes y semillas, con excelente uniformidad y calidad de distribución."
                          imageUrl="/stara-hercules-10000-inox.jpg"
                          whatsappNumber='5493406460332'
                      />
                    </div>
                    <div className="flex justify-center mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-xl">
                        <ProductCard
                            name="Brava +"
                            description="La plataforma Brava + cosecha las más diversificadas variedades de maíz con eficiencia, calidad y seguridad. El carenado lateral evita la pérdida de espigas en los extremos, lo que otorga eficiencia durante la cosecha."
                            imageUrl="/stara-brava.jpg"
                            whatsappNumber='5493406460332'
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* USED MACHINES */}
                <section className="py-16 bg-primary text-primary-foreground">
                  <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">¿Quieres conocer nuestras máquinas usadas?</h2>
                    <p className="text-xl mb-8">Visita nuestros sitios de venta</p>
                    <div className="flex justify-center space-x-4">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="https://www.agroads.com.ar/e/victor-botto-maquinarias/?fbclid=PAY2xjawHD6qtleHRuA2FlbQIxMAABpsA4Y8fvvfK2bf1JVH9oY_hJ3aNnBpenvdFEN9p5gg3pI8enMGz-twT5qQ_aem_cEGDcx2UFlWHWpn-NnmoRw" target="_blank">
                            Agroads
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="secondary">
                        <Link href="https://www.agrofy.com.ar/victor-h-botto-maquinarias?fbclid=PAY2xjawHD6uJleHRuA2FlbQIxMAABpqSp_LqVBn1qI4VwtlVspn6M2VQA7jwCgGHv6NFvzD7cikTqIOonWiRqEg_aem_6d1UGvFbAHEMHcbNtWkWnQ" target="_blank">
                          Agrofy
                        </Link>
                      </Button>
                    </div>
                  </div>
                </section>

                {/* Technology */}
                <section id="leaf" className="py-16 bg-gray-100">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Tecnología de Siembra</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <ProductCard
                        name="Monitor Orizon" 
                        description=""
                        imageUrl="/orizon-recortado.png"
                        specs={["Pantalla táctil 10.1″", "Conexión WIFI","El mejor control de siembra unificado", "Índice de dobles y fallas", "Índice de calidad de dosificación", "Siembra y Fertilización variable", "Corte línea a línea"]}
                        whatsappNumber='5493406460332'
                      />
                      <ProductCard
                        name="Monitores de siembra Map 7"
                        description="Conocé los modelos Lite, Plus y Pro."
                        imageUrl="/Map-7.png"
                        specs={["Sensores inteligentes. Semillas, fertilizante, rotación, RPM, tolva presión capacidad de control de hasta 120 sensores de semillas y fertilizantes.", "Preciso conteo de chía y pastura","Densidad de Siembra. Indica la cantidad de semillas por metro y por hectárea que se está sembrando." ]}
                        whatsappNumber='5493406460332'
                      />
                      <ProductCard
                        name="Consola Plantor"
                        description="Mando a distancia manual de dosis de fertilizantes."
                        imageUrl="/consola-plantor.png"
                        specs={["Trabajo", "Plegado","Nivel", "Marcador"]}
                        whatsappNumber='5493406460332'
                      />
                      <ProductCard
                        name="DOSIFY - kit de conversión hidráulica para Drilor"
                        description="Se trata de un sistema que te permite cambiar tu dosifcación de mecánica a hidráulica, permitiéndote mejorar la colocación de semillas y fertilizantes en tu tierra."
                        imageUrl="/dosify.jpg"
                        // specs={["Conjunto motor dosifcador semillas", "Conjunto motor dosifcador Fertilizante","Kit de Mangueras y accesorios Hidráulicos", "Marcador"]}
                        whatsappNumber='5493406460332'
                      />
                      <ProductCard
                        name="Cuchilla fertilizadora"
                        description="Nuestra cuchilla fertilizante absorbe las diferentes durezas del suelo e incorpora el fertilizante granulado en la línea de siembra en extremas condiciones de volumen de rastrojo."
                        imageUrl="/cuchilla.png"
                        // specs={["Conjunto motor dosifcador semillas", "Conjunto motor dosifcador Fertilizante","Kit de Mangueras y accesorios Hidráulicos", "Marcador"]}
                        whatsappNumber='5493406460332'
                      />
                      <ProductCard
                        name="Doble disco fertilizador"
                        description="El doble disco fertilizador es una solución eficaz y versátil para aplicar fertilizantes en la siembra directa, permitiendo aportar altas dosis con una óptima precisión en la colocación de nutrientes y adaptándose a diferentes condiciones de suelo y tipos de cultivo."
                        imageUrl="/doble-disco.png"
                        // specs={["Conjunto motor dosifcador semillas", "Conjunto motor dosifcador Fertilizante","Kit de Mangueras y accesorios Hidráulicos", "Marcador"]}
                        whatsappNumber='5493406460332'
                      />
                    </div>
                  </div>
                </section>

                {/* CALL TO ACTION */}
                <Contactanos />

            </main>
        </div>
    )
}