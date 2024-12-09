import { Tractor, Settings, Wrench, Monitor } from "lucide-react";
import { LucideIcon } from "lucide-react";


export const productosDestacados = [
    {
        id: 1,
        title: "Sembradora Drilor",
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
        description: "Ofrecemos maquinaria de última tecnología, <b>usada</b> y <b>nueva</b>, para el sector agrícola.",
        Icon: Tractor,
    },
    {
        id: 2,
        title: "Repuestos",
        description: "Amplia gama de repuestos de calidad garantizada.",
        Icon: Settings,
    },
    {
        id: 3,
        title: "Servicio Postventa",
        description: "Aseguramos el óptimo desempeño de tus equipos con soporte técnico especializado.",
        Icon: Wrench,
    },
    {
        id: 4,
        title: "Tecnología",
        description: "Productos innovadores para optimizar la agricultura con tecnología avanzada.",
        Icon: Monitor,
    },
];
