import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
                      className="object-cover brightness-50"
                      priority
                  />
                  <div className="relative z-10 max-w-4xl mx-auto px-4">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">Botto Maquinarias</h1>
                      <p className="text-xl md:text-2xl mb-8">Concesionario de maquinaria agricola</p>
                      <p className="text-xl md:text-2xl mb-8">Crucianelli | Stara</p>
                      <Button asChild size="lg">
                        <Link href="#products">Explora nuestros productos</Link>
                      </Button>
                  </div>
                </section>

                {/* CRUCIANELLI */}
                <section id="products" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-12">Crucianelli</h2>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                          <ProductCard 
                              name="Drillor"
                              description="Gran autonomía y ancho de transporte reducido. Cuenta con un sistema de distribución independiente de semillas y fertilizantes."
                              imageUrl="/drilorrrr.jpg"
                              buttonText="Cotizar Drillor"
                          />
                          <ProductCard
                              name="Gringa"
                              description="Sembradora de grano grueso con tecnología Precision Planting para mayores rendimientos y mejora de la calidad de siembra."
                              imageUrl="/gringa-v.jpg"
                              buttonText="Cotizar Gringa"
                          />
                          <ProductCard
                              name="Plantor"
                              description="Sembradora plantadora de grano grueso con la más moderna tecnología en siembra de precisión."
                              imageUrl="/plantor.jpg"
                              buttonText="Cotizar Plantor"
                          />
                          <ProductCard
                              name="Pionera"
                              description="Excelente calidad de implantación y nuevas tolvas con mayor capacidad. Sembradora de grano fino multipropósito."
                              imageUrl="/pionera.jpg"
                              buttonText="Cotizar Pionera"
                          />
                      </div>
                    </div>
                </section>

                {/* STARA */}
                <section id="products" className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-12">Stara</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <ProductCard
                              name="Drillor"
                              description="Gran autonomía y ancho de transporte reducido. Cuenta con un sistema de distribución independiente de semillas y fertilizantes."
                              imageUrl="/drilorrrr.jpg"
                          />
                          <ProductCard
                              name="Gringa"
                              description="Sembradora de grano grueso con tecnología Precision Planting para mayores rendimientos y mejora de la calidad de siembra."
                              imageUrl="/gringa-v.jpg"
                          />
                      </div>
                    </div>
                </section>

                {/* FEATURED PRODUCTS */}
                <section className="py-16">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Maquinas Populares</h2>
                    <Tabs defaultValue="seeders" className="space-y-8">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="seeders">Nuevo</TabsTrigger>
                            <TabsTrigger value="tractors">Usados</TabsTrigger>
                        </TabsList>
                        <TabsContent value="seeders">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <ProductCard
                                    name="Crucianelli Pionera 3800"
                                    description="Advanced precision seeder for large-scale operations"
                                    imageUrl="/pioneraa.jpg"
                                    specs={["Working width: 12.6m", "Rows: 40", "Row spacing: 315mm"]}
                                />
                                <ProductCard
                                    name="Crucianelli Gringa V"
                                    description="Versatile seeder for various crop types"
                                    imageUrl="/gringa-v.jpg"
                                    specs={["Working width: 9.45m", "Rows: 30", "Row spacing: 315mm"]}
                                />
                                <ProductCard
                                    name="Crucianelli Planter 8000"
                                    description="High-capacity planter for efficient seeding"
                                    imageUrl="/planter-8000.jpg"
                                    specs={["Working width: 11m", "Rows: 24", "Row spacing: 525mm"]}
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="tractors">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <ProductCard
                                    name="PowerTrac 5000"
                                    description="Versatile tractor for medium-sized farms"
                                    imageUrl="/pioneraa.jpg"
                                    specs={["Engine: 100 HP", "Transmission: 16x16", "Lift capacity: 4,500 kg"]}
                                />
                                <ProductCard
                                    name="MegaForce 7500"
                                    description="High-power tractor for demanding tasks"
                                    imageUrl="/gringa-v.jpg"
                                    specs={["Engine: 180 HP", "Transmission: 24x24", "Lift capacity: 8,000 kg"]}
                                />
                                <ProductCard
                                    name="EcoTill 3000"
                                    description="Fuel-efficient tractor for sustainable farming"
                                    imageUrl="/planter-8000.jpg"
                                    specs={["Engine: 75 HP", "Transmission: CVT", "Lift capacity: 3,500 kg"]}
                                />
                            </div>
                        </TabsContent>
                    </Tabs>
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

                {/* USED MACHINES */}
                {/* <section id="used-machines" className="py-16 bg-gray-100">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Usados de Calidad</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProductCard
                          name="Agrometal MX 3321" 
                          description="Sembradora versátil y confiable para fertilización simple, ideal para cultivos extensivos y preparada para un desempeño eficiente en diferentes terrenos."
                          imageUrl="/agrometal-mx-3321.jpg"
                          specs={["Año: 2009", "Cajón Alfalfero","Modelo: Gringa 2452"]}
                        />
                        <ProductCard
                          name="Metalfor Multriple 3200"
                          description="Sembradora de grano fino equipada con motor Deutz de alto rendimiento, diseñada para operaciones precisas y confiables en el campo."
                          imageUrl="/metalfor-multriple-3200.jpg"
                          specs={["Año: 2004", "Motor: Deutz 120 HP","Modelo: 3200" ]}
                        />
                        <ProductCard
                          name="Pulverizadora Praba - AR 3.0"
                          description="Equipo ideal para aplicaciones precisas en grandes extensiones, diseñado para maximizar la eficiencia y la cobertura."
                          imageUrl="/pulverizadora-praba.jpg"
                          specs={["Año: 2013", "Motor: Deutz 120 HP","Barra 28 mts"]}
                        />
                    </div>
                  </div>
                </section> */}

                {/* Technology */}
                <section id="used-machines" className="py-16 bg-gray-100">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Tecnología de Siembra</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProductCard
                          name="Monitor Orizon" 
                          description=""
                          imageUrl="/orizon-recortado.png"
                          specs={["Pantalla táctil 10.1″", "Conexión WIFI","El mejor control de siembra unificado", "Índice de dobles y fallas", "Índice de calidad de dosificación", "Siembra y Fertilización variable", "Corte línea a línea"]}
                        />
                        <ProductCard
                          name="Map 7 Elite"
                          description=""
                          imageUrl="/Map-7.png"
                          specs={["Sensores inteligentes. Semillas, fertilizante, rotación, RPM, tolva presión capacidad de control de hasta 120 sensores de semillas y fertilizantes.", "Preciso conteo de chía y pastura","Densidad de Siembra. Indica la cantidad de semillas por metro y por hectárea que se está sembrando." ]}
                        />
                        <ProductCard
                          name="Consola Plantor"
                          description="Mando a distancia manual de dosis de fertilizantes."
                          imageUrl="/consola-plantor.png"
                          specs={["Trabajo", "Plegado","Nivel", "Marcador"]}
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