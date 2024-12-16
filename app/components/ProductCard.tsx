import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


type ProductCardProps = {
    name: string;
    description: string;
    imageUrl: string;
    specs?: string[];
    // link?: string;
    whatsappNumber: string,
    buttonText?: string;
};

export default function ProductCard({
    name, 
    description, 
    imageUrl, 
    specs= [], 
    // link,
    whatsappNumber,
    buttonText= "Solicitar Cotización" 
}: ProductCardProps) {

    const whatsappMessage = `Hola, estoy interesado en el producto "${name}"`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


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
                <Button asChild className="w-full">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        {buttonText}
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}