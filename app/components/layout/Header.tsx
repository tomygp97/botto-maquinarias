'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

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
        <nav className={`fixed w-full z-50 transition-all duration-300 box-border ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-white text-2xl font-bold">
                    {/* Logo animado */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: isScrolled ? 1 : 0,
                            scale: isScrolled ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src="/logo.png" alt="Logo" width={250} height={250} />
                    </motion.div>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <NavLink href="/" isScrolled={isScrolled}>Inicio</NavLink>
                    <NavLink href="/nosotros" isScrolled={isScrolled}>Nosotros</NavLink>
                    <NavLink href="/productos" isScrolled={isScrolled}>Productos</NavLink>
                    <NavLink href="/contacto" isScrolled={isScrolled}>Contacto</NavLink>
                </div>
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#a9a9a9]">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <NavLink href="/" onClick={toggleMenu} isScrolled={isScrolled}>Inicio</NavLink>
                        <NavLink href="/nosotros" onClick={toggleMenu} isScrolled={isScrolled}>Nosotros</NavLink>
                        <NavLink href="/productos" onClick={toggleMenu} isScrolled={isScrolled}>Productos</NavLink>
                        <NavLink href="/contacto" onClick={toggleMenu} isScrolled={isScrolled}>Contacto</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children, onClick, isScrolled }: { href: string; children: React.ReactNode; onClick?: () => void; isScrolled: boolean }) {
    return (
        <Button asChild
            variant="ghost"
        >
            <Link
                href={href}
                className={`transition duration-300 ${isScrolled ? 'text-white' : 'text-black'}`}
                onClick={onClick}
            >
            
                {children}
            </Link>
        </Button>
    )
}
