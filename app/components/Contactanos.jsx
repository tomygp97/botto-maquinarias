import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const Contactanos = () => {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">¿Está listo para conseguir su equipo agrícola?</h2>
                <p className="text-xl mb-8">Contáctenos hoy para obtener asesoramiento experto y precios competitivos en nuestra gama de máquinas nuevas y usadas.</p>
                <Button asChild size="lg" variant="secondary">
                    <Link href="/contacto">Contáctenos</Link>
                </Button>
            </div>
        </section>
    )
}
