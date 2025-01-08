import { Tractor, Settings, Wrench, Monitor } from "lucide-react";
import { LucideIcon } from "lucide-react";


export const productosDestacados = [
    {
        id: 1,
        title: "Sembradora Drilor",
        image: "/drilorrrr.jpg",
        alt: "Drilorrrr",
        link: "/productos#crucianelli"
    },
    {
        id: 2,
        title: "Imperador 3000 - 4000",
        image: "/imperador-3000.jpg",
        alt: "Pionera",
        link: "/productos#stara",

    },
    {
        id: 3,
        title: "Monitor Orizon",
        image: "/orizon-recortado.png",
        alt: "Monitor Orizon",
        link: "/productos#leaf"
    },
];

export const servicios: {
    id: number;
    title: string;
    description: string;
    link: string;
    isExternal?: boolean;
    Icon: LucideIcon;
}[] = [
    {
        id: 1,
        title: "Venta de máquinas agrícolas",
        description: "Ofrecemos maquinaria de última tecnología, <b>usada</b> y <b>nueva</b>, para el sector agrícola.",
        link: "/productos#crucianelli",
        Icon: Tractor,
    },
    {
        id: 2,
        title: "Repuestos",
        description: "Amplia gama de repuestos de calidad garantizada.",
        link: "https://wa.me/5493406427559?text=Hola,%20tengo%20una%20consulta%20sobre%20repuestos",
        Icon: Settings,
        isExternal: true
    },
    {
        id: 3,
        title: "Servicio Postventa",
        description: "Aseguramos el óptimo desempeño de tus equipos con soporte técnico especializado.",
        link: "https://wa.me/5493406401597?text=Hola,%20tengo%20una%20consulta%20sobre%20el%20servicio%20post%20venta",
        Icon: Wrench,
        isExternal: true
    },
    {
        id: 4,
        title: "Tecnología",
        description: "Productos innovadores para optimizar la agricultura con tecnología avanzada.",
        link: "/productos#leaf",
        Icon: Monitor,
    },
];
