import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function CategoryCard({ title, description, imageUrl }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={imageUrl} alt={title} width={400} height={300} className="rounded-md object-cover w-full h-48" />
                <p className="mt-4">{description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={`#${title.toLowerCase().replace(' ', '-')}`}>View {title}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}