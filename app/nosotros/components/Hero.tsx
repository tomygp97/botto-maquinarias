"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

export const Hero = () => {
	const [isLoading, setIsLoading] = useState(true);
	const size = useWindowSize();

	return (
		<>
			{isLoading && (
				<div className="h-96 w-full bg-gray-200 animate-pulse"></div>
			)}
			<Image
				src={ size.width && size.width < 768 ? "/nosotros-hero-mobile.jpg" : "/nosotros-hero.jpg"}
				alt="Logo"
				width={1900}
				height={200}
				className={`transition-opacity duration-500 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
				onLoadingComplete={() => setIsLoading(false)}
			/>
		</>
	)
}
