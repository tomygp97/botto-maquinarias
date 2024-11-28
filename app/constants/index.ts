import { Tractor, Settings, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";


export const productosDestacados = [
    {
        id: 1,
        title: "Drilorrrr",
        image: "/drilorrrr.jpg",
        alt: "Drilorrrr",
    },
    {
        id: 2,
        title: "Pionera",
        image: "/pioneraa.jpg",
        alt: "Pionera",
    },
    {
        id: 3,
        title: "Plantor",
        image: "/plantor.jpg",
        alt: "Plantor",
    },
];

export const servicios: {
    id: number;
    title: string;
    description: string;
    Icon: LucideIcon;
}[] = [
    {
        id: 1,
        title: "Venta de máquinas agrícolas",
        description: "Ofrecemos maquinaria de última tecnología para satisfacer las necesidades del campo.",
        Icon: Tractor,
    },
    {
        id: 2,
        title: "Repuestos y máquinas usadas",
        description: "Amplia gama de repuestos y opciones de maquinaria usada de calidad garantizada.",
        Icon: Settings,
    },
    {
        id: 3,
        title: "Servicio técnico",
        description: "Contamos con un equipo experto para mantener y reparar tus equipos agrícolas.",
        Icon: Wrench,
    },
];
