"use client"

import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// import { toast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail, Send, Pin } from 'lucide-react'
import { Label } from '@/components/ui/label'

type ContactData = {
    phone: string[];
    email: string;
};

type Contacts = {
    [key: string]: ContactData;
};

const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Ingresa un correo electrónico válido.",
    }),
    phone: z.string().min(10, {
        message: "Ingresa un número de teléfono válido.",
    }),
    message: z.string().min(10, {
        message: "El mensaje debe tener al menos 10 caracteres.",
    }),
})

const contacts: Contacts = {
    Gerencia: {
        phone: ["3406-430339"],
        email: "info@bottomaquinarias.com",
    },
    Ventas: {
        phone: ["3406-430332", "3406-641249"],
        email: "ventas@bottomaquinarias.com",
    },
    Repuestos: {
        phone: ["3406-427559"],
        email: "repuestos@bottomaquinarias.com",
    },
    Posventa: {
        phone: ["3406-401597"],
        email: "posventa@bottomaquinarias.com",
    },
};

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedContact, setSelectedContact] = useState("Gerencia")


    const handleSelectChange = (value: string) => {
        setSelectedContact(value);
    };

    const selectedData = contacts[selectedContact];

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
        setIsSubmitting(true);
        try {
            await emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            {
                name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message,
                recipient: "info@bottomaquinarias.com",
            },
            process.env.NEXT_PUBLIC_PUBLIC_KEY
            );
            alert("Mensaje enviado correctamente.");
            form.reset();
        } catch (error) {
            console.error("Error enviando el mensaje:", error);
            alert("Hubo un error al enviar el mensaje.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
                <Image
                    src="/nosotros-hero-mobile.jpg"
                    alt="Agriculture field"
                    fill
                    style={{ objectFit: 'cover' }}
                /> 
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
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

                {/* CONTACT INFORMATION */}
                <motion.div
                    className="mt-6 flex flex-col space-y-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Label>Selecciona un Área</Label>
                    <div className="flex items-center space-x-2">
                        <Pin className="text-primary h-5 w-5" />
                        <Select onValueChange={handleSelectChange} defaultValue={selectedContact}>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Selecciona un departamento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Departamentos</SelectLabel>
                                    {Object.keys(contacts).map((contact) => (
                                    <SelectItem key={contact} value={contact}>
                                        {contact}
                                    </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </motion.div>
                <motion.div 
                        className="mt-6 flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <MapPin className="text-primary h-5 w-5" />
                        <p>Ruta 13 Av. Urquiza s/n, María Juana 2445, Santa Fe, Argentina</p>
                    </motion.div>
                {/* PHONE NUMBERS */}
                <motion.div
                    className="mt-4 flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                <Phone className="text-primary h-5 w-5" />
                <div>
                    {selectedData.phone.map((number: string) => (
                        <p key={number}>{number}</p>
                    ))}
                </div>
                </motion.div>
                {/* EMAIL */}
                <motion.div
                className="mt-4 flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                >
                <Mail className="text-primary h-5 w-5" />
                <p>{selectedData.email}</p>
                </motion.div>

            </div>
        </div>
    )
}

