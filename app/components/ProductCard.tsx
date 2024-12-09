import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link";


type ProductCardProps = {
    name: string; // Nombre del producto o categoría
    description: string; // Descripción breve
    imageUrl: string; // URL de la imagen
    specs?: string[]; // Lista de especificaciones, opcional
    link?: string; // Enlace para redirigir, opcional
    buttonText?: string; // Texto del botón, opcional
};

export default function ProductCard({
    name, 
    description, 
    imageUrl, 
    specs= [], 
    link, 
    buttonText= "Solicitar Cotización" 
}: ProductCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <Image 
                    src={imageUrl} 
                    alt={name} 
                    width={400} 
                    height={300} 
                    className="rounded-md object-cover w-full h-48" 
                />
                <p className="mt-4 text-center">{description}</p>
                {specs.length > 0 && (
                    <ul className="mt-2 list-disc list-inside">
                        {specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter className="mt-auto">
                {link ? (
                <Button asChild className="w-full">
                    <Link href={link}>{buttonText}</Link>
                </Button>
                ) : (
                <Button className="w-full">{buttonText}</Button>
                )}
            </CardFooter>
        </Card>
    );
}