"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface YouTubeVideo {
    id: string
    title: string
}

const videos: YouTubeVideo[] = [
    { id: "oW-SPdwnF0Y?si=BrQUK_ZwDRJrTAwm", title: "YouTube video player" },
    { id: "FI9KOX4ShAA?si=-tJRIC5goUvo1pE8", title: "Interview 2" },
    { id: "x72QeOomykA?si=-ClUw_TGkXyEsgyb", title: "Interview 3" },
    { id: "wZO19S1PPZY?si=TSRHO9W_V8MulzqI", title: "Interview 4" },
]

export function YouTubeCarousel() {
    return (
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
                {videos.map((video) => (
                <CarouselItem key={video.id}>
                    <div className="p-1">
                        <div className="aspect-video">
                            <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

