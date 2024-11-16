'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#a9a9a9]' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-white text-2xl font-bold">
                    <Image src="/logo.png" alt="Logo" width={250} height={250} />
                </Link>
                <div className="hidden md:flex space-x-4">
                    <NavLink href="/">Inicio</NavLink>
                    <NavLink href="/nosotros">Nosotros</NavLink>
                    <NavLink href="/productos">Productos</NavLink>
                    <NavLink href="/contacto">Contacto</NavLink>
                </div>
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#a9a9a9]">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <NavLink href="/" onClick={toggleMenu}>Inicio</NavLink>
                        <NavLink href="/nosotros" onClick={toggleMenu}>Nosotros</NavLink>
                        <NavLink href="/productos" onClick={toggleMenu}>Productos</NavLink>
                        <NavLink href="/contacto" onClick={toggleMenu}>Contacto</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <Link
        href={href}
        className="text-white hover:text-gray-200 transition duration-300"
        onClick={onClick}
        >
            {children}
        </Link>
    )
}