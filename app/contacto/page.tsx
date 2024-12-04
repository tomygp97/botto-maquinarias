"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { toast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
        setIsSubmitting(false)
        // toast({
        //   title: "Message Sent",
        //   description: "We've received your message and will get back to you soon.",
        // })
        form.reset()
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
                <Image
                    src="/nosotros-hero-mobile.jpg"
                    alt="Agriculture field"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Ponte en Contacto
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-center max-w-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Estamos aquí para responder cualquier pregunta que pueda tener sobre nuestros equipos agrícolas.
                    </motion.p>
                </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Victor Botto" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="correo@ejemplo.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="(+54) 456-7890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Como podemos ayudarte?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <motion.div
                                    className="mr-2"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                    <Send className="h-4 w-4" />
                                </motion.div>
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                            </>
                        )}
                        </Button>
                    </form>
                </Form>
                <div className="mt-12 space-y-4">
                    <motion.div 
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <MapPin className="text-primary h-5 w-5" />
                        <p>Ruta 13 Av. Urquiza s/n, María Juana 2445, Santa Fe, Argentina</p>
                    </motion.div>
                    <motion.div 
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Phone className="text-primary h-5 w-5" />
                        <p>(+54) 456-7890</p>
                    </motion.div>
                    <motion.div 
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Mail className="text-primary h-5 w-5" />
                        <p>botto@maquinarias.com</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

