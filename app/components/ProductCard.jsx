import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function ProductCard({ name, description, imageUrl, specs }) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <Image src={imageUrl} alt={name} width={400} height={300} className="rounded-md object-cover w-full h-48" />
                <p className="mt-4">{description}</p>
                <ul className="mt-2 list-disc list-inside">
                    {specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button className="w-full">Solicitar Cotización</Button>
            </CardFooter>
        </Card>
    )
}