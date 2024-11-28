import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Victor H. Botto</h3>
                    <p className="text-sm text-gray-600">
                        Somos pioneros en la industria agrícola. Contruimos un futuro sostenible y sustenable.
                    </p>
                </div>
                <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-4">Acceso rápido</h4>
                    <ul className="space-y-2 text-sm">
                    <li><Link href="/nosotros" className="text-gray-600 hover:text-gray-700">Nosotros</Link></li>
                    <li><Link href="/productos" className="text-gray-600 hover:text-gray-700">Productos</Link></li>
                    <li><Link href="/servicios" className="text-gray-600 hover:text-gray-700">Servicios</Link></li>
                    <li><Link href="/contacto" className="text-gray-600 hover:text-gray-700">Contacto</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-4">Contáctanos</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                    <li>123 calle ejemplo, Rivadavia</li>
                    <li>contacto@victorhbotto.com</li>
                    <li>+54 (555) 123-4567</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-4">Seguinos en</h4>
                    <div className="flex space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-gray-700">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-700">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-gray-700">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    </div>
                </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Victor H. Botto Maquinarias. Todos los derechos reservados.
                </p>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                <Link href="/privacidad" className="text-xs text-gray-500 hover:text-gray-700">Política de privacidad</Link>
                <Link href="/terminos" className="text-xs text-gray-500 hover:text-gray-700">Términos y condiciones</Link>
                </div>
            </div>
        </footer>
    )
}

